(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const dbName = "baghdad-gis-local-v1";
  let categories = [
    ["theft", "سرقة وسلب", "Theft and robbery"], ["assault", "اعتداء وعنف", "Assault and violent crime"],
    ["burglary", "سطو وأضرار ممتلكات", "Burglary and property crime"], ["suspicious", "بلاغ نشاط مريب", "Suspicious activity report"],
    ["disturbance", "اضطراب عام", "Public disturbance"], ["vandalism", "تخريب وأضرار", "Vandalism and property damage"],
    ["missing", "بلاغ مفقود", "Missing person report"], ["traffic", "حادث مروري", "Traffic-related incident"],
    ["fire", "حريق وطوارئ", "Fire and emergency"], ["other", "بلاغ آخر", "Other reported incident"]
  ];
  const words = {
    ar: {all:"الكل", noData:"لا توجد سجلات بعد. أضف حادثاً من النموذج للبدء.", noMatches:"لا توجد سجلات تطابق عوامل التصفية.", add:"إضافة حادث", update:"حفظ التعديلات", view:"عرض", edit:"تعديل", remove:"حذف", confirmDelete:"هل تريد حذف هذا الحادث؟", saved:"تم حفظ الحادث محلياً.", deleted:"تم حذف الحادث.", fail:"تعذر إكمال العملية: ", invalid:"تحقق من الحقول المطلوبة والإحداثيات.", photoLimit:"حجم الصورة يتجاوز ٢ ميغابايت.", coords:"إحداثيات غير مكتملة أو خارج النطاق.", mapError:"تعذر تحميل الخريطة. تحقق من اتصال الإنترنت ومكتبة Leaflet.", noChart:"لا توجد بيانات كافية للتحليل.", local:"بيانات محفوظة محلياً", none:"بدون سجلات", export:"تنزيل النسخة الاحتياطية", import:"استيراد JSON", details:"تفاصيل الحادث", noPhoto:"لا توجد صورة مرفقة", csvDone:"تم تصدير CSV.", jsonDone:"تم استيراد النسخة الاحتياطية.", badJson:"ملف JSON غير صالح أو يحتوي سجلات مكررة.", noRecords:"لا توجد سجلات.", id:"رقم", title:"العنوان", date:"التاريخ", province:"المحافظة", district:"المنطقة", type:"النوع", severity:"الأهمية", status:"الحالة", description:"الوصف", address:"العنوان النصي", time:"الوقت", notes:"ملاحظات", lat:"خط العرض", lon:"خط الطول", photo:"المرفق", actions:"إجراءات", open:"مفتوحة", investigating:"قيد المراجعة", resolved:"تمت المعالجة", closed:"مغلقة", high:"مرتفعة", medium:"متوسطة", low:"منخفضة", total:"إجمالي الحوادث", highest:"الأكثر تسجيلاً", routine:"اعتيادي", priorityHigh:"أولوية مراجعة عالية", priorityMedium:"أولوية مراجعة متوسطة", priorityRoutine:"مراجعة اعتيادية", safeNote:"الأعداد لا تثبت مستوى السلامة ولا تكفي وحدها لتوصية تشغيلية.", noCoverage:"لم تُقدّم بيانات مجمعة عن تغطية الخدمات.", assessmentHigh:"ثلاثة سجلات أو أكثر، بينها سجلان مرتفعا الأهمية على الأقل؛ تحقّق من جودة البيانات والسياق.", assessmentMedium:"وجود سجل مرتفع الأهمية أو ثلاثة سجلات فأكثر؛ راجع السياق وجودة البيانات.", assessmentRoutine:"لا تتحقق عتبات المراجعة الوصفية المحددة؛ هذا لا يثبت السلامة.", chartUnavailable:"مكتبة الرسوم غير متاحة.", byCategory:"حسب النوع", byDistrict:"حسب المنطقة", byMonth:"حسب الشهر", bySeverity:"حسب الأهمية", byStatus:"حسب الحالة", statusEmpty:"لا توجد بيانات كافية للتحليل.", provinceRequired:"اختر المحافظة." },
    en: {all:"All", noData:"No records yet. Add an incident to begin.", noMatches:"No records match these filters.", add:"Add incident", update:"Save changes", view:"View", edit:"Edit", remove:"Delete", confirmDelete:"Delete this incident?", saved:"Incident saved locally.", deleted:"Incident deleted.", fail:"Could not complete operation: ", invalid:"Check required fields and coordinates.", photoLimit:"Image exceeds 2 MB.", coords:"Coordinates are incomplete or out of range.", mapError:"Map unavailable. Check your internet connection and Leaflet library.", noChart:"Not enough data for analysis.", local:"Stored locally", none:"No records", export:"Download backup", import:"Import JSON", details:"Incident details", noPhoto:"No image attached", csvDone:"CSV exported.", jsonDone:"Backup imported.", badJson:"Invalid JSON backup or duplicate incident IDs.", noRecords:"No records.", id:"ID", title:"Title", date:"Date", province:"Province", district:"District", type:"Type", severity:"Severity", status:"Status", description:"Description", address:"Text location", time:"Time", notes:"Notes", lat:"Latitude", lon:"Longitude", photo:"Attachment", actions:"Actions", open:"Open", investigating:"Reviewing", resolved:"Resolved", closed:"Closed", high:"High", medium:"Medium", low:"Low", total:"Total incidents", highest:"Most records", routine:"Descriptive indicator only", safeNote:"Counts do not prove safety levels and are not sufficient for operational recommendations.", chartUnavailable:"Chart library is unavailable.", byCategory:"By category", byDistrict:"By district", byMonth:"By month", bySeverity:"By severity", byStatus:"By status", statusEmpty:"Not enough data for analysis.", provinceRequired:"Select a province." }
  };
  Object.assign(words.en, {
    priorityHigh:"High review priority", priorityMedium:"Medium review priority", priorityRoutine:"Routine review",
    noCoverage:"No aggregated service coverage data was provided.",
    assessmentHigh:"Three or more records, including at least two high-importance records; verify data quality and context.",
    assessmentMedium:"At least one high-importance record or three records; review context and data quality.",
    assessmentRoutine:"The descriptive review thresholds are not met; this does not prove safety."
  });
  const labels = {
    en: {workspace:"Workspace",overview:"Overview",mapNav:"Incident map",districts:"District analysis",dataNav:"Data tools",cityBriefing:"INCIDENT ANALYSIS",title:"Baghdad incident dashboard",localTime:"BAGHDAD LOCAL",sampleIncidents:"TOTAL INCIDENTS",filteredRecords:"Within selected filters",highSeverity:"HIGH IMPORTANCE",mediumSeverity:"MEDIUM IMPORTANCE",lowSeverity:"LOW IMPORTANCE",filteredSeverity:"Selected records",highestDistrict:"MOST RECORDED",lowestDistrict:"LEAST RECORDED",sampleOnly:"Among filtered records",openRecords:"OPEN / REVIEW",resolvedRecords:"RESOLVED / CLOSED",statusNote:"From saved records",geospatialView:"GEOSPATIAL VIEW",cityActivity:"Incident map",district:"District",period:"Period",fromDate:"From date",toDate:"To date",category:"Category",severity:"Importance",allDistricts:"All districts",allDates:"All dates",allTypes:"All categories",allLevels:"All levels",mapLegend:"MAP LEGEND",incidents:"Incidents",incidentCategories:"Incident categories",patternWatch:"ANALYTICS",weeklyTrend:"Incidents by month",distribution:"CATEGORY DISTRIBUTION",incidentsByCategory:"Incidents by category",districtComparison:"DISTRICT COMPARISON",incidentsByDistrict:"Incidents by district",importanceStats:"By importance",statusStats:"By status",incidentManagement:"Incident records",addIncidentTitle:"Add an incident",incidentIdLabel:"Incident ID",titleLabel:"Incident title",typeLabel:"Category",provinceLabel:"Governorate",districtLabel:"District",addressLabel:"Text address or location",dateLabel:"Date",timeLabel:"Time",severityLabel:"Importance",statusLabel:"Status",descriptionLabel:"Description",notesLabel:"Additional notes",photoLabel:"Optional image (max 2 MB)",latitudeLabel:"Latitude (optional)",longitudeLabel:"Longitude (optional)",searchIncidents:"Search records",incident:"Incident",actions:"Actions",cancelEdit:"Cancel",saveIncident:"Add incident",clearForm:"Clear form",searchPlaceholder:"Search districts…",thDistrict:"DISTRICT",thSampleCount:"RECORDS",thHigh:"HIGH",thMedium:"MEDIUM",thLow:"LOW",thTrend:"CHANGE",thPriority:"ASSESSMENT",planningContext:"DECISION SUPPORT",assessmentTitle:"Assessment context",notOperational:"NON-OPERATIONAL",dataTools:"DATA GOVERNANCE",importTitle:"Local data and backups",importHelp:"Records remain in this browser. Keep backups safe and never add personal or confidential data.",exportJson:"Download JSON backup",exportCsv:"Export CSV",importJson:"Import JSON backup",noCoverage:"No aggregated service coverage was provided.",relativeOnly:"Comparisons describe entered records only; they are not rates or safety measures.",demoFooter:"Locally stored records",footerNote:"OpenStreetMap · locally stored data",noRecords:"No matching records.",statusOpen:"Open",statusInvestigating:"Under review",statusResolved:"Resolved",statusClosed:"Closed",allStatuses:"All statuses",mapType:"Map layer",mapUnavailable:"Map unavailable",mapFallback:"Check your internet connection and reload the page.",mapStreetLegend:"Markers appear only when coordinates are entered.",privacyNote:"Records and attachments are stored only in this browser on this device. They are not synced. Do not enter personal or confidential information.",sampleMap:"Local incident records",chooseLevel:"Select importance",chooseStatus:"Select status"},
    ar: {workspace:"مساحة العمل",overview:"نظرة عامة",mapNav:"خريطة الحوادث",districts:"تحليل المناطق",dataNav:"أدوات البيانات",cityBriefing:"تحليل السجلات",title:"لوحة الحوادث في بغداد",localTime:"التوقيت المحلي في بغداد",sampleIncidents:"إجمالي الحوادث",filteredRecords:"ضمن عوامل التصفية",highSeverity:"أهمية مرتفعة",mediumSeverity:"أهمية متوسطة",lowSeverity:"أهمية منخفضة",filteredSeverity:"السجلات المحددة",highestDistrict:"الأكثر تسجيلاً",lowestDistrict:"الأقل تسجيلاً",sampleOnly:"ضمن السجلات المحددة",openRecords:"مفتوحة أو قيد المراجعة",resolvedRecords:"تمت المعالجة أو الإغلاق",statusNote:"من السجلات المحفوظة",geospatialView:"عرض جغرافي",cityActivity:"خريطة الحوادث",district:"المنطقة",period:"الفترة",fromDate:"من التاريخ",toDate:"إلى التاريخ",category:"النوع",severity:"الأهمية",allDistricts:"كل المناطق",allDates:"كل التواريخ",allTypes:"كل الأنواع",allLevels:"كل المستويات",mapLegend:"مفتاح الخريطة",incidents:"الحوادث",incidentCategories:"فئات الحوادث",patternWatch:"التحليلات",weeklyTrend:"الحوادث حسب الشهر",distribution:"توزيع الأنواع",incidentsByCategory:"الحوادث حسب النوع",districtComparison:"مقارنة المناطق",incidentsByDistrict:"الحوادث حسب المنطقة",importanceStats:"حسب الأهمية",statusStats:"حسب الحالة",incidentManagement:"سجل الحوادث",addIncidentTitle:"إضافة حادث",incidentIdLabel:"رقم الحادث",titleLabel:"عنوان الحادث",typeLabel:"نوع الحادث",provinceLabel:"المحافظة",districtLabel:"المنطقة أو القضاء",addressLabel:"العنوان أو الموقع النصي",dateLabel:"تاريخ الحادث",timeLabel:"وقت الحادث",severityLabel:"الأهمية",statusLabel:"الحالة",descriptionLabel:"وصف الحادث",notesLabel:"ملاحظات إضافية",photoLabel:"صورة اختيارية (حد ٢ ميغابايت)",latitudeLabel:"خط العرض (اختياري)",longitudeLabel:"خط الطول (اختياري)",searchIncidents:"بحث في السجلات",incident:"الحادث",actions:"الإجراءات",cancelEdit:"إلغاء",saveIncident:"إضافة الحادث",clearForm:"مسح النموذج",searchPlaceholder:"ابحث عن منطقة…",thDistrict:"المنطقة",thSampleCount:"السجلات",thHigh:"مرتفعة",thMedium:"متوسطة",thLow:"منخفضة",thTrend:"التغير",thPriority:"التقييم",planningContext:"دعم القرار",assessmentTitle:"سياق التقييم",notOperational:"غير تشغيلي",dataTools:"حوكمة البيانات",importTitle:"البيانات والنسخ الاحتياطي",importHelp:"تبقى السجلات في هذا المتصفح. احفظ نسخة احتياطية ولا تُدخل بيانات شخصية أو سرية.",exportJson:"تنزيل نسخة JSON",exportCsv:"تصدير CSV",importJson:"استيراد نسخة JSON",noCoverage:"لم تُقدّم بيانات مجمعة عن تغطية الخدمات.",relativeOnly:"تعكس المقارنات السجلات المدخلة فقط، وليست معدلات أو مقياساً للسلامة.",demoFooter:"سجلات محفوظة محلياً",footerNote:"OpenStreetMap · بيانات محفوظة محلياً",noRecords:"لا توجد سجلات مطابقة.",statusOpen:"مفتوحة",statusInvestigating:"قيد المراجعة",statusResolved:"تمت المعالجة",statusClosed:"مغلقة",allStatuses:"كل الحالات",mapType:"طبقة الخريطة",mapUnavailable:"الخريطة غير متاحة",mapFallback:"تحقق من الاتصال بالإنترنت ثم أعد تحميل الصفحة.",mapStreetLegend:"تظهر العلامات عند إدخال إحداثيات.",privacyNote:"تُخزن السجلات والمرفقات في هذا المتصفح على هذا الجهاز فقط ولا تتم مزامنتها. لا تُدخل بيانات شخصية أو سرية.",sampleMap:"سجلات محلية",chooseLevel:"اختر الأهمية",chooseStatus:"اختر الحالة"}
  };
  Object.assign(labels.en, {
    storedData:"From saved records",chartEmptyNote:"Charts are calculated from stored incident records.",districtSnapshot:"District analysis",
    high:"High",medium:"Medium",low:"Low",statusOpen:"Open",statusInvestigating:"Under review",statusResolved:"Resolved",statusClosed:"Closed",
    allStatuses:"All statuses",categorySettings:"SETTINGS",manageCategories:"Manage incident categories",
    categoryAdminHelp:"Edit labels or add a category. Category IDs remain stable for saved records.",
    recommendationDisclaimer:"Assessment flags are for review only. Counts alone do not prove a district is unsafe and never justify action against people.",
    markerKey:"Marker outline indicates category; fill indicates importance.",severityBreakdown:"Importance breakdown",
    selectCategory:"Select category",allLevels:"All levels",districtChartCaveat:"Select a district to filter the dashboard."
  });
  Object.assign(labels.ar, {
    storedData:"من السجلات المحفوظة",chartEmptyNote:"تُحسب الرسوم من سجلات الحوادث المحفوظة.",districtSnapshot:"تحليل المناطق",
    high:"مرتفعة",medium:"متوسطة",low:"منخفضة",statusOpen:"مفتوحة",statusInvestigating:"قيد المراجعة",statusResolved:"تمت المعالجة",statusClosed:"مغلقة",
    allStatuses:"كل الحالات",categorySettings:"الإعدادات",manageCategories:"إدارة فئات الحوادث",
    categoryAdminHelp:"عدّل التسميات أو أضف فئة. تبقى معرفات الفئات ثابتة للسجلات المحفوظة.",
    recommendationDisclaimer:"مؤشرات التقييم للمراجعة فقط. لا تثبت الأعداد وحدها أن المنطقة غير آمنة ولا تبرر إجراءً ضد الأشخاص.",
    markerKey:"إطار العلامة يوضح النوع؛ واللون الداخلي يوضح الأهمية.",severityBreakdown:"التوزيع حسب الأهمية",
    allLevels:"كل المستويات"
  });
  let lang = "ar";
  let db, map, markers, charts = {}, incidents = [], selectedId = null, photoBlob = null, mapLayers = {};
  const t = (key) => words[lang][key] || words.ar[key] || key;
  const text = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const categoryName = (id) => { const c = categories.find((item) => item[0] === id); return c ? c[lang === "ar" ? 1 : 2] : id; };
  const provinceName = (value) => {
    if(lang==="ar")return value;
    const province=Array.from($("incident-province")?.options||[]).find(option=>option.value===value);
    return province?.textContent||value;
  };
  const categoryColor = (id) => ["#73aee6","#a78bfa","#72d7b0","#efb765","#f27d72","#58c4c0","#d881b8","#b8cc68","#e58d60","#8babc4"][Math.max(0,categories.findIndex(c=>c[0]===id))%10];
  const statusName = (id) => t(id);
  function toast(message) { const node = $("toast"); if (!node) return; node.textContent = message; node.classList.add("show"); setTimeout(() => node.classList.remove("show"), 3500); }
  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains("incidents")) database.createObjectStore("incidents", {keyPath:"id"});
        if (!database.objectStoreNames.contains("settings")) database.createObjectStore("settings", {keyPath:"key"});
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("IndexedDB open failed"));
    });
  }
  function transaction(store, mode, action) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, mode), request = action(tx.objectStore(store));
      let result;
      request.onsuccess = () => { result = request.result; };
      request.onerror = () => reject(request.error || tx.error);
      tx.oncomplete = () => resolve(result);
      tx.onerror = () => reject(tx.error || new Error("IndexedDB transaction failed"));
      tx.onabort = () => reject(tx.error || new Error("IndexedDB transaction aborted"));
    });
  }
  async function loadRecords() { incidents = await transaction("incidents", "readonly", (store) => store.getAll()); }
  function updateLanguage() {
    document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = document.documentElement.dir;
    const button = $("language-toggle");
    if (button) { button.innerHTML = lang === "ar" ? "English <span>↗</span>" : "العربية <span>↗</span>"; button.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية"); }
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (labels[lang][key]) node.textContent = labels[lang][key];
      if (key === "localOnly") node.textContent = t("local");
      if (key === "localStorageNote") node.textContent = lang === "ar" ? "البيانات لا تتزامن بين الأجهزة." : "Data is not synced between devices.";
      if (key === "privacyNote") node.textContent = lang === "ar" ? "تُخزّن البيانات محلياً على هذا الجهاز والمتصفح فقط ولا تتم مزامنتها تلقائياً. لا تُدخل بيانات شخصية أو معلومات سرية." : "Data is stored in this browser only and is not synced. Do not enter personal or confidential information.";
      if (key === "subtitle") node.textContent = lang === "ar" ? "سجلاتك المحلية وتحليلاتها، دون بيانات جاهزة." : "Your locally stored records and analysis; no preloaded records.";
    });
    if ($("dataset-badge")) $("dataset-badge").textContent=t("local");
    $("map-type-filter").innerHTML=`<option value="street">OpenStreetMap</option><option value="humanitarian">${lang==="ar"?"خريطة إنسانية":"Humanitarian map"}</option>`;
    $("map-status-label").textContent=lang==="ar"?"سجلات الحوادث المحلية":"Local incident records";
    const sortValue=$("sort-select").value;
    $("sort-select").innerHTML=`<option value="name">${lang==="ar"?"ترتيب: الاسم":"Sort: name"}</option><option value="incidents">${lang==="ar"?"الأكثر حوادث":"Most records"}</option><option value="lowest">${lang==="ar"?"الأقل حوادث":"Fewest records"}</option><option value="trend">${lang==="ar"?"الاتجاه الحديث":"Recent change"}</option>`;
    $("sort-select").value=sortValue;
    $("period-filter").innerHTML=`<option value="all">${lang==="ar"?"كل التواريخ":"All dates"}</option><option value="7">${lang==="ar"?"آخر ٧ أيام":"Last 7 days"}</option><option value="30">${lang==="ar"?"آخر ٣٠ يوماً":"Last 30 days"}</option><option value="90">${lang==="ar"?"آخر ٩٠ يوماً":"Last 90 days"}</option>`;
    if ($("incident-form")) $("incident-form").querySelector('[type="submit"]').textContent = $("incident-edit-id").value ? t("update") : t("add");
    render();
  }
  function initFormOptions() {
    const selectedCategory=$("incident-category").value;
    $("incident-category").innerHTML = `<option value="">${lang==="ar"?"اختر نوع الحادث":"Select category"}</option>` + categories.map((c) => `<option value="${c[0]}">${text(c[lang === "ar" ? 1 : 2])}</option>`).join("");
    if(categories.some(c=>c[0]===selectedCategory))$("incident-category").value=selectedCategory;
    $("incident-category-filter").innerHTML = `<option value="all">${t("all")}</option>` + categories.map((c) => `<option value="${c[0]}">${text(c[lang === "ar" ? 1 : 2])}</option>`).join("");
    const provinces = [["بغداد","Baghdad"],["الأنبار","Al Anbar"],["بابل","Babylon"],["البصرة","Basra"],["القادسية","Al-Qadisiyyah"],["ديالى","Diyala"],["ذي قار","Dhi Qar"],["دهوك","Duhok"],["أربيل","Erbil"],["كربلاء","Karbala"],["كركوك","Kirkuk"],["ميسان","Maysan"],["المثنى","Muthanna"],["النجف","Najaf"],["نينوى","Nineveh"],["صلاح الدين","Saladin"],["السليمانية","Sulaymaniyah"],["واسط","Wasit"]];
    const selectedProvince=$("incident-province").value;
    $("incident-province").innerHTML = `<option value="">${lang === "ar" ? "اختر المحافظة" : "Select governorate"}</option>` + provinces.map(([ar,en])=>`<option value="${text(ar)}">${text(lang==="ar"?ar:en)}</option>`).join("");
    if(provinces.some(([ar])=>ar===selectedProvince))$("incident-province").value=selectedProvince;
    $("category-legend").innerHTML = categories.map(c=>`<div class="layer-row"><span class="legend-dot" style="background:${categoryColor(c[0])}"></span><span>${text(c[lang==="ar"?1:2])}</span></div>`).join("");
    $("category-count").textContent=categories.length.toLocaleString(lang==="ar"?"ar-IQ":"en");
    $("incident-id-display").value = `INC-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
  }
  async function renderCategoryEditor() {
    const editor=$("category-editor"); if(!editor)return;
    editor.innerHTML=categories.map((c,i)=>`<div class="category-edit-row"><code>${text(c[0])}</code><input id="category-en-${i}" aria-label="English category" value="${text(c[2])}" maxlength="45"><input id="category-ar-${i}" aria-label="الفئة بالعربية" value="${text(c[1])}" maxlength="45" dir="rtl"><button type="button" data-category-save="${i}" class="secondary-button">${lang==="ar"?"حفظ":"Save"}</button></div>`).join("");
    editor.querySelectorAll("[data-category-save]").forEach((button)=>button.addEventListener("click",async()=>{
      const i=Number(button.dataset.categorySave), updated=categories.map((c,index)=>index===i?[c[0],$(`category-ar-${i}`).value.trim(),$(`category-en-${i}`).value.trim()]:c);
      if(updated.some(c=>!c[1]||!c[2])){toast(lang==="ar"?"أدخل الاسمين العربي والإنجليزي.":"Enter both Arabic and English names.");return;}
      try{await transaction("settings","readwrite",store=>store.put({key:"categories",value:updated}));categories=updated;initFormOptions();renderCategoryEditor();render();toast(lang==="ar"?"تم حفظ الفئات.":"Categories saved.");}
      catch(error){console.error("Category settings could not be stored",error);toast(t("fail")+error.message);}
    }));
  }
  async function addCategory(event) {
    event.preventDefault();
    const en=$("new-category-en").value.trim(), ar=$("new-category-ar").value.trim();
    const id=en.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"");
    if(!en||!ar||!id||categories.some(c=>c[0]===id)){toast(lang==="ar"?"اسم الفئة غير صالح أو مستخدم.":"Category name is invalid or already used.");return;}
    const updated=[...categories,[id,ar,en]];
    try{await transaction("settings","readwrite",store=>store.put({key:"categories",value:updated}));categories=updated;$("add-category-form").reset();initFormOptions();renderCategoryEditor();render();toast(lang==="ar"?"تمت إضافة الفئة.":"Category added.");}
    catch(error){console.error("Category could not be added",error);toast(t("fail")+error.message);}
  }
  function filtered() {
    const search = $("incident-search").value.trim().toLocaleLowerCase();
    const district = $("incident-district-filter").value.trim().toLocaleLowerCase();
    return incidents.filter((r) => {
      const query = [r.id,r.title,r.description,r.district,r.address,r.notes].join(" ").toLocaleLowerCase();
      return (!search || query.includes(search)) &&
        ($("incident-category-filter").value === "all" || r.category === $("incident-category-filter").value) &&
        (!district || r.district.toLocaleLowerCase().includes(district)) &&
        ($("incident-status-filter").value === "all" || r.status === $("incident-status-filter").value) &&
        ($("incident-severity-filter").value === "all" || r.severity === $("incident-severity-filter").value) &&
        (!$("incident-from-filter").value || r.date >= $("incident-from-filter").value) &&
        (!$("incident-to-filter").value || r.date <= $("incident-to-filter").value) &&
        (!$("date-from").value || r.date >= $("date-from").value) &&
        (!$("date-to").value || r.date <= $("date-to").value) &&
        ($("district-filter").value === "all" || r.district === $("district-filter").value) &&
        ($("category-filter").value === "all" || r.category === $("category-filter").value) &&
        ($("severity-filter").value === "all" || r.severity === $("severity-filter").value);
    });
  }
  function render() {
    const rows = filtered();
    renderTable(rows); renderSummary(rows); renderDistricts(rows); renderCharts(rows); renderMap(rows);
    $("incident-list-count").textContent = `${rows.length} / ${incidents.length}`;
  }
  function renderTable(rows) {
    const body = $("incidents-table");
    if (!rows.length) { body.innerHTML = `<tr><td colspan="8" class="empty-state">${incidents.length ? t("noMatches") : t("noData")}</td></tr>`; return; }
    body.innerHTML = rows.slice().sort((a,b) => b.date.localeCompare(a.date)).map((r) =>
      `<tr data-row-id="${text(r.id)}"><td>${text(r.id)}<br><strong>${text(r.title)}</strong></td><td>${text(r.date)} ${text(r.time)}</td><td>${text(provinceName(r.province))}</td><td>${text(r.district)}</td><td>${text(categoryName(r.category))}</td><td>${text(t(r.severity))}</td><td>${text(statusName(r.status))}</td><td class="row-actions"><button type="button" data-action="view">${t("view")}</button><button type="button" data-action="edit">${t("edit")}</button><button type="button" data-action="delete">${t("remove")}</button></td></tr>`).join("");
  }
  function renderSummary(rows) {
    const count = (field, value) => rows.filter((r) => r[field] === value).length;
    $("kpi-incidents").textContent = rows.length;
    ["high","medium","low"].forEach((key) => { const el = $(`kpi-${key}`); if (el) el.textContent = count("severity",key); });
    $("kpi-open").textContent = rows.filter((r) => ["open","investigating"].includes(r.status)).length;
    $("kpi-resolved").textContent = rows.filter((r) => ["resolved","closed"].includes(r.status)).length;
    const freq = new Map(); rows.forEach((r) => freq.set(r.district,(freq.get(r.district)||0)+1));
    const districts = [...freq].sort((a,b) => b[1]-a[1]);
    $("kpi-highest").textContent = districts[0]?.[0] || "—";
    $("kpi-lowest").textContent = districts.length ? [...districts].sort((a,b) => a[1]-b[1])[0][0] : "—";
  }
  function renderDistricts(rows) {
    const data = new Map(); rows.forEach((r) => { const d=data.get(r.district)||{count:0,high:0,medium:0,low:0,rows:[]}; d.count++; d[r.severity]++; d.rows.push(r); data.set(r.district,d); });
    const query=$("district-search").value.trim().toLocaleLowerCase(), sort=$("sort-select").value;
    const compareRecent=(d)=>{const now=Date.now(), count=(start,end)=>d.rows.filter(r=>{const date=Date.parse(`${r.date}T00:00:00`);return date>=start&&date<end;}).length;return count(now-30*86400000,now+86400000)-count(now-60*86400000,now-30*86400000);};
    const table = $("district-table"), districts = [...data].filter(([name])=>name.toLocaleLowerCase().includes(query)).sort((a,b)=>sort==="name"?a[0].localeCompare(b[0]):sort==="lowest"?a[1].count-b[1].count:sort==="trend"?compareRecent(b[1])-compareRecent(a[1]):b[1].count-a[1].count);
    const recommendations=[];
    table.innerHTML = districts.length ? districts.map(([name,d])=>{
      const reviewHigh=d.count>=3&&d.high>=2, reviewMedium=!reviewHigh&&(d.high>=1||d.count>=3);
      const priority=reviewHigh?t("priorityHigh"):reviewMedium?t("priorityMedium"):t("priorityRoutine");
      const evidence=reviewHigh?t("assessmentHigh"):reviewMedium?t("assessmentMedium"):t("assessmentRoutine");
      const now=Date.now(), windowCount=(start,end)=>d.rows.filter(r=>{const date=Date.parse(`${r.date}T00:00:00`);return date>=start&&date<end;}).length;
      const recent=windowCount(now-30*86400000,now+86400000), previous=windowCount(now-60*86400000,now-30*86400000), change=recent-previous;
      const trend=recent+previous===0?"—":`${change>0?"+":""}${change}`;
      recommendations.push(`<article class="recommendation"><strong>${text(name)} · ${text(priority)}</strong><p>${text(evidence)} ${lang==="ar"?`الأعداد المسجلة: ${d.count}؛ مرتفعة الأهمية: ${d.high}؛ التغير لآخر ٣٠ يوماً مقارنة بالثلاثين السابقة: ${trend}.`:`Recorded: ${d.count}; high importance: ${d.high}; change in the latest 30 days versus the preceding 30: ${trend}.`}</p></article>`);
      return `<tr class="district-row" data-district="${text(name)}"><td>${text(name)}</td><td>${d.count}</td><td>${d.high}</td><td>${d.medium}</td><td>${d.low}</td><td>${text(trend)}</td><td title="${text(evidence)}">${text(priority)}</td></tr>`;
    }).join("") : `<tr><td colspan="7" class="empty-state">${text(t("noData"))}</td></tr>`;
    $("table-count").textContent = districts.length ? `${districts.length}` : t("none");
    const options = [...new Set(incidents.map((r)=>r.district))].sort();
    const select = $("district-filter"), prev = select.value;
    select.innerHTML = `<option value="all">${lang==="ar"?"كل المناطق":"All districts"}</option>` + options.map((d)=>`<option value="${text(d)}">${text(d)}</option>`).join("");
    select.value = options.includes(prev) ? prev : "all";
    $("recommendations").innerHTML = districts.length ? `${recommendations.join("")}<div class="assessment-card">${text(t("safeNote"))}<p>${text(t("noCoverage"))}</p></div>` : `<div class="empty-state">${text(t("noData"))}</div>`;
  }
  function renderCharts(rows) {
    const groups = [
      ["category-chart","category-fallback",t("byCategory"),categories.map(c=>[c[0],categoryName(c[0])]),"category"],
      ["district-chart","district-fallback",t("byDistrict"),[...new Set(rows.map(r=>r.district))].map(x=>[x,x]),"district"],
      ["trend-chart","trend-fallback",t("byMonth"),[...new Set(rows.map(r=>[r.date.slice(0,7),r.date.slice(0,7)]).map(x=>x[0]))].sort().map(x=>[x,x]),"month"],
      ["importance-chart","importance-fallback",t("bySeverity"),[["high",t("high")],["medium",t("medium")],["low",t("low")]],"severity"],
      ["status-chart","status-fallback",t("byStatus"),[["open",t("open")],["investigating",t("investigating")],["resolved",t("resolved")],["closed",t("closed")]],"status"]
    ];
    groups.forEach(([canvasId,fallbackId,label,keys,field]) => {
      const canvas=$(canvasId), fallback=$(fallbackId); if (!canvas) return;
      if (typeof Chart === "undefined") { fallback.hidden=false; return; }
      if (!rows.length) { canvas.hidden=true; fallback.hidden=false; fallback.textContent=t("statusEmpty"); return; }
      canvas.hidden=false;
      fallback.hidden=true;
      const vals=keys.map(([key])=>rows.filter(r=>field==="month"?r.date.startsWith(key):r[field]===key).length);
      if (charts[canvasId]) charts[canvasId].destroy();
      charts[canvasId]=new Chart(canvas,{type:canvasId==="trend-chart"?"line":"bar",data:{labels:keys.map(x=>x[1]),datasets:[{label,data:vals,backgroundColor:["#72d7b0","#73aee6","#efb765","#f27d72"],borderColor:"#72d7b0",borderWidth:1,tension:.3}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},onClick:(event,elements)=>{if(canvasId!=="district-chart"||!elements.length)return;const district=keys[elements[0].index]?.[0];if(district){$("district-filter").value=district;render();}},scales:{x:{ticks:{color:"#aebbbc"},grid:{color:"#29383c"}},y:{beginAtZero:true,ticks:{precision:0,color:"#aebbbc"},grid:{color:"#29383c"}}}}});
    });
  }
  function initMap() {
    if (typeof L==="undefined") { $("map-fallback").hidden=false; $("map-fallback").querySelector("p").textContent=t("mapError"); return; }
    try {
      map=L.map("map",{zoomControl:true}).setView([33.3152,44.3661],10);
      const osm=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"});
      const humanitarian=L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team"});
      mapLayers={street:osm,humanitarian}; osm.addTo(map); L.control.layers({"OpenStreetMap":osm,"Humanitarian":humanitarian}).addTo(map);
      markers=typeof L.markerClusterGroup==="function"?L.markerClusterGroup():L.layerGroup(); map.addLayer(markers);
      map.on("tileerror",()=>{ $("map-status-label").textContent=t("mapError"); });
      setTimeout(()=>map.invalidateSize(),200);
    } catch(error) { console.error("Leaflet initialization failed",error); $("map-fallback").hidden=false; }
  }
  function renderMap(rows) {
    if (!map || !markers) return;
    markers.clearLayers();
    rows.filter(r=>Number.isFinite(r.latitude)&&Number.isFinite(r.longitude)).forEach((r) => {
      const fillColor={high:"#f27d72",medium:"#efb765",low:"#72d7b0"}[r.severity]||"#73aee6";
      const marker=L.circleMarker([r.latitude,r.longitude],{radius:8,color:categoryColor(r.category),fillColor,fillOpacity:.8,weight:3});
      marker.bindPopup(`<strong>${text(r.title)}</strong><br>${text(r.date)} ${text(r.time)}<br>${text(r.district)} · ${text(categoryName(r.category))}<br>${text(t(r.severity))}`);
      marker.on("click",()=>showDetails(r.id)); markers.addLayer(marker);
    });
  }
  function validate(r) {
    if (!r.title || !r.category || !r.province || !r.district || !r.description || !r.date || !r.time || !r.severity || !r.status) return t("invalid");
    if (!categories.some(c=>c[0]===r.category) || !["low","medium","high"].includes(r.severity) || !["open","investigating","resolved","closed"].includes(r.status)) return t("invalid");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date) || Number.isNaN(Date.parse(`${r.date}T00:00:00Z`)) || new Date(`${r.date}T00:00:00Z`).toISOString().slice(0,10)!==r.date || !/^([01]\d|2[0-3]):[0-5]\d$/.test(r.time)) return t("invalid");
    const lat=r.latitude, lon=r.longitude;
    if ((lat===null)!==(lon===null) || (lat!==null&&(!Number.isFinite(lat)||lat < -90 || lat > 90 || !Number.isFinite(lon)||lon < -180 || lon > 180))) return t("coords");
    return "";
  }
  async function save(event) {
    event.preventDefault();
    const id=$("incident-edit-id").value||$("incident-id-display").value;
    const old=incidents.find(r=>r.id===id);
    const lat=$("incident-latitude").value, lon=$("incident-longitude").value;
    const record={id,title:$("incident-title").value.trim(),category:$("incident-category").value,province:$("incident-province").value,district:$("incident-district").value.trim(),address:$("incident-address").value.trim(),latitude:lat===""?null:Number(lat),longitude:lon===""?null:Number(lon),date:$("incident-date").value,time:$("incident-time").value,severity:$("incident-severity").value,status:$("incident-status").value,description:$("incident-description").value.trim(),notes:$("incident-notes").value.trim(),photo:photoBlob||old?.photo||null,updatedAt:new Date().toISOString()};
    const error=validate(record); if(error){toast(error);return;}
    const file=$("incident-photo").files[0]; if(file&&file.size>2*1024*1024){toast(t("photoLimit"));return;}
    if(file) record.photo=file;
    try { await transaction("incidents","readwrite",(store)=>store.put(record)); await loadRecords(); clearForm(); render(); toast(t("saved")); }
    catch(error){console.error("Incident could not be stored",error);toast(t("fail")+error.message);}
  }
  function clearForm() {
    $("incident-form").reset(); $("incident-edit-id").value=""; $("incident-id-display").value=`INC-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
    photoBlob=null; $("incident-photo-preview").hidden=true; $("incident-photo-preview").removeAttribute("src"); $("cancel-edit").hidden=true;
    $("incident-form").querySelector('[type="submit"]').textContent=t("add");
  }
  function edit(id) {
    const r=incidents.find(x=>x.id===id); if(!r)return;
    $("incident-photo-preview").hidden=true; $("incident-photo-preview").removeAttribute("src");
    $("incident-edit-id").value=r.id; $("incident-id-display").value=r.id; $("incident-title").value=r.title; $("incident-category").value=r.category; $("incident-province").value=r.province; $("incident-district").value=r.district; $("incident-address").value=r.address||""; $("incident-date").value=r.date; $("incident-time").value=r.time; $("incident-latitude").value=r.latitude??""; $("incident-longitude").value=r.longitude??""; $("incident-severity").value=r.severity; $("incident-status").value=r.status; $("incident-description").value=r.description; $("incident-notes").value=r.notes||""; photoBlob=r.photo||null;
    if(r.photo){ $("incident-photo-preview").src=URL.createObjectURL(r.photo); $("incident-photo-preview").hidden=false; }
    $("cancel-edit").hidden=false; $("incident-form").querySelector('[type="submit"]').textContent=t("update"); $("incident-management").scrollIntoView({behavior:"smooth"});
  }
  async function remove(id) {
    if(!confirm(t("confirmDelete")))return;
    try { await transaction("incidents","readwrite",(store)=>store.delete(id)); await loadRecords(); render(); toast(t("deleted")); }
    catch(error){console.error("Incident deletion failed",error);toast(t("fail")+error.message);}
  }
  function showDetails(id) {
    const r=incidents.find(x=>x.id===id), box=$("incident-details"); if(!r)return;
    selectedId=id;
    box.innerHTML=`<h3>${text(t("details"))}: ${text(r.title)}</h3><dl>${[[t("id"),r.id],[t("province"),r.province],[t("district"),r.district],[t("type"),categoryName(r.category)],[t("date"),`${r.date} ${r.time}`],[t("severity"),t(r.severity)],[t("status"),t(r.status)],[t("address"),r.address],[t("description"),r.description],[t("notes"),r.notes],[t("lat"),r.latitude],[t("lon"),r.longitude]].map(([k,v])=>`<div><dt>${text(k)}</dt><dd>${text(v||"—")}</dd></div>`).join("")}</dl>${r.photo?`<img class="incident-photo-preview" src="${URL.createObjectURL(r.photo)}" alt="${text(t("photo"))}">`:""}`;
    box.hidden=false;
  }
  function blobToDataUrl(blob) {
    return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(blob);});
  }
  async function exportJson() {
    const records=await Promise.all(incidents.map(async (record)=>({...record,photo:record.photo?await blobToDataUrl(record.photo):null})));
    const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),incidents:records},null,2)],{type:"application/json"});
    download(blob,`gis-backup-${new Date().toISOString().slice(0,10)}.json`);
  }
  function download(blob,name) { const url=URL.createObjectURL(blob), a=document.createElement("a"); a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); }
  function exportCsv() {
    const cols=["id","title","category","province","district","address","latitude","longitude","date","time","severity","status","description","notes"];
    const quote=(x)=>`"${String(x??"").replace(/"/g,'""')}"`;
    download(new Blob([`\uFEFF${[cols.join(","),...incidents.map(r=>cols.map(c=>quote(r[c])).join(","))].join("\r\n")}`],{type:"text/csv;charset=utf-8"}),`gis-incidents-${new Date().toISOString().slice(0,10)}.csv`);
  }
  async function importJson(file) {
    try {
      const parsed=JSON.parse(await file.text()), incoming=Array.isArray(parsed)?parsed:parsed.incidents;
      if(!Array.isArray(incoming)||incoming.some(r=>!r||!r.id||validate({...r,latitude:r.latitude===""?null:r.latitude,longitude:r.longitude===""?null:r.longitude}))) throw new Error(t("badJson"));
      const current=new Set(incidents.map(r=>r.id)), seen=new Set();
      if(incoming.some(r=>current.has(String(r.id))||seen.has(String(r.id))||!seen.add(String(r.id)))) throw new Error(t("badJson"));
      const normalized=await Promise.all(incoming.map(async (r)=>({...r,id:String(r.id),photo:typeof r.photo==="string"&&r.photo.startsWith("data:")?await (await fetch(r.photo)).blob():r.photo||null})));
      const tx=db.transaction("incidents","readwrite"), store=tx.objectStore("incidents"); normalized.forEach(r=>store.add(r));
      await new Promise((resolve,reject)=>{tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});
      await loadRecords();render();toast(t("jsonDone"));
    } catch(error){console.error("Backup import failed",error);toast(t("fail")+error.message);}
  }
  function bind() {
    initFormOptions(); renderCategoryEditor(); $("incident-form").addEventListener("submit",save); $("cancel-edit").addEventListener("click",clearForm); $("clear-form").addEventListener("click",clearForm);
    $("incident-photo").addEventListener("change",(e)=>{const file=e.target.files[0];if(!file)return;if(file.size>2*1024*1024){e.target.value="";toast(t("photoLimit"));return;}photoBlob=file;const preview=$("incident-photo-preview");preview.src=URL.createObjectURL(file);preview.hidden=false;});
    $("incidents-table").addEventListener("click",(e)=>{const btn=e.target.closest("[data-action]");if(!btn)return;const id=btn.closest("[data-row-id]").dataset.rowId;({view:()=>showDetails(id),edit:()=>edit(id),delete:()=>remove(id)})[btn.dataset.action]?.();});
    $("district-table").addEventListener("click",(e)=>{const row=e.target.closest("[data-district]");if(!row)return;$("district-filter").value=row.dataset.district;render();const record=incidents.find(x=>x.district===row.dataset.district&&Number.isFinite(x.latitude));if(record)map?.setView([record.latitude,record.longitude],13);});
    ["incident-search","incident-category-filter","incident-district-filter","incident-from-filter","incident-to-filter","incident-status-filter","incident-severity-filter","district-filter","category-filter","severity-filter","district-search","sort-select"].forEach(id=>$(id)?.addEventListener("input",render));
    document.querySelector('[data-layer="incidents"]')?.addEventListener("change",(e)=>{if(!markers)return;if(e.target.checked)map.addLayer(markers);else map.removeLayer(markers);});
    $("period-filter").addEventListener("change",()=>{const days=Number($("period-filter").value);if(days){const start=new Date();start.setDate(start.getDate()-days);$("date-from").value=start.toISOString().slice(0,10);}else $("date-from").value="";render();});
    ["date-from","date-to"].forEach(id=>$(id).addEventListener("change",render));
    $("map-type-filter").addEventListener("change",(e)=>{const selected=mapLayers[e.target.value]||mapLayers.street; Object.values(mapLayers).forEach(layer=>{if(map.hasLayer(layer))map.removeLayer(layer);}); selected.addTo(map);});
    $("language-toggle").addEventListener("click",async()=>{const next=lang==="ar"?"en":"ar";try{await transaction("settings","readwrite",store=>store.put({key:"language",value:next}));lang=next;initFormOptions();renderCategoryEditor();updateLanguage();}catch(error){console.error("Language setting could not be stored",error);toast(t("fail")+error.message);}});
    $("export-json").addEventListener("click",()=>exportJson().catch(error=>{console.error("JSON backup export failed",error);toast(t("fail")+error.message);}));
    $("export-csv").addEventListener("click",()=>{try{exportCsv();}catch(error){console.error("CSV export failed",error);toast(t("fail")+error.message);}});
    $("import-json").addEventListener("change",(e)=>{if(e.target.files[0])importJson(e.target.files[0]);e.target.value="";});
    $("add-category-form").addEventListener("submit",addCategory);
  }
  async function start() {
    try {
      db=await openDb();
      const savedCategories=await transaction("settings","readonly",store=>store.get("categories"));
      if(Array.isArray(savedCategories?.value)&&savedCategories.value.every(c=>Array.isArray(c)&&c.length===3))categories=savedCategories.value;
      const savedLanguage=await transaction("settings","readonly",store=>store.get("language"));
      if(savedLanguage?.value==="ar"||savedLanguage?.value==="en")lang=savedLanguage.value;
      await loadRecords(); initMap(); bind(); updateLanguage();
      $("today-label").textContent=new Intl.DateTimeFormat(lang==="ar"?"ar-IQ":"en-IQ",{dateStyle:"medium"}).format(new Date());
    } catch(error) {
      console.error("Local database initialization failed",error);
      toast(t("fail")+error.message);
      $("incidents-table").innerHTML=`<tr><td colspan="8">${text(t("fail")+error.message)}</td></tr>`;
    }
  }
  start();
})();
