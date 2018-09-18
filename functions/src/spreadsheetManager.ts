import { google } from 'googleapis';
const sheets = google.sheets('v4');

export default class SpreadsheetManager {
  private jwtClient: any;

  constructor(apiKey: string) {
    this.jwtClient = google.auth.fromAPIKey(apiKey);
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

  spreadsheetToPOJO(
    spreadsheetArray: Object,
    keyValuePage: Array<string> = [],
  ): Object {
    const values = Object.keys(spreadsheetArray)
      .map(page => {
        return { [page]: spreadsheetArray[page] };
      })
      .reduce((acc, cur, i) => {
        const key = Object.keys(cur)[0];
        if (keyValuePage.indexOf(key) > -1) {
          acc[key] = this.arrayKeyValueToObject(cur[key]);
        } else {
          acc[key] = cur[key];
        }
        return acc;
      }, {});
    return values;
  }

  spreadsheetTableTopToPOJO(
    spreadsheetArray: Object,
    keyValuePage: Array<string> = [],
  ): Object {
    const values = Object.keys(spreadsheetArray)
      .map(page => {
        return { [page]: spreadsheetArray[page].elements };
      })
      .reduce((acc, cur, i) => {
        const key = Object.keys(cur)[0];
        if (keyValuePage.indexOf(key) > -1) {
          acc[key] = this.arrayKeyValueToObject(cur[key]);
        } else {
          acc[key] = cur[key];
        }
        return acc;
      }, {});
    return values;
  }

  getSheets(spreadsheetId: string): Promise<Object> {
    const sheetsResult = {};
    const requestSheets = {
      auth: this.jwtClient,
      spreadsheetId: spreadsheetId,
    };
    const promises = [];

    return new Promise((resolve, reject) => {
      sheets.spreadsheets.get(requestSheets, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        response.data.sheets.forEach(sheet => {
          promises.push(
            this.getSheetValues(sheet, spreadsheetId).then(sheetValues => {
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

  getSheetValues(sheet: any, spreadsheetId: string): Promise<Array<any>> {
    const title = sheet.properties.title;
    const sheetValues = [];
    const requestSheet = {
      auth: this.jwtClient,
      spreadsheetId: spreadsheetId,
      range: title,
    };
    return new Promise((resolve, reject) => {
      sheets.spreadsheets.values.get(requestSheet, (err, response) => {
        if (err) {
          reject(err);
          return;
        }

        let labels;
        response.data.values.forEach((row, indexRow) => {
          if (indexRow === 0) {
            labels = row;
            labels.push('lineNumber');
          } else {
            sheetValues[indexRow - 1] = {};
            row.forEach((column, indexColumn) => {
              sheetValues[indexRow - 1][labels[indexColumn]] = column;
            });
            sheetValues[indexRow - 1][labels[labels.length - 1]] = indexRow - 1;
          }
        });
        resolve(sheetValues);
      });
    });
  }
}
