function sendToFirebase () {
  var sheets = SpreadsheetApp.getActive().getSheets();
  var res = {};
  sheets.forEach(function(sheet) {
    res[sheet.getName()] = sheetToObject(sheet)
    Logger.log(sheet.getName());
  });
  
  var url = 'https://us-central1-bdxio-website.cloudfunctions.net/saveData';
  post(res, url);
}

function post(data, url) {
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(data)
  };
  UrlFetchApp.fetch(url, options);
}

function sheetToObject(sheet){
  var output = [];
  
  var rows = sheet.getDataRange();
  var numRows = rows.getNumRows();
  var numCols = rows.getNumColumns();
  var values = rows.getValues();
  
  var header = values[0];
  for (var i = 1; i < numRows; i++) {
    var row = values[i];
    var name = row[0];
    var obj = {};
    for (var j = 0; j < numCols; j++) {
      var key = header[j];
      var value = row[j];
      obj[key] = value;
    }
    output.push(obj);
  }
  return output;
}