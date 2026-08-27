/**
 * ═══════════════════════════════════════════════════════════════
 * युवा व्यवसायी गोष्ठी - Google Sheet Data Receiver
 * ═══════════════════════════════════════════════════════════════
 * 
 * यह script HTML form से data receive करके Google Sheet में save करती है।
 * 
 * ╔═══════════════════════════════════════════════════════════╗
 * ║  SETUP INSTRUCTIONS (सेटअप कैसे करें):                    ║
 * ║                                                           ║
 * ║  1. Google Sheet बनाओ (sheets.google.com)                 ║
 * ║  2. Extensions → Apps Script click करो                    ║
 * ║  3. यह code paste करो                                     ║
 * ║  4. Deploy → New Deployment                               ║
 * ║  5. Type: Web app                                         ║
 * ║  6. Execute as: Me                                        ║
 * ║  7. Who has access: Anyone                                ║
 * ║  8. Deploy click करो                                      ║
 * ║  9. URL copy करो → HTML file में paste करो                ║
 * ╚═══════════════════════════════════════════════════════════╝
 */

// Sheet setup - पहली बार run करो headers बनाने के लिए
function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Sheet name
  sheet.setName('पंजीकरण');
  
  // Headers set करो
  var headers = [
    'क्रमांक',
    'दिनांक / समय',
    'नाम',
    'पिता का नाम',
    'पत्र व्यवहार का पता',
    'शिक्षा',
    'व्यवसाय',
    'दूरभाष',
    'ई-पता',
    'रुचि के क्षेत्र'
  ];
  
  // Set headers in first row
  for (var i = 0; i < headers.length; i++) {
    sheet.getRange(1, i + 1).setValue(headers[i]);
  }
  
  // Format header row
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#FF671F');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(11);
  headerRange.setHorizontalAlignment('center');
  
  // Set column widths
  sheet.setColumnWidth(1, 60);   // क्रमांक
  sheet.setColumnWidth(2, 150);  // दिनांक
  sheet.setColumnWidth(3, 150);  // नाम
  sheet.setColumnWidth(4, 150);  // पिता का नाम
  sheet.setColumnWidth(5, 250);  // पता
  sheet.setColumnWidth(6, 120);  // शिक्षा
  sheet.setColumnWidth(7, 150);  // व्यवसाय
  sheet.setColumnWidth(8, 120);  // दूरभाष
  sheet.setColumnWidth(9, 180);  // ई-पता
  sheet.setColumnWidth(10, 300); // रुचि
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  Logger.log('Sheet setup complete!');
}

// POST request handler - form data receive करता है
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Get next row number (for serial number)
    var lastRow = sheet.getLastRow();
    var serialNo = lastRow; // Header is row 1, so data starts from row 2
    
    // Append data
    sheet.appendRow([
      serialNo,
      data.timestamp || new Date().toLocaleString('hi-IN'),
      data.naam || '',
      data.pita_naam || '',
      data.pata || '',
      data.shiksha || '',
      data.vyavsay || '',
      data.mobile || '',
      data.email || '',
      data.ruchi || ''
    ]);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success', message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET request handler (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status: 'active', message: 'युवा व्यवसायी गोष्ठी - Form backend is running!'}))
    .setMimeType(ContentService.MimeType.JSON);
}
