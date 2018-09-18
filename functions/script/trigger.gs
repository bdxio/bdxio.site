function syncConfigToFirebase() {
  var url = 'https://us-central1-bdxio-website.cloudfunctions.net/spreadsheetConfigSyncByApi'
  var options = {
    'method' : 'get',
  };
  UrlFetchApp.fetch(url, options);
}

function syncFaqToFirebase() {
  var url = 'https://us-central1-bdxio-website.cloudfunctions.net/spreadsheetFAQSyncByApi'
  var options = {
    'method' : 'get',
  };
  UrlFetchApp.fetch(url, options);
}

