// ── Karjeras kompass: datu vākšana Google Sheet ──
// Uzstādīšana:
// 1. Izveido jaunu Google Sheet (sheets.new).
// 2. Extensions → Apps Script. Izdzēs visu un ielīmē šo kodu. Saglabā.
// 3. Deploy → New deployment → tips: Web app.
//      Execute as: Me   |   Who has access: Anyone
//    Deploy → autorizē → nokopē Web app URL.
// 4. Ielīmē šo URL index.html mainīgajā  const SHEET_ENDPOINT='...'
// 5. Push uz GitHub Pages. Katrs pabeigts tests pievienos rindu šajā Sheet.
//
// Dati ir anonīmi (nav vārda/e-pasta). run_id ir nejaušs.

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Dati') || ss.insertSheet('Dati');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['ts','run_id','interests','vector','affinity',
                     'top1','top1_final','top1_sim','top2','top3']);
  }
  var d = JSON.parse(e.postData.contents);
  var t = d.top || [];
  sheet.appendRow([
    d.ts, d.run_id, (d.interests || []).join(';'),
    JSON.stringify(d.vector || {}), JSON.stringify(d.affinity || {}),
    t[0] ? t[0].name : '', t[0] ? t[0].final : '', t[0] ? t[0].sim : '',
    t[1] ? t[1].name : '', t[2] ? t[2].name : ''
  ]);
  return ContentService.createTextOutput('ok');
}
