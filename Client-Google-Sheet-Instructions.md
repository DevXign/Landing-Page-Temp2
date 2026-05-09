# Connecting Your Website Contact Form to Google Sheets

To receive contact form submissions directly into your Google Sheet, please follow these simple setup steps. This ensures your data stays entirely on your own secure Google account.

## Step 1: Prepare the Google Sheet
1. Open Google Sheets and create a new blank spreadsheet.
2. In the very first row, add these exact headers in columns A through E:
   `Name` | `Email` | `Phone` | `Service` | `Message`

## Step 2: Add the Custom Script
1. In your Google Sheet, click on **Extensions > Apps Script** in the top menu.
2. Delete any existing code, and paste the script provided below:

```javascript
const sheetName = 'Sheet1'
const scriptProp = PropertiesService.getScriptProperties()

function initialSetup () {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1

    const newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }
  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }
  finally {
    lock.releaseLock()
  }
}
```

## Step 3: Run the Setup
1. Click the **Save** icon (floppy disk) at the top.
2. From the dropdown menu at the top (next to 'Debug'), select the function **`initialSetup`**.
3. Click the **Run** button. 
4. A popup will ask for permissions. Click **Review Permissions**, select your Google account, click **Advanced**, and then click **Go to Untitled project (unsafe)** to allow it.

## Step 4: Deploy and Get the URL
1. Click the blue **Deploy** button at the top right, and select **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Fill in the settings exactly like this:
   - Execute as: **Me**
   - Who has access: **Anyone** *(Important: Must be 'Anyone', otherwise the public website cannot send data to it).*
4. Click **Deploy**.
5. Copy the **Web app URL** provided in the confirmation screen.

**Please send this "Web app URL" back to your developer so they can link it to your website!**
