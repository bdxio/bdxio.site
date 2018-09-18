import * as functions from 'firebase-functions';
import * as Tabletop from 'tabletop';
import { API_KEY } from './key';
import SpreadsheetManager from './SpreadsheetManager';
import FirestoreManager from './FirestoreManager';

const CONFIG = {
  gSheets: {
    published_data: '1Xa5_JN0KSTvG2sxj57Zr5cWEaOppMIprytPCwrLeP5k',
    FAQ: '1Emcr1SWknkzi2GHfB9ooVq95GDR_D5C9BApg6uhqcYs',
  },
  ignore: ['MediasCommunications', 'Talk assets'],
  year: '2018',
  arrayCollection: 'Array',
  documentConf: 'Config',
  documentFAQ: 'FAQ',
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

export const spreadsheetSyncByApi = functions.https.onRequest(
  (request, response) => {
    const spreadsheetManager = new SpreadsheetManager(API_KEY, CONFIG);
    const firestoreManager = new FirestoreManager(CONFIG);
    
    spreadsheetManager
      .getSheets()
      .then(sheetsValues => {
        const promises = [];
        const res = spreadsheetManager.spreadsheetToPOJO(sheetsValues);
        firestoreManager.saveDate(res, promises);
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
  const spreadsheetManager = new SpreadsheetManager(API_KEY, CONFIG);
  const firestoreManager = new FirestoreManager(CONFIG);

  Tabletop.init({
    key: CONFIG.gSheets.published_data,
    callback: data => {
      const res = spreadsheetManager.spreadsheetTableTopToPOJO(data);
      firestoreManager.saveDate(res, promises);

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


export const saveData = functions.https.onRequest(async (request, response) => {
  const data = request.body;
  const promises = [];
  const spreadsheetManager = new SpreadsheetManager(API_KEY, CONFIG);
  const firestoreManager = new FirestoreManager(CONFIG);

  const res = spreadsheetManager.spreadsheetToPOJO(data);
  firestoreManager.saveDate(res, promises);

  Promise.all(promises)
    .then(() => {
      response.send('🚀 Website config is up to date ! 🎉');
    })
    .catch(error => {
      response.send('😱 Something went wrong 👉' + error);
    });
});
