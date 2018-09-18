import { google } from 'googleapis';
const sheets = google.sheets('v4');

class ConfigSheet {
  published_data: string;
}

class ConfigSpreadsheetManager {
  gSheets: ConfigSheet;
  documentConf: string;
  documentFAQ: string;
}

export default class SpreadsheetManager {
  private jwtClient: any;
  private config: any;

  constructor(apiKey: string, config: ConfigSpreadsheetManager) {
    this.jwtClient = google.auth.fromAPIKey(apiKey);
    this.config = config;
  }

  arrayKeyValueToObject(
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

  spreadsheetToPOJO(spreadsheetArray: Object): Object {
    const values = Object.keys(spreadsheetArray)
      .map(page => {
        return { [page]: spreadsheetArray[page] };
      })
      .reduce((acc, cur, i) => {
        const key = Object.keys(cur)[0];
        if (key === this.config.documentConf) {
          acc[key] = this.arrayKeyValueToObject(cur[key]);
        } else {
          acc[key] = cur[key];
        }
        return acc;
      }, {});
    return values;
  }

  spreadsheetTableTopToPOJO(spreadsheetArray: Object): Object {
    const values = Object.keys(spreadsheetArray)
      .map(page => {
        return { [page]: spreadsheetArray[page].elements };
      })
      .reduce((acc, cur, i) => {
        const key = Object.keys(cur)[0];
        if (key === this.config.documentConf) {
          acc[key] = this.arrayKeyValueToObject(cur[key]);
        } else {
          acc[key] = cur[key];
        }
        return acc;
      }, {});
    return values;
  }

  getSheets(): Promise<Object> {
    const sheetsResult = {};
    const requestSheets = {
      auth: this.jwtClient,
      spreadsheetId: this.config.gSheets.published_data,
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
            this.getSheetValues(this.jwtClient, sheet).then(sheetValues => {
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

  getSheetValues(sheet): Promise<Array<any>> {
    const title = sheet.properties.title;
    const sheetValues = [];
    const requestSheet = {
      auth: this.jwtClient,
      spreadsheetId: this.config.gSheets.published_data,
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
}
