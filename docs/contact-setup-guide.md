# CosyCase Contact Form — Google Sheets Webhook Setup

This guide walks you through setting up a Google Sheets backend that receives submissions from the CosyCase Contact form. When a visitor fills out the form on cosycases.com, the data is POSTed to a Google Apps Script webhook, which appends a new row to your spreadsheet.

**Estimated time:** 10–15 minutes  
**Prerequisites:** A Google account (personal or G Suite)

---

## Step 1: Create Your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and sign in.
2. Click the **+** (Blank) button to create a new spreadsheet.
3. Rename the spreadsheet to **CosyCase Contact Submissions** (click the title at the top-left to edit it).
4. In row 1, enter these column headers exactly as shown:

   | A         | B      | C       | D        | E          | F       |
   |-----------|--------|---------|----------|------------|---------|
   | Timestamp | Name   | Email   | Category | App Version | Message |

   > The Apps Script in Step 3 will insert rows using this column order, so the headers must match exactly.

---

## Step 2: Open the Apps Script Editor

1. In your Google Sheet, click **Extensions** in the top menu bar.
2. Select **Apps Script** from the dropdown.
   - A new browser tab opens with the Apps Script editor.
3. You'll see a default `myFunction()` placeholder. **Delete all the default code** — select everything and remove it so the editor is empty.
4. Click the project name at the top-left (likely "Untitled project") and rename it to **CosyCase Contact Webhook**.

---

## Step 3: Paste the Apps Script Code

Copy the entire code block below and paste it into the Apps Script editor (replacing anything that was there).

```javascript
/**
 * doPost(e)
 * Handles POST requests from the CosyCase Contact form.
 *
 * Expected JSON body:
 *   { name, email, category, appVersion, message }
 *
 * Appends a timestamped row to the active sheet and returns JSON.
 */
function doPost(e) {
  // --------------------------------------------------------------------
  // 1. Lock service — prevents concurrent writes from colliding
  // --------------------------------------------------------------------
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // wait up to 10 seconds

  try {
    // ------------------------------------------------------------------
    // 2. Parse the incoming JSON payload
    //    e.postData.contents contains the raw POST body as a string.
    // ------------------------------------------------------------------
    const payload = JSON.parse(e.postData.contents);

    // ------------------------------------------------------------------
    // 3. Extract fields (with fallback to empty string)
    // ------------------------------------------------------------------
    const name       = payload.name       || "";
    const email      = payload.email      || "";
    const category   = payload.category   || "";
    const appVersion = payload.appVersion || "";
    const message    = payload.message    || "";

    // ------------------------------------------------------------------
    // 4. Get the active sheet and append a new row
    //    Column order: Timestamp | Name | Email | Category | App Version | Message
    //    This must match the header row you created in Step 1.
    // ------------------------------------------------------------------
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([new Date(), name, email, category, appVersion, message]);

    // ------------------------------------------------------------------
    // 5. Return a success response as JSON
    // ------------------------------------------------------------------
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // ------------------------------------------------------------------
    // 6. If anything fails, return an error response
    // ------------------------------------------------------------------
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    // ------------------------------------------------------------------
    // 7. Always release the lock
    // ------------------------------------------------------------------
    lock.releaseLock();
  }
}
```

> **Don't skip the comments.** Each section explains what the code does and how it connects to the rest of the setup.

### What the code does

- **`doPost(e)`** — Google Apps Script runs this function automatically when your webhook receives an HTTP POST request.
- **`e.postData.contents`** — The raw string body of the POST. We `JSON.parse()` it to get the form fields.
- **`sheet.appendRow(...)`** — Adds a new row to the bottom of your spreadsheet with the current timestamp, then the five form fields (in the exact order matching your headers from Step 1).
- **`ContentService.createTextOutput(...)`** — Returns a JSON response to the Contact form so it knows whether the submission succeeded or failed.
- **`LockService`** — Prevents a rare race condition where two submissions arrive at the same moment and interfere with each other.

Save the project via **Ctrl+S** (Cmd+S on Mac) or by clicking the floppy-disk icon.

---

## Step 4: Deploy as a Web App

This step publishes your script as a live HTTP endpoint that the Contact form can reach.

1. In the Apps Script editor, click the blue **Deploy** button (top-right corner).
2. Select **New deployment** from the dropdown.
3. Click the gear icon ⚙️ next to **Select type**, then choose **Web app**.
4. Fill in the deployment settings:

   | Setting               | Value                                             |
   |-----------------------|---------------------------------------------------|
   | Description           | `CosyCase contact form webhook`                   |
   | Execute as            | **Me** (your Google account)                       |
   | Who has access         | **Anyone**                                         |

   > **Why "Anyone"?** The Contact form runs in visitors' browsers (client-side JavaScript). Setting access to "Anyone" allows cross-origin POST requests from cosycases.com to reach this webhook. Without this, the form won't work.

5. Click the blue **Deploy** button.
6. Google will show an **Authorization** screen asking for permission. Click **Authorize access**.
   - Select your Google account.
   - You may see a "Google hasn't verified this app" warning — click **Advanced**, then **Go to CosyCase Contact Webhook (unsafe)**. This is normal for scripts you create yourself.
   - Click **Allow** on the permissions screen.
7. After authorization, you'll see the **New deployment** dialog with a **Web app URL**. It looks like:

   ```
   https://script.google.com/macros/s/AKfycbw.../exec
   ```

8. **Click "Copy"** to copy the URL. Keep this somewhere handy — you'll need it in Step 5.

> 💡 If you ever need to update the script code, use **Deploy → Manage deployments** → click the pencil icon ✏️ on your deployment → select **New version** → **Deploy**. The webhook URL stays the same.

---

## Step 5: Configure the Webhook URL in the Codebase

1. Open the Contact form component in your editor:

   ```
   src/components/Contact.tsx
   ```

2. Find the `WEBHOOK_URL` constant at the top of the file. It looks like this:

   ```tsx
   const WEBHOOK_URL = "PLACEHOLDER_REPLACE_WITH_YOUR_WEBHOOK_URL";
   ```

3. Replace the placeholder string with the URL you copied in Step 4:

   ```tsx
   const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw.../exec";
   ```

4. Save the file.

5. Rebuild the site so the change takes effect:

   ```bash
   npm run build
   ```

   > The site uses static export (`output: "export"`), so you must rebuild after editing any constants. The new `out/` directory will include the updated webhook URL.

---

## Step 6: Verify Your Setup

Before going live, send a test submission to make sure everything is wired up correctly.

### Option A: Use curl (terminal)

Run this command, replacing `YOUR_WEBHOOK_URL` with the URL from Step 4:

```bash
curl -X POST \
  -H "Content-Type: text/plain" \
  -d '{"name":"Test User","email":"test@example.com","category":"Other","appVersion":"1.0","message":"This is a test submission from the setup guide."}' \
  YOUR_WEBHOOK_URL
```

Expected response:

```json
{"success":true}
```

### Option B: Use the live form

If you've already deployed the rebuilt site, navigate to `https://cosycases.com/contact`, fill out the form, and submit. On success you should see a green checkmark and confirmation message.

### Check the spreadsheet

Open your **CosyCase Contact Submissions** sheet. You should see a new row with:

| Timestamp            | Name      | Email             | Category | App Version | Message                                    |
|----------------------|-----------|-------------------|----------|-------------|--------------------------------------------|
| 6/9/2026 14:30:00  | Test User | test@example.com  | Other    | 1.0         | This is a test submission from the setup…  |

If the row appears — you're all set! 🎉

---

## Troubleshooting

### I get `{"success":false,"error":"..."}` from curl

- Make sure the JSON in your `-d` argument is valid (quotes match, no trailing commas).
- Check that the script is deployed with access set to **Anyone** (Step 4).
- Open the Apps Script editor and click **Executions** (left sidebar) to see error logs.

### The Google Sheet stays empty after submitting

- Verify the **sheet name** isn't the issue — the script writes to the **active sheet** (whichever tab is open). Make sure you have the "CosyCase Contact Submissions" sheet tab selected, or modify the script to target a specific sheet by name:

  ```javascript
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  ```

### The Contact form always shows an error

- Open the browser's developer console (F12 → Console). If you see a CORS error, revisit Step 4 and confirm "Who has access" is set to **Anyone**.
- If you see a 404 or network error, double-check the `WEBHOOK_URL` value in `src/components/Contact.tsx` — make sure there are no extra spaces or missing characters.

### I updated the script code but the change isn't taking effect

New versions of the script must be explicitly deployed. In the Apps Script editor:

1. Click **Deploy** → **Manage deployments**.
2. Click the pencil icon ✏️ next to your web app deployment.
3. Change **Version** to **New version**.
4. Click **Deploy**.

---

## Need Help?

If you run into issues not covered here, reach out at **hello@cosycases.com** and we'll help you get it sorted.

---

## Security Note

The webhook URL is a public value embedded in the client-side JavaScript bundle (the site is fully static). This means anyone inspecting the page source can see it. This is fine — Google Apps Script webhooks are designed for this use case: the URL alone doesn't grant access to your Google account or other spreadsheets. The script only appends rows to the specific spreadsheet it was deployed against.
