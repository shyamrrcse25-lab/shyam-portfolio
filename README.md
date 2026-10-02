# Resume / Portfolio — GitHub Pages + Google Sheets

## Features
- Semantic container sections: header/nav, main, section, article, aside, footer.
- Responsive navigation with links to every section.
- Contact Me form.
- Local JSON/localStorage fallback.
- Google Sheets database via Google Apps Script.
- Admin login demo with show/hide behavior.
- Admin view replaces the contact area with dynamically loaded responses and timestamps.
- Light/dark theme toggle.
- GitHub Pages-ready static frontend.

## 1. Create Google Sheet
Create a Google Sheet and copy its ID from the URL. Example:
`https://docs.google.com/spreadsheets/d/SHEET_ID/edit`

## 2. Deploy Apps Script
Open Extensions > Apps Script in the sheet. Paste `google-apps-script.gs`, replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE`, save, then Deploy > New deployment > Web app.
- Execute as: Me
- Who has access: Anyone
Copy the `/exec` URL.

## 3. Connect frontend
Open `index.html` and replace `PASTE_YOUR_GOOGLE_APPS_SCRIPT_EXEC_URL_HERE` with the `/exec` URL.

## 4. GitHub Pages
Create a GitHub repository, upload `index.html`, then open Settings > Pages.
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`
Your public site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`

## Demo admin credentials
Username: `admin`
Password: `admin123`

### Security note
This frontend-only login is suitable for a college/demo project, not sensitive production administration. A real production admin system should authenticate server-side and protect the response endpoint.
