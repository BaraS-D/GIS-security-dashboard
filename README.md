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

### Troubleshooting: blank map or data entry not responding

- If the browser shows `localhost refused to connect`, the local web server is not running. Open PowerShell in the project folder and run `python -m http.server 8000` (or `py -m http.server 8000`), then reload `http://localhost:8000/`. Keep the PowerShell window open while using the dashboard.
- Do not open `index.html` directly as a `file://` page; the dashboard loads its fictional JSON data over HTTP.
- Map tiles and libraries require internet access. If the map area appears without its background tiles, check the connection and reload; the fictional district outlines and markers can still be shown when Leaflet loaded successfully.
- If an imported or newly added incident is not visible under the current dashboard filters, save/confirm it and the dashboard clears those filters so the updated records are visible.
- Browser storage belongs to the current site and browser profile. Use **Reset simulated data** to restore the fictional demonstration records.

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

- Leaflet maps with OpenStreetMap streets, Esri World Imagery satellite tiles, Esri World Topographic Map, generalized fictional density circles, and aggregate district coloring. Tile providers need an internet connection and their terms/attribution must be respected.
- Marker fill shows severity; marker outline shows category.
- District, category, severity, relative period, and start/end date filters.
- English/Arabic translations and right-to-left layout.
- Trend, category, and district charts; severity and status totals; district comparisons and category/severity breakdowns.
- High/medium/routine flags explain the recorded evidence and are for further assessment only. Counts alone do not establish that a place is unsafe or justify action against individuals or groups.
- Add, edit, delete, search, and filter incident records in the dashboard. Records are saved in that browser's local storage; they are not uploaded or shared with other visitors.
- Preview and validate Excel (`.xlsx`), CSV, and GeoJSON imports before confirming. Invalid rows are listed in the preview. Download an Excel template from the import panel.
- Monthly, category, and district charts respond to the dashboard district, category, severity, and date filters.
- Bilingual category names can be edited or extended. Those settings are stored in the current browser's local storage.

The bundled sample contains fictional examples of theft and robbery, assault and violent crime, burglary and property crime, suspicious activity, public disturbances, vandalism and property damage, missing persons reports, traffic-related incidents, fire and emergency incidents, and other reported incidents. The sample has no service coverage data.

## Data and privacy

The public repository should contain only the fictional demo data. Never commit confidential data, personal identifiers, precise sensitive incident locations, deployment details, or private operational information. A static GitHub Pages website is public to visitors and has no authentication, access control, secure data storage, or server-side validation.

To use verified and authorized datasets in a separate, appropriately protected system, establish data ownership and access controls, validate source and update history, remove identifying details, generalize locations, and have privacy and data-quality reviews. Publish only approved aggregates. Do not put real incident data in the repository or upload it through the browser import panel on a public site.

District outlines in `data/districts.geojson` are approximate fictional drawings for demonstrating map interactions; do not treat them as official geography. Replace them only with appropriately licensed authoritative boundary data.

## Import formats

CSV and Excel files require these headers: `id,date,district,category,severity,status`. `latitude`, `longitude`, and `description` are optional columns; if coordinates are supplied, provide both and use valid latitude/longitude numbers. If no coordinates are supplied, the map uses a generalized district-center marker, not an event location. District and category values must match IDs in the dashboard. Severity must be `low`, `medium`, or `high`; status must be `open`, `investigating`, `resolved`, or `closed`. Dates use `YYYY-MM-DD`. The downloadable workbook contains the full column list.

```csv
id,date,district,category,severity,status,latitude,longitude,description
SIMULATED-EXAMPLE-001,2026-10-20,karkh,theft_robbery,medium,open,33.31,44.36,Fictional training example
```

GeoJSON must be a `FeatureCollection` of Point features, with incident fields in `properties`. GeoJSON coordinates use `[longitude, latitude]`.

## إدارة السجلات والتخزين المحلي

- تتيح اللوحة إضافة السجلات وتعديلها وحذفها والبحث فيها وتصفيتها. وتُحدّث الخريطة والجداول والإحصاءات والرسوم بعد التغيير.
- تتم معاينة ملفات Excel (`.xlsx`) وCSV وGeoJSON والتحقق من الصفوف والتواريخ والإحداثيات قبل تأكيد الاستيراد. السجلات غير الصالحة تظهر مع رقم الصف والسبب.
- تعمل هذه الوظائف على GitHub Pages لأن الصفحة ثابتة ولا تحتاج إلى خادم تطبيق. تحفظ التغييرات في التخزين المحلي للمتصفح وعلى نفس عنوان الموقع والجهاز فقط؛ لا تُرسل إلى GitHub ولا يراها زوار آخرون.
- مسح بيانات المتصفح أو استخدام جهاز/متصفح مختلف قد يزيل هذه النسخة المحلية. لا تعتبر `localStorage` قاعدة بيانات احتياطية أو مكاناً آمناً أو مشتركاً.
- بيانات العرض وحدود المناطق المضمّنة خيالية. لا تضع بيانات حقيقية أو شخصية أو تشغيلية في الموقع العام، ولا تُضفها إلى ملفات المشروع.
- تتوفر طبقة صور الأقمار الصناعية وخريطة التضاريس من Esri World Imagery وEsri World Topographic Map، مع خرائط الشوارع من OpenStreetMap. تتطلب الطبقات اتصالاً بالإنترنت وقد تخضع لشروط الاستخدام والإسناد وحدود الخدمة لدى مزودي الخرائط.

### اختبار إدارة الحوادث محلياً

1. شغّل الخادم المحلي الموضح أعلاه وافتح <http://localhost:8000/>.
2. أضف سجلاً خيالياً، واترك الإحداثيات فارغة للتحقق من ظهور علامة تقريبية عند مركز المنطقة.
3. عدّل السجل ثم احذفه؛ جرّب البحث ومرشح الحالة والفلاتر العامة، ولاحظ تحديث الأعداد والرسوم.
4. من أدوات البيانات نزّل قالب Excel، أو اختر ملف `.xlsx`/`.csv`/`.geojson`، راجع السجلات الصالحة والأخطاء، ثم أكّد الاستيراد.
5. بدّل خيارات الخريطة واللغة. تعمل خرائط Leaflet وChart.js وSheetJS ومربعات الخرائط الخارجية عبر الإنترنت.

### Browser-local data is not shared

GitHub Pages serves the same static website to every visitor. Each browser keeps its own added, edited, deleted, and imported records in local storage. To share records between users or devices, a separately designed and secured backend would be required; this project does not implement one. Keep the public demonstration fictional.

## Files in the published website

- `index.html` — dashboard page and controls.
- `styles.css` — dark responsive styling and RTL layout.
- `app.js` — localization, map, charts, filters, and import validation.
- `data/demo-data.json` — fictional bilingual districts, categories, and simulated incidents.
- `data/districts.geojson` — fictional approximate boundary drawings.
- `data/ministry-of-interior-iraq.png` — Ministry of Interior emblem downloaded from the official website's favicon (`https://moi.gov.iq/upload/1804816048.png`); the dashboard is an unofficial, simulated demonstration and does not imply government affiliation.
- `.nojekyll` — tells GitHub Pages to serve the static files without Jekyll processing.

All local links are relative, so they work both at `http://localhost:8000/` and at a GitHub Pages project URL. External Leaflet, marker-cluster, Chart.js, SheetJS, Google Fonts, OpenStreetMap tiles, and Esri imagery/topographic tiles require internet access and follow their respective usage terms.
