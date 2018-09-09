import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as Tabletop from 'tabletop';
admin.initializeApp();

// const firestore = new Firestore();
// const settings = {/* your settings... */ timestampsInSnapshots: true };
// firestore.settings(settings);

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
    Speakers17: ['Nom', 'Prénom'],
    Sponsors: 'Société',
    News: 'ID',
    'Talk assets': 'ID Talks',
  },
};

function arrayKeyValueToObject(array, key = 'Propriété', value = 'Valeur') {
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

function spreadsheetToPOJO(spreadsheetArray) {
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

function getID(object, label, collectionsId = CONFIG.collectionsId) {
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

export const spreadsheet = functions.https.onRequest((request, response) => {
  const promises = [];
  Tabletop.init({
    key: CONFIG.gSheets.published_data,
    callback: data => {
      const res = spreadsheetToPOJO(data);

      Object.keys(res).forEach(key => {
        const element = res[key];
        if (CONFIG.ignore.indexOf(key) > -1) {
          return null;
        }

        if (Array.isArray(element) && element.length > 0) {
          const batch = admin.firestore().batch();
          const refCollection = admin
            .firestore()
            .collection(CONFIG.year)
            .doc(CONFIG.arrayCollection)
            .collection(key);
          element.forEach(obj => {
            batch.set(refCollection.doc(getID(obj, key)), obj);
          });
          promises.push(
            batch
              .commit(),
          );
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

      Promise.all(promises).then(() => {
        response.send('🚀 Website config is up to date ! 🎉');
      }).catch((error)=> {
        response.send('😱 Something went wrong 👉' + error);
      })
    },
  });
});
