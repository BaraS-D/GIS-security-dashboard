# Baghdad GIS Security Intelligence Dashboard

A static bilingual (English / Arabic RTL) dashboard built with HTML, CSS, JavaScript, Leaflet, OpenStreetMap, and Chart.js. It needs no backend, database, API key, or build step. The website files are ready to publish with GitHub Pages.

> **Fictional demonstration only.** Every bundled incident and district outline is simulated. This project does not contain verified Baghdad incident data or official district boundaries. Its counts are not crime rates, risk estimates, or evidence that a district or community is unsafe. Map coordinates only illustrate the interface and are not real incident locations.

## Run on Windows 11

1. Install Python 3 from <https://www.python.org/downloads/windows/> if it is not installed.
2. Open the project folder `C:\Users\asus\Desktop\dashbord` in File Explorer.
3. Click the folder address bar, type `powershell`, and press **Enter** to open PowerShell in that folder.
4. Start the local web server:

   ```powershell
   python -m http.server 8000
   ```

   If Windows does not recognize `python`, try:

   ```powershell
   py -m http.server 8000
   ```

5. Open <http://localhost:8000/> in your browser.
6. To stop the server, return to PowerShell and press **Ctrl+C**.

Use the web server instead of double-clicking `index.html`: the browser needs HTTP to load the local JSON data. The map tiles, Leaflet, marker clustering, and Chart.js are loaded from public services, so those features need an internet connection.

## Publish on GitHub Pages

The project has a root-level `index.html`, relative paths for local assets, and a `.nojekyll` file. This means it can be hosted as a static site without a build or server-side component.

### Beginner-friendly method: GitHub Desktop

1. Create or sign in to a GitHub account at <https://github.com/>.
2. Install GitHub Desktop from <https://desktop.github.com/>.
3. In GitHub Desktop, choose **File → Add Local Repository** and select `C:\Users\asus\Desktop\dashbord`.
4. If GitHub Desktop says the folder is not a repository, select its option to **create a repository** in that folder. Keep the existing project files; do not create a second project subfolder.
5. Review the files. The included `.gitignore` excludes `.azure`, `.vscode`, and `.github/agents`, which are workspace configuration and not needed by the public dashboard. The website files and `data` folder should be included.
6. Enter a summary such as `Prepare dashboard for GitHub Pages`, then select **Commit to main**.
7. Select **Publish repository**. Choose a repository name, such as `baghdad-gis-dashboard`. Make the repository **Public** if you are using a GitHub plan that requires public repositories for Pages. Do not include private or real incident data.
8. On GitHub, open the repository and choose **Settings → Pages**.
9. Under **Build and deployment**, select **Deploy from a branch**. Set the branch to **main** and the folder to **/(root)**, then select **Save**.
10. Wait for the Pages deployment to finish. The Pages settings page will show the website URL. A project repository URL usually looks like:

    ```text
    https://YOUR-GITHUB-USERNAME.github.io/baghdad-gis-dashboard/
    ```

11. Open the URL shown by GitHub Pages and check the map, charts, filters, language toggle, and browser console.

You can publish from the root of another branch if you prefer, but make sure that branch contains `index.html`, `app.js`, `styles.css`, and the `data` folder at its top level. After future changes, commit and push them with GitHub Desktop; Pages will publish the updated files.

**This project has not been published by these instructions.** It is only published after you push it to your GitHub repository, enable Pages, and verify the URL GitHub provides.

## Features

- Leaflet map on OpenStreetMap with clustered, clickable, simulated incident markers and fictional district boundaries.
- Marker fill shows severity; marker outline shows category.
- District, category, severity, relative period, and start/end date filters.
- English/Arabic translations and right-to-left layout.
- Trend, category, and district charts; severity and status totals; district comparisons and category/severity breakdowns.
- High/medium/routine flags explain the recorded evidence and are for further assessment only. Counts alone do not establish that a place is unsafe or justify action against individuals or groups.
- CSV and GeoJSON imports with input validation. Imported records stay in browser memory for the current page session; they are not uploaded or saved to the website.
- Bilingual category names can be edited or extended. Those settings are stored in the current browser's local storage.

The bundled sample contains fictional examples of theft and robbery, assault and violent crime, burglary and property crime, suspicious activity, public disturbances, vandalism and property damage, missing persons reports, traffic-related incidents, fire and emergency incidents, and other reported incidents. The sample has no service coverage data.

## Data and privacy

The public repository should contain only the fictional demo data. Never commit confidential data, personal identifiers, precise sensitive incident locations, deployment details, or private operational information. A static GitHub Pages website is public to visitors and has no authentication, access control, secure data storage, or server-side validation.

To use verified and authorized datasets in a separate, appropriately protected system, establish data ownership and access controls, validate source and update history, remove identifying details, generalize locations, and have privacy and data-quality reviews. Publish only approved aggregates. Do not put real incident data in the repository or upload it through the browser import panel on a public site.

District outlines in `data/districts.geojson` are approximate fictional drawings for demonstrating map interactions; do not treat them as official geography. Replace them only with appropriately licensed authoritative boundary data.

## Import formats

CSV requires these exact headers. District and category values must match IDs in the dashboard. Severity must be `low`, `medium`, or `high`; status must be `open`, `investigating`, `resolved`, or `closed`. Dates use `YYYY-MM-DD`.

```csv
id,date,district,category,severity,status,latitude,longitude
EXAMPLE-001,2026-10-20,karkh,theft_robbery,medium,open,33.31,44.36
```

GeoJSON must be a `FeatureCollection` of Point features, with incident fields in `properties`. GeoJSON coordinates use `[longitude, latitude]`.

## Files in the published website

- `index.html` — dashboard page and controls.
- `styles.css` — dark responsive styling and RTL layout.
- `app.js` — localization, map, charts, filters, and import validation.
- `data/demo-data.json` — fictional bilingual districts, categories, and simulated incidents.
- `data/districts.geojson` — fictional approximate boundary drawings.
- `data/ministry-of-interior-iraq.png` — Ministry of Interior emblem downloaded from the official website's favicon (`https://moi.gov.iq/upload/1804816048.png`); the dashboard is an unofficial, simulated demonstration and does not imply government affiliation.
- `.nojekyll` — tells GitHub Pages to serve the static files without Jekyll processing.

All local links are relative, so they work both at `http://localhost:8000/` and at a GitHub Pages project URL. External Leaflet, marker-cluster, Chart.js, Google Fonts, and OpenStreetMap tile services require internet access and follow their respective usage terms.
