require('script-loader!../../static/libs/tabletop.min.js');
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Constants } from '../constants';

export const Types = {
  DATA_FETCH: 'DATA_FETCH',
};

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBaeo0bHhp71f4I5PlRnszmePDpZuHJqBo",
  authDomain: "bdxio-website.firebaseapp.com",
  databaseURL: "https://bdxio-website.firebaseio.com",
  projectId: "bdxio-website",
  storageBucket: "bdxio-website.appspot.com",
  messagingSenderId: "360638530775"
};
firebase.initializeApp(config);

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

const FIREBASE = {
  year: '2018',
  collectionName: 'Array',
  documentConf: 'Config',
  collections: ['Orgas', 'Speakers', 'Speakers17', 'Sponsors', 'News'],
};

let dumbCache;

export class Actions {
  static fetch(force = false) {
    if (force || !dumbCache) {
      return dispatch => {
        let res = {};
        let promises = [];
        FIREBASE.collections.forEach(collection => {
          promises.push(db
              .collection(FIREBASE.year)
              .doc(FIREBASE.collectionName)
              .collection(collection)
              .get()
              .then(querySnapshot => {
                const docs = [];
                querySnapshot.forEach(function(doc) {
                  docs.push(doc.data());
                });
                res[collection] = docs;
              })
              .catch(function(error) {
                console.error('Error getting document:', error);
                return error;
              }));
        });
        promises.push(db
            .collection(FIREBASE.year)
            .doc(FIREBASE.documentConf)
            .get()
            .then(doc => {
              if (doc.exists) {
                res[FIREBASE.documentConf] = doc.data();
              } else {
                throw 'No such document!';
              }
            })
            .catch(function(error) {
              console.error('Error getting document:', error);
              return error;
            }));

        Promise.all(promises).then(() => {
          dumbCache = res;
          return dispatch({ type: Types.DATA_FETCH, payload: res });
        });
      };
    }
    return dispatch =>
      dispatch({
        type: Types.DATA_FETCH,
        payload: dumbCache,
      });
  }

  static fetchFAQ() {
    return dispatch => {
      Tabletop.init({
        key: Constants.gSheets.FAQ,
        callback: data => {
          return dispatch({
            type: Types.DATA_FETCH,
            payload: { data },
          });
        },
      });
    };
  }
}
