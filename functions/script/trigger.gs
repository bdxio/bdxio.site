function syncToFirebase() {
  var url = 'https://us-central1-bdxio-website.cloudfunctions.net/spreadsheetSyncByApi'
  var options = {
    'method' : 'get',
  };
  UrlFetchApp.fetch(url, options);
}
