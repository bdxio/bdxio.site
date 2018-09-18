import firebase from 'firebase/app';
import 'firebase/firestore';
import { Constants } from '../constants';

export const Types = {
  DATA_FETCH: 'DATA_FETCH',
};

// Initialize Firebase
firebase.initializeApp(Constants.firebaseConfig);

var db = firebase.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true,
});

// Add offline capabilities
db.enablePersistence().catch(function(err) {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code == 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});

const dumbCache = [];

export class Actions {
  static fetch(force = false) {
    if (force || !dumbCache['config']) {
      return dispatch => {
        let payload = {};
        let promises = [];
        Constants.firebaseDataConfig.collections.forEach(collection => {
          promises.push(
            db
              .collection(Constants.firebaseDataConfig.year)
              .doc(Constants.firebaseDataConfig.collectionName)
              .collection(collection)
              .get()
              .then(querySnapshot => {
                const docs = [];
                querySnapshot.forEach(function(doc) {
                  docs.push(doc.data());
                });
                payload[collection] = docs;
              })
              .catch(function(error) {
                console.error('Error getting document:', error);
                return error;
              }),
          );
        });
        promises.push(
          db
            .collection(Constants.firebaseDataConfig.year)
            .doc(Constants.firebaseDataConfig.documentConf)
            .get()
            .then(doc => {
              if (doc.exists) {
                payload[Constants.firebaseDataConfig.documentConf] = doc.data();
              } else {
                throw 'No such document!';
              }
            })
            .catch(function(error) {
              console.error('Error getting document:', error);
              return error;
            }),
        );

        Promise.all(promises).then(() => {
          dumbCache['config'] = payload;
          return dispatch({ type: Types.DATA_FETCH, payload });
        });
      };
    }
    return dispatch =>
      dispatch({
        type: Types.DATA_FETCH,
        payload: dumbCache['config'],
      });
  }

  static fetchFAQ(force = false) {
    if (force || !dumbCache['faq']) {
      return dispatch => {
        db.collection(Constants.firebaseDataConfig.year)
          .doc(Constants.firebaseDataConfig.collectionName)
          .collection(Constants.firebaseDataConfig.collectionFAQ)
          .get()
          .then(querySnapshot => {
            const docs = [];
            querySnapshot.forEach(function(doc) {
              docs.push(doc.data());
            });
            const payload = {};
            payload[Constants.firebaseDataConfig.collectionFAQ] = docs;
            dumbCache['config'] = payload;
            return dispatch({ type: Types.DATA_FETCH, payload });
          })
          .catch(function(error) {
            console.error('Error getting document:', error);
            return error;
          });
      };
    }
    return dispatch =>
      dispatch({
        type: Types.DATA_FETCH,
        payload: dumbCache['faq'],
      });
  }
}
