function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('Moses the gayest')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
