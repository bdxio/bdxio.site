function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Sync')
      .addItem('Sync to firebase', 'syncConfigToFirebase')
      //.addItem('Send to firebase', 'sendToFirebase')
      .addToUi();
}

// function onOpen() {
//   var ui = SpreadsheetApp.getUi();
//   ui.createMenu('Sync')
//     .addItem('Sync to firebase', 'syncFaqToFirebase')
//     //.addItem('Send to firebase', 'sendToFirebase')
//     .addToUi();
// }

