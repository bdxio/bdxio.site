function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Sync')
      .addItem('Sync to firebase', 'syncToFirebase')
      .addItem('Send to firebase', 'sendToFirebase')
      .addToUi();
}
