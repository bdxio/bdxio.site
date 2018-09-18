import * as admin from 'firebase-admin';

class ConfigFirestoreManager {
  ignore: Array<string>;
  year: string;
  arrayCollection: string;
  collectionsId: Array<string | Array<string>>;
}

export default class FirestoreManager {
  config: ConfigFirestoreManager;

  constructor(config) {
    this.config = config;
    admin.initializeApp();
    const settings = { timestampsInSnapshots: true };
    admin.firestore().settings(settings);
  }

  saveDate(data: Object): Promise<any> {
    const promises = [];
    Object.keys(data).forEach(key => {
      const element = data[key];
      if (this.config.ignore.indexOf(key) > -1) {
        return null;
      }

      if (Array.isArray(element) && element.length > 0) {
        console.log(key);
        const batch = admin.firestore().batch();
        const refCollection = admin
          .firestore()
          .collection(this.config.year)
          .doc(this.config.arrayCollection)
          .collection(key);
        element.forEach(obj => {
          batch.set(refCollection.doc(this.getID(obj, key) + ''), obj);
        });
        promises.push(batch.commit());
      } else {
        promises.push(
          admin
            .firestore()
            .collection(this.config.year)
            .doc(key)
            .set(element),
        );
      }
    });
    return Promise.all(promises);
  }

  getID(object: Object, label: string): string {
    if (Array.isArray(this.config.collectionsId[label])) {
      let res = '';
      this.config.collectionsId[label].forEach(part => {
        res += object[part];
      });
      return res;
    }
    if (this.config.collectionsId[label]) {
      return object[this.config.collectionsId[label]];
    }
    return object['ID'];
  }
}
