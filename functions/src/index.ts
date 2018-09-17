import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as Tabletop from 'tabletop';
import { google } from 'googleapis';
const sheets = google.sheets('v4');
import { API_KEY } from './key';

admin.initializeApp();
const settings = { timestampsInSnapshots: true };
admin.firestore().settings(settings);

const CONFIG = {
  gSheets: {
    published_data: '1Xa5_JN0KSTvG2sxj57Zr5cWEaOppMIprytPCwrLeP5k',
    FAQ: '1Emcr1SWknkzi2GHfB9ooVq95GDR_D5C9BApg6uhqcYs',
  },
  ignore: ['MediasCommunications', 'Talk assets'],
  year: '2018',
  arrayCollection: 'Array',
  collectionsId: {
    Orgas: 'Nom',
    Speakers18: ['Nom', 'Prénom'],
    Speakers: ['Nom', 'Prénom'],
    Speakers17: ['Nom', 'Prénom'],
    Sponsors: 'Société',
    News: 'ID',
    'Talk assets': 'ID Talks',
  },
};

function arrayKeyValueToObject(
  array: Array<any>,
  key = 'Propriété',
  value = 'Valeur',
): Object {
  const res = {};
  array.forEach(element => {
    try {
      res[element[key]] = JSON.parse(element[value]);
    } catch (e) {
      res[element[key]] = element[value];
    }
  });
  return res;
}

function spreadsheetToPOJO(spreadsheetArray: Object): Object {
  const values = Object.keys(spreadsheetArray)
    .map(page => {
      return { [page]: spreadsheetArray[page] };
    })
    .reduce((acc, cur, i) => {
      const key = Object.keys(cur)[0];
      if (key === 'Config') {
        acc[key] = arrayKeyValueToObject(cur[key]);
      } else {
        acc[key] = cur[key];
      }
      return acc;
    }, {});
  return values;
}

function spreadsheetTableTopToPOJO(spreadsheetArray) {
  const values = Object.keys(spreadsheetArray)
    .map(page => {
      return { [page]: spreadsheetArray[page].elements };
    })
    .reduce((acc, cur, i) => {
      const key = Object.keys(cur)[0];
      if (key === 'Config') {
        acc[key] = arrayKeyValueToObject(cur[key]);
      } else {
        acc[key] = cur[key];
      }
      return acc;
    }, {});
  return values;
}

function getID(
  object: Object,
  label: string,
  collectionsId = CONFIG.collectionsId,
): string {
  if (Array.isArray(collectionsId[label])) {
    let res = '';
    collectionsId[label].forEach(part => {
      res += object[part];
    });
    return res;
  }
  if (collectionsId[label]) {
    return object[collectionsId[label]];
  }
  return object['ID'];
}

function saveDate(data: Object, promises: Array<Promise<any>>): void {
  Object.keys(data).forEach(key => {
    const element = data[key];
    if (CONFIG.ignore.indexOf(key) > -1) {
      return null;
    }

    if (Array.isArray(element) && element.length > 0) {
      console.log(key);
      const batch = admin.firestore().batch();
      const refCollection = admin
        .firestore()
        .collection(CONFIG.year)
        .doc(CONFIG.arrayCollection)
        .collection(key);
      element.forEach(obj => {
        batch.set(refCollection.doc(getID(obj, key) + ''), obj);
      });
      promises.push(batch.commit());
    } else {
      promises.push(
        admin
          .firestore()
          .collection(CONFIG.year)
          .doc(key)
          .set(element),
      );
    }
  });
}

function getSheets(jwtClient): Promise<Object> {
  const sheetsResult = {};
  const requestSheets = {
    auth: jwtClient,
    spreadsheetId: CONFIG.gSheets.published_data,
  };
  const promises = [];

  return new Promise(function(resolve, reject) {
    sheets.spreadsheets.get(requestSheets, (err, response) => {
      if (err) {
        reject(err);
        return;
      }
      response.data.sheets.forEach(sheet => {
        promises.push(
          getSheetValues(jwtClient, sheet).then(sheetValues => {
            sheetsResult[sheet.properties.title] = sheetValues;
            return sheetValues;
          }),
        );
      });

      Promise.all(promises)
        .then(() => {
          resolve(sheetsResult);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

function getSheetValues(jwtClient, sheet): Promise<Array<any>> {
  const title = sheet.properties.title;
  const sheetValues = [];
  const requestSheet = {
    auth: jwtClient,
    spreadsheetId: CONFIG.gSheets.published_data,
    range: title,
  };
  return new Promise(function(resolve, reject) {
    sheets.spreadsheets.values.get(requestSheet, (err, response) => {
      if (err) {
        reject(err);
        return;
      }

      let labels;
      response.data.values.forEach((row, indexRow) => {
        if (indexRow === 0) {
          labels = row;
        } else {
          sheetValues[indexRow - 1] = {};
          row.forEach((column, indexColumn) => {
            sheetValues[indexRow - 1][labels[indexColumn]] = column;
          });
        }
      });
      resolve(sheetValues);
    });
  });
}

export const spreadsheetSyncByApi = functions.https.onRequest(
  (request, response) => {
    const jwtClient = google.auth.fromAPIKey(API_KEY);
    getSheets(jwtClient)
      .then(sheetsValues => {
        const promises = [];
        const res = spreadsheetToPOJO(sheetsValues);
        saveDate(res, promises);
        return Promise.all(promises);
      })
      .then(() => {
        response.send('🚀 Website config is up to date ! 🎉');
      })
      .catch(error => {
        response.send('😱 Something went wrong 👉' + error);
      });
  },
);

export const spreadsheetSyncByTabletop = functions.https.onRequest((request, response) => {
  const promises = [];

  Tabletop.init({
    key: CONFIG.gSheets.published_data,
    callback: data => {
      const res = spreadsheetTableTopToPOJO(data);
      saveDate(res, promises);

      Promise.all(promises)
        .then(() => {
          response.send('🚀 Website config is up to date ! 🎉');
        })
        .catch(error => {
          response.send('😱 Something went wrong 👉' + error);
        });
    },
  });
});

/**
 * Trigger by code.gs on the taget spreadsheet
 */
export const saveData = functions.https.onRequest(async (request, response) => {
  const data = request.body;
  const promises = [];

  const res = spreadsheetToPOJO(data);
  saveDate(res, promises);

  Promise.all(promises)
    .then(() => {
      response.send('🚀 Website config is up to date ! 🎉');
    })
    .catch(error => {
      response.send('😱 Something went wrong 👉' + error);
    });
});
