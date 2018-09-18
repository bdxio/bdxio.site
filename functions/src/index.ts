import * as functions from 'firebase-functions';
import { API_KEY } from './key';
import SpreadsheetManager from './spreadsheetManager';
import FirestoreManager from './firestoreManager';

const CONFIG = {
  config: {
    spreadsheetId: '1Xa5_JN0KSTvG2sxj57Zr5cWEaOppMIprytPCwrLeP5k',
    ignore: ['MediasCommunications', 'Talk assets'],
    year: '2018',
    arrayCollection: 'Array',
    keyValuePage: ['Config'],
    collectionsId: {
      Orgas: 'Nom',
      Speakers18: ['Nom', 'Prénom'],
      Speakers: ['Nom', 'Prénom'],
      Speakers17: ['Nom', 'Prénom'],
      Sponsors: 'Société',
      News: 'ID',
      'Talk assets': 'ID Talks',
    },
  },
  faq: {
    spreadsheetId: '1Emcr1SWknkzi2GHfB9ooVq95GDR_D5C9BApg6uhqcYs',
    year: '2018',
    arrayCollection: 'Array',
    ignore: [],
    collectionsId: {
      FAQ: 'lineNumber',
    },
  },
};

export const spreadsheetFAQSyncByApi = functions.https.onRequest(
  (request, response) => {
    const spreadsheetManager = new SpreadsheetManager(API_KEY);
    const firestoreManager = new FirestoreManager(CONFIG.faq);

    spreadsheetManager
      .getSheets(CONFIG.faq.spreadsheetId)
      .then(sheetsValues => {
        return firestoreManager.save(
          spreadsheetManager.spreadsheetToPOJO(sheetsValues),
        );
      })
      .then(() => {
        response.send('🚀 Website config is up to date ! 🎉');
      })
      .catch(error => {
        response.send('😱 Something went wrong 👉' + error);
      });
  },
);

export const spreadsheetConfigSyncByApi = functions.https.onRequest(
  (request, response) => {
    const spreadsheetManager = new SpreadsheetManager(API_KEY);
    const firestoreManager = new FirestoreManager(CONFIG.config);

    spreadsheetManager
      .getSheets(CONFIG.config.spreadsheetId)
      .then(sheetsValues => {
        return firestoreManager.save(
          spreadsheetManager.spreadsheetToPOJO(
            sheetsValues,
            CONFIG.config.keyValuePage,
          ),
        );
      })
      .then(() => {
        response.send('🚀 Website config is up to date ! 🎉');
      })
      .catch(error => {
        response.send('😱 Something went wrong 👉' + error);
      });
  },
);


// export const saveData = functions.https.onRequest(async (request, response) => {
//   const spreadsheetManager = new SpreadsheetManager(API_KEY);
//   const firestoreManager = new FirestoreManager(CONFIG.config);

//   firestoreManager
//     .save(
//       spreadsheetManager.spreadsheetToPOJO(
//         request.body,
//         CONFIG.config.keyValuePage,
//       ),
//     )
//     .then(() => {
//       response.send('🚀 Website config is up to date ! 🎉');
//     })
//     .catch(error => {
//       response.send('😱 Something went wrong 👉' + error);
//     });
// });
