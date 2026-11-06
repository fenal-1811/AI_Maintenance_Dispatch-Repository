# AI Maintenance Dispatch Agent — Project Package

## Frontend pages
- `index.html`: Employee maintenance request form.
- `admin-dashboard.html`: Admin overview with illustrative demo records.
- `technician-dashboard.html`: Technician job view with illustrative demo status control.
- `css/style.css`: Shared responsive styling.
- `js/app.js`: Sends the employee request to the WF01 webhook.
- `js/admin.js`: Local demo data for the admin dashboard.

## n8n workflow exports
The `workflows/` folder contains four starter workflow exports:
1. WF01_Maintenance_Request_Intake
2. WF02_AI_Issue_Analyzer
3. WF03_Technician_Matching
4. WF04_Status_Validation

## Run the frontend
1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Install the VS Code extension "Live Server".
4. Right-click `index.html` and choose "Open with Live Server".
5. Open `admin-dashboard.html` and `technician-dashboard.html` directly to inspect the demo pages.

## Configure n8n
1. Import each JSON file from `workflows/` into n8n.
2. Configure Google Sheets OAuth credentials.
3. Replace `REPLACE_WITH_SPREADSHEET_ID` with your spreadsheet ID in Google Sheets nodes.
4. Map the 13 Maintenance_Requests columns in WF01.
5. Configure the Technicians tab and verify the Get Row(s) operation in WF03.
6. In WF02, replace the Gemini API key placeholder or configure a secure credential.
7. In `js/app.js`, replace `REPLACE_WITH_N8N_WEBHOOK_URL` with your WF01 test URL while testing. Switch to the production URL only after activation and security configuration.

## Important implementation status
This is a structured learning starter package, not a finished production application.
- WF01 handles request validation/classification and is intended to append a ticket to Google Sheets once credentials, spreadsheet ID and column mappings are configured.
- WF02 performs a separate Gemini issue-analysis request. It is not yet called automatically by WF01.
- WF03 recommends a matching technician; it does not reserve the technician or update the ticket.
- WF04 validates a proposed status; it does not persist the status update.
- Admin and technician pages currently use sample/demo data. They are not connected to live records or authenticated role-based accounts.
- Human approval, dispatch notifications, real status updates, audit logs, access control, CORS restrictions, rate limiting, secrets management and deployment hardening remain to be implemented.

## Safety
For fire, gas leaks, electrical hazards, flooding or structural danger, direct employees to the site's emergency procedure and require qualified human review. Do not rely on AI-generated repair instructions for hazardous work.
