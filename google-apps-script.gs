/**
 * Google Apps Script backend for the portfolio contact form.
 * Create a Google Sheet and set its ID below.
 * Deploy: Deploy > New deployment > Web app > Execute as Me > Who has access: Anyone.
 */
const SPREADSHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Responses";

function getSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
  return sheet;
}

function doPost(e) {
  try {
    const p = e.parameter || {};
    if (!p.name || !p.email || !p.message) return json_({status:"error", message:"Missing required fields"});
    getSheet_().appendRow([new Date(), p.name, p.email, p.message]);
    return json_({status:"success"});
  } catch (err) {
    return json_({status:"error", message:String(err)});
  }
}

function doGet(e) {
  try {
    if ((e.parameter || {}).action !== "getResponses") return json_({status:"ok", message:"Portfolio API is running"});
    const values = getSheet_().getDataRange().getValues();
    if (values.length <= 1) return json_({status:"success", responses:[]});
    const responses = values.slice(1).map(r => ({timestamp:r[0], name:r[1], email:r[2], message:r[3]}));
    return json_({status:"success", responses:responses});
  } catch (err) {
    return json_({status:"error", message:String(err), responses:[]});
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
