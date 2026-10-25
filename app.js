(() => {
  "use strict";

  const translations = {
    en: {
      brandSub:"جمهورية العراق · بغداد",unofficialBrand:"لوحة توضيحية غير رسمية",workspace:"WORKSPACE",overview:"Overview",mapNav:"Incident map",districts:"District analysis",dataNav:"Data tools",
      demoMode:"SIMULATED DATA",demoNoteSide:"Fictional records only · not an operational feed",illustrative:"SIMULATED DATA",cityBriefing:"SECURITY INTELLIGENCE",title:"Baghdad incident analysis",subtitle:"A bilingual GIS view of fictional, simulated incident records.",
      localTime:"BAGHDAD LOCAL",notice:"<strong>SIMULATED DATA ONLY.</strong> Incidents and district boundaries are fictional illustrations, not verified Baghdad information. Counts are not crime rates or proof that a district is unsafe.",
      sampleIncidents:"RECORDED INCIDENTS",filteredRecords:"In selected filters",highSeverity:"HIGH SEVERITY",mediumSeverity:"MEDIUM SEVERITY",lowSeverity:"LOW SEVERITY",filteredSeverity:"Selected records",highestDistrict:"MOST SAMPLE RECORDS",lowestDistrict:"FEWEST SAMPLE RECORDS",sampleOnly:"Within this dataset only",openRecords:"OPEN / REVIEW",resolvedRecords:"RESOLVED / CLOSED",statusNote:"Status when supplied",
      geospatialView:"GEOSPATIAL VIEW",cityActivity:"Security incident map",district:"District",period:"Period",fromDate:"From",toDate:"To",category:"Incident type",severity:"Severity",allDistricts:"All districts",allDates:"All dates",last7:"Last 7 days",last30:"Last 30 days",last90:"Last 90 days",allTypes:"All incident types",allLevels:"All levels",low:"Low",medium:"Medium",high:"High",
      mapUnavailable:"Interactive map unavailable",mapFallback:"Connect to the internet to load Leaflet and OpenStreetMap tiles. Dashboard data remains local.",sampleMap:"SIMULATED INCIDENT MAP · BAGHDAD",mapLegend:"MAP LEGEND",incidents:"Incidents",incidentCategories:"Incident categories",districtAreas:"Illustrative district boundaries",markerKey:"Marker outline indicates category; fill indicates severity.",boundaryCaveat:"Approximate fictional district illustrations.",
      patternWatch:"PATTERN ANALYSIS",weeklyTrend:"Incident trend over time",simulatedCount:"SIMULATED COUNT",chartUnavailable:"Chart library unavailable; incident records are still shown.",trendCaveat:"Small fictional sample only; not an indicator of actual risk or safety.",distribution:"CATEGORY DISTRIBUTION",incidentsByCategory:"Incidents by category",categoryCaveat:"Category counts describe only records currently loaded.",districtComparison:"DISTRICT COMPARISON",incidentsByDistrict:"Incidents by district",districtChartCaveat:"Select a district to filter the map and other charts.",
      searchPlaceholder:"Search districts…",sortName:"Sort: name",sortCount:"Sort: highest incidents",sortLowest:"Sort: lowest incidents",sortTrend:"Sort: recent trend",thDistrict:"DISTRICT",thSampleCount:"RECORDS",thHigh:"HIGH",thMedium:"MEDIUM",thLow:"LOW",thTrend:"7-DAY CHANGE",thPriority:"ASSESSMENT",relativeOnly:"Relative comparisons in this simulated dataset are not rates or safety scores.",none:"No matching districts.",up:"up",down:"down",flat:"flat",insufficient:"insufficient history",trendNoChange:"No notable change in this sample window.",trendNoBaseline:"Not enough records for a 7-day comparison.",trendUp:"Sample records are {pct}% higher than the preceding 7-day window.",trendDown:"Sample records are {pct}% lower than the preceding 7-day window.",
      planningContext:"DECISION SUPPORT",assessmentTitle:"Assessment priorities",notOperational:"NOT OPERATIONAL",priorityHigh:"High · further assessment",priorityMedium:"Medium · review patterns",priorityRoutine:"Routine monitoring",priorityHighReason:"Multiple high-severity records and a rising recent pattern; validate source and context. Counts alone do not indicate unsafe conditions.",priorityMediumReason:"A severity mix or recent increase merits data-quality and service-context review.",priorityRoutineReason:"No combined signal in this limited dataset. This is not evidence of safety.",noCoverage:"No aggregated service coverage data was provided; resource availability cannot be compared.",coverageProvided:"Aggregated service coverage data is available for comparison.",coverageUnknown:"No district-specific coverage count was provided.",coverageForDistrict:"Reported aggregate count: {count}. This is not a measure of availability or adequacy.",recommendationDisclaimer:"Flags are for further assessment only, based on the loaded records. Incident counts alone do not establish that a district is unsafe or justify action against people.",loadingRecommendations:"Loading assessment context…",
      dataTools:"DATA GOVERNANCE",importTitle:"Import local incident data",importHelp:"Import authorized, de-identified CSV or GeoJSON. Data stays in this browser session; use aggregated or generalized coordinates before sharing.",chooseFile:"Choose CSV / GeoJSON",importButton:"Validate and import",resetDemo:"Reset simulated data",importSchema:"Required: id, date (YYYY-MM-DD), district, category, severity, status, latitude, longitude.",csvFormatTitle:"CSV columns",geojsonFormatTitle:"GeoJSON",privacyNote:"Never import personal identifiers, sensitive operational details, exact deployment locations, or confidential records. This static app has no authentication, audit trail, or secure storage.",appendMode:"Append to current data",replaceMode:"Replace current incidents",importSuccess:"Validated and imported {count} incident records.",importError:"Import failed: {reason}",chooseFileError:"Choose a CSV or GeoJSON file first.",duplicateId:"Duplicate incident ID: {id}",dateInvalid:"Use a real date in YYYY-MM-DD format.",districtInvalid:"Unknown district: {district}",categoryInvalid:"Unknown category: {category}",severityInvalid:"Severity must be low, medium, or high.",statusInvalid:"Status must be open, investigating, resolved, or closed.",coordinatesInvalid:"Coordinates are outside valid latitude/longitude bounds.",missingFields:"Missing required field(s): {fields}.",rowInvalid:"Invalid record at row/feature {row}: {reason}",badCsv:"CSV must have a header row and valid quoted fields.",geojsonInvalid:"GeoJSON must be a FeatureCollection of Point features.",dataLoaded:"Loaded {count} simulated sample records.",importedBadge:"IMPORTED DATA",simulatedBadge:"SIMULATED DATA",mixedBadge:"SIMULATED + IMPORTED",statusOpen:"Open",statusInvestigating:"Investigating",statusResolved:"Resolved",statusClosed:"Closed",simulatedRecord:"Simulated record",importedRecord:"Imported record",incident:"Incident",districtLabel:"District",typeLabel:"Category",severityLabel:"Severity",statusLabel:"Status",dateLabel:"Date",
      categorySettings:"CONFIGURATION",manageCategories:"Manage incident categories",categoryAdminHelp:"Edit labels or add a category. IDs are used in imported files; custom categories are kept in this browser.",categoryEnglishPlaceholder:"New category in English",categoryArabicPlaceholder:"Category name in Arabic",addCategory:"Add category",saveCategory:"Save",categorySaved:"Category labels saved.",categoryAdded:"Category added.",categoryExists:"That category ID already exists.",categoryRequired:"Enter both English and Arabic category names.",categoryFallback:"Other reported incidents",categoryNameEn:"English name",categoryNameAr:"Arabic name",
      demoFooter:"SIMULATED DEMONSTRATION",footerNote:"OpenStreetMap basemap · fictional sample records",dismiss:"Dismiss notice",districtDetail:"Category breakdown",severityBreakdown:"Severity breakdown",noRecords:"No records match the current filters.",categoryCount:"{count} records",selectDistrictTip:"Select a district to see its category and severity breakdown."
    },
    ar: {
      brandSub:"جمهورية العراق · بغداد",unofficialBrand:"لوحة توضيحية غير رسمية",workspace:"مساحة العمل",overview:"نظرة عامة",mapNav:"خريطة الحوادث",districts:"تحليل المناطق",dataNav:"أدوات البيانات",
      demoMode:"بيانات محاكاة",demoNoteSide:"سجلات خيالية فقط · ليست بيانات تشغيلية",illustrative:"بيانات محاكاة",cityBriefing:"معلومات أمنية",title:"تحليل الحوادث في بغداد",subtitle:"عرض جغرافي ثنائي اللغة لسجلات حوادث افتراضية ومحاكاة.",
      localTime:"توقيت بغداد المحلي",notice:"<strong>بيانات محاكاة فقط.</strong> الحوادث وحدود المناطق توضيحية وخيالية، وليست معلومات موثقة عن بغداد. الأعداد ليست معدلات جريمة ولا دليلاً على أن منطقة ما غير آمنة.",
      sampleIncidents:"الحوادث المسجلة",filteredRecords:"ضمن عوامل التصفية",highSeverity:"شدة مرتفعة",mediumSeverity:"شدة متوسطة",lowSeverity:"شدة منخفضة",filteredSeverity:"السجلات المحددة",highestDistrict:"أعلى سجلات افتراضية",lowestDistrict:"أقل سجلات افتراضية",sampleOnly:"ضمن هذه البيانات فقط",openRecords:"مفتوحة / قيد المراجعة",resolvedRecords:"تمت المعالجة / مغلقة",statusNote:"الحالة عند توفرها",
      geospatialView:"عرض جغرافي مكاني",cityActivity:"خريطة الحوادث الأمنية",district:"المنطقة",period:"الفترة",fromDate:"من",toDate:"إلى",category:"نوع الحادث",severity:"الشدة",allDistricts:"كل المناطق",allDates:"كل التواريخ",last7:"آخر ٧ أيام",last30:"آخر ٣٠ يوماً",last90:"آخر ٩٠ يوماً",allTypes:"كل أنواع الحوادث",allLevels:"كل المستويات",low:"منخفضة",medium:"متوسطة",high:"مرتفعة",
      mapUnavailable:"الخريطة التفاعلية غير متاحة",mapFallback:"اتصل بالإنترنت لتحميل Leaflet وخرائط OpenStreetMap. تبقى بيانات لوحة المعلومات محلية.",sampleMap:"خريطة حوادث محاكاة · بغداد",mapLegend:"مفتاح الخريطة",incidents:"الحوادث",incidentCategories:"فئات الحوادث",districtAreas:"حدود توضيحية للمناطق",markerKey:"إطار العلامة يوضح الفئة؛ واللون يوضح الشدة.",boundaryCaveat:"رسوم تقريبية وخيالية للمناطق.",
      patternWatch:"تحليل الأنماط",weeklyTrend:"اتجاه الحوادث بمرور الوقت",simulatedCount:"عدد محاكاة",chartUnavailable:"مكتبة الرسوم غير متاحة؛ ما زالت السجلات معروضة.",trendCaveat:"عينة خيالية صغيرة فقط؛ لا تشير إلى خطر فعلي أو مستوى السلامة.",distribution:"توزيع الفئات",incidentsByCategory:"الحوادث حسب الفئة",categoryCaveat:"تعرض الأعداد السجلات المحملة فقط.",districtComparison:"مقارنة المناطق",incidentsByDistrict:"الحوادث حسب المنطقة",districtChartCaveat:"اختر منطقة لتصفية الخريطة والرسوم الأخرى.",
      searchPlaceholder:"ابحث عن منطقة…",sortName:"ترتيب: الاسم",sortCount:"ترتيب: الأكثر حوادث",sortLowest:"ترتيب: الأقل حوادث",sortTrend:"ترتيب: الاتجاه الحديث",thDistrict:"المنطقة",thSampleCount:"السجلات",thHigh:"مرتفعة",thMedium:"متوسطة",thLow:"منخفضة",thTrend:"تغير ٧ أيام",thPriority:"التقييم",relativeOnly:"المقارنات النسبية ضمن بيانات المحاكاة وليست معدلات أو درجات سلامة.",none:"لا توجد مناطق مطابقة.",up:"ارتفاع",down:"انخفاض",flat:"مستقر",insufficient:"سجل غير كافٍ",trendNoChange:"لا يوجد تغير ملحوظ ضمن هذه العينة.",trendNoBaseline:"لا توجد سجلات كافية لمقارنة ٧ أيام.",trendUp:"السجلات الافتراضية أعلى بنسبة {pct}٪ من الأيام السبعة السابقة.",trendDown:"السجلات الافتراضية أقل بنسبة {pct}٪ من الأيام السبعة السابقة.",
      planningContext:"دعم القرار",assessmentTitle:"أولويات التقييم",notOperational:"غير تشغيلي",priorityHigh:"مرتفع · تقييم إضافي",priorityMedium:"متوسط · مراجعة الأنماط",priorityRoutine:"متابعة اعتيادية",priorityHighReason:"سجلات متعددة عالية الشدة واتجاه حديث متزايد؛ تحقق من المصدر والسياق. الأعداد وحدها لا تدل على ظروف غير آمنة.",priorityMediumReason:"يستدعي مزيج الشدة أو الزيادة الحديثة مراجعة جودة البيانات وسياق الخدمات.",priorityRoutineReason:"لا توجد إشارة مركبة في هذه البيانات المحدودة. وهذا لا يثبت السلامة.",noCoverage:"لم تتوفر بيانات مجمعة عن تغطية الخدمات؛ لا يمكن مقارنة توفر الموارد.",coverageProvided:"تتوفر بيانات مجمعة عن تغطية الخدمات للمقارنة.",coverageUnknown:"لم يتوفر عدد تغطية خاص بهذه المنطقة.",coverageForDistrict:"العدد المجمع المبلغ عنه: {count}. لا يقيس ذلك التوفر أو الكفاية.",recommendationDisclaimer:"المؤشرات للتقييم الإضافي فقط بناءً على السجلات المحملة. لا تثبت أعداد الحوادث وحدها أن المنطقة غير آمنة ولا تبرر إجراءً ضد أشخاص.",loadingRecommendations:"جارٍ تحميل سياق التقييم…",
      dataTools:"حوكمة البيانات",importTitle:"استيراد بيانات الحوادث محلياً",importHelp:"استورد ملفات CSV أو GeoJSON مصرحاً بها ومنزوعة الهوية. تبقى البيانات في جلسة المتصفح؛ استخدم إحداثيات عامة أو مجمعة قبل المشاركة.",chooseFile:"اختيار CSV / GeoJSON",importButton:"تحقق واستورد",resetDemo:"إعادة بيانات المحاكاة",importSchema:"المطلوب: id وdate (YYYY-MM-DD) وdistrict وcategory وseverity وstatus وlatitude وlongitude.",csvFormatTitle:"أعمدة CSV",geojsonFormatTitle:"GeoJSON",privacyNote:"لا تستورد معرّفات شخصية أو تفاصيل تشغيلية حساسة أو مواقع انتشار دقيقة أو سجلات سرية. لا يحتوي هذا التطبيق الثابت على مصادقة أو سجل تدقيق أو تخزين آمن.",appendMode:"إضافة إلى البيانات الحالية",replaceMode:"استبدال الحوادث الحالية",importSuccess:"تم التحقق واستيراد {count} سجل حادثة.",importError:"فشل الاستيراد: {reason}",chooseFileError:"اختر ملف CSV أو GeoJSON أولاً.",duplicateId:"معرّف حادثة مكرر: {id}",dateInvalid:"استخدم تاريخاً صالحاً بالتنسيق YYYY-MM-DD.",districtInvalid:"منطقة غير معروفة: {district}",categoryInvalid:"فئة غير معروفة: {category}",severityInvalid:"يجب أن تكون الشدة low أو medium أو high.",statusInvalid:"يجب أن تكون الحالة open أو investigating أو resolved أو closed.",coordinatesInvalid:"الإحداثيات خارج حدود خطوط العرض والطول.",missingFields:"حقول مطلوبة مفقودة: {fields}.",rowInvalid:"سجل غير صالح في الصف/المعلم {row}: {reason}",badCsv:"يجب أن يحتوي CSV على صف عناوين واقتباسات صالحة.",geojsonInvalid:"يجب أن يكون GeoJSON مجموعة معالم من نوع Point.",dataLoaded:"تم تحميل {count} سجلاً افتراضياً للمحاكاة.",importedBadge:"بيانات مستوردة",simulatedBadge:"بيانات محاكاة",mixedBadge:"محاكاة + مستورد",statusOpen:"مفتوح",statusInvestigating:"قيد المراجعة",statusResolved:"تمت المعالجة",statusClosed:"مغلق",simulatedRecord:"سجل محاكاة",importedRecord:"سجل مستورد",incident:"حادثة",districtLabel:"المنطقة",typeLabel:"الفئة",severityLabel:"الشدة",statusLabel:"الحالة",dateLabel:"التاريخ",
      categorySettings:"الإعدادات",manageCategories:"إدارة فئات الحوادث",categoryAdminHelp:"عدّل التسميات أو أضف فئة. تستخدم المعرّفات في الملفات المستوردة؛ تحفظ الفئات المخصصة في هذا المتصفح.",categoryEnglishPlaceholder:"اسم الفئة بالإنجليزية",categoryArabicPlaceholder:"اسم الفئة بالعربية",addCategory:"إضافة فئة",saveCategory:"حفظ",categorySaved:"تم حفظ تسميات الفئة.",categoryAdded:"تمت إضافة الفئة.",categoryExists:"معرّف الفئة موجود بالفعل.",categoryRequired:"أدخل اسمي الفئة بالإنجليزية والعربية.",categoryFallback:"حوادث أخرى مبلغ عنها",categoryNameEn:"الاسم بالإنجليزية",categoryNameAr:"الاسم بالعربية",
      demoFooter:"عرض محاكاة توضيحي",footerNote:"خريطة OpenStreetMap · سجلات افتراضية",dismiss:"إخفاء التنبيه",districtDetail:"تفصيل الفئات",severityBreakdown:"تفصيل الشدة",noRecords:"لا توجد سجلات تطابق عوامل التصفية الحالية.",categoryCount:"{count} سجلاً",selectDistrictTip:"اختر منطقة لعرض تفصيل الفئات والشدة."
    }
  };

  const CATEGORY_COLORS = ["#72d7b0","#73aee6","#efb765","#f27d72","#c78ce3","#5bc0be","#e685b5","#9bad68","#d89562","#8fabe8"];
  const SEVERITY_COLORS = {low:"#72d7b0",medium:"#efb765",high:"#f27d72"};
  const VALID_STATUSES = new Set(["open","investigating","resolved","closed"]);
  const REQUIRED_FIELDS = ["id","date","district","category","severity","status","latitude","longitude"];
  const state = {
    lang:"en", data:null, defaultData:null, geojson:null, map:null, layers:{}, charts:{},
    selectedDistrict:"all", lastMapDistrict:null, period:"all", category:"all", severity:"all", from:"", to:"",
    query:"", sort:"name", loadedSource:"simulated", importMode:"append"
  };
  const el = (id) => document.getElementById(id);
  const tr = (key) => translations[state.lang][key] || translations.en[key] || key;
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const localized = (value) => value && (value[state.lang] || value.en) || "";
  const districtById = (id) => state.data.districts.find((district) => district.id === id);
  const districtName = (id) => localized(districtById(id)?.name) || id;
  const categoryName = (id) => localized(state.data.categories[id]) || id;
  const todayISO = () => new Date(Date.now()+3*60*60*1000).toISOString().slice(0,10);
  const formatDate = (date) => new Intl.DateTimeFormat(state.lang === "ar" ? "ar-IQ" : "en-GB",{dateStyle:"medium",timeZone:"UTC"}).format(new Date(`${date}T12:00:00Z`));
  const interpolate = (text, values) => Object.entries(values).reduce((result,[key,value]) => result.replaceAll(`{${key}}`,String(value)),text);
  function setText(id,value) { const node=el(id); if(node) node.textContent=value; }
  function showToast(message) {
    const toast=el("toast");
    toast.textContent=message;
    toast.classList.add("show");
    window.setTimeout(()=>toast.classList.remove("show"),4200);
  }

  function applyLanguage() {
    document.documentElement.lang=state.lang;
    document.documentElement.dir=state.lang==="ar"?"rtl":"ltr";
    document.querySelectorAll("[data-i18n]").forEach((node)=>{
      const value=tr(node.dataset.i18n);
      if(node.id==="notice") node.querySelector("p").innerHTML=value;
      else node.textContent=value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node)=>node.placeholder=tr(node.dataset.i18nPlaceholder));
    el("language-toggle").innerHTML=state.lang==="en"?'عربي <span>↗</span>':'English <span>↗</span>';
    el("language-toggle").setAttribute("aria-label",state.lang==="en"?"Switch to Arabic":"Switch to English");
    document.querySelector("nav").setAttribute("aria-label",state.lang==="en"?"Main navigation":"التنقل الرئيسي");
    el("district-filter").setAttribute("aria-label",tr("district"));
    el("period-filter").setAttribute("aria-label",tr("period"));
    el("category-filter").setAttribute("aria-label",tr("category"));
    el("severity-filter").setAttribute("aria-label",tr("severity"));
    el("date-from").setAttribute("aria-label",tr("fromDate"));
    el("date-to").setAttribute("aria-label",tr("toDate"));
    el("sort-select").setAttribute("aria-label",tr("districtComparison"));
    el("district-search").setAttribute("aria-label",tr("searchPlaceholder"));
    el("map").setAttribute("aria-label",tr("sampleMap"));
    el("notice").querySelector(".notice-close").setAttribute("aria-label",tr("dismiss"));
    setText("today-label",new Intl.DateTimeFormat(state.lang==="ar"?"ar-IQ":"en-GB",{dateStyle:"full",timeZone:"Asia/Baghdad"}).format(new Date()));
    updateSelectLabels();
    if(state.data) {
      fillFilters();
      renderCategoryEditor();
      render();
    }
  }

  function updateSelectLabels() {
    const options={
      "district-filter":{"all":tr("allDistricts")},
      "period-filter":{"all":tr("allDates"),"7":tr("last7"),"30":tr("last30"),"90":tr("last90")},
      "category-filter":{"all":tr("allTypes")},
      "severity-filter":{"all":tr("allLevels"),"low":tr("low"),"medium":tr("medium"),"high":tr("high")},
      "sort-select":{"name":tr("sortName"),"incidents":tr("sortCount"),"lowest":tr("sortLowest"),"trend":tr("sortTrend")},
      "import-mode":{"append":tr("appendMode"),"replace":tr("replaceMode")}
    };
    Object.entries(options).forEach(([id,labels])=>Object.entries(labels).forEach(([value,label])=>{
      const option=el(id)?.querySelector(`option[value="${value}"]`);
      if(option) option.textContent=label;
    }));
  }

  function validDate(value) {
    if(typeof value!=="string"||! /^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date=new Date(`${value}T00:00:00Z`);
    return Number.isFinite(date.getTime())&&date.toISOString().slice(0,10)===value;
  }

  function validateIncident(raw,index,existingIds) {
    const missing=REQUIRED_FIELDS.filter((field)=>raw[field]===undefined||String(raw[field]).trim()==="");
    if(missing.length) throw new Error(interpolate(tr("missingFields"),{fields:missing.join(", ")}));
    const incident={
      id:String(raw.id).trim(),date:String(raw.date).trim(),district:String(raw.district).trim(),
      category:String(raw.category).trim(),severity:String(raw.severity).trim().toLowerCase(),
      status:String(raw.status).trim().toLowerCase(),latitude:Number(raw.latitude),longitude:Number(raw.longitude),
      simulated:raw.simulated===true
    };
    if(!incident.id||incident.id.length>80) throw new Error("Incident ID must be 1–80 characters.");
    if(existingIds.has(incident.id)) throw new Error(interpolate(tr("duplicateId"),{id:incident.id}));
    if(!validDate(incident.date)) throw new Error(tr("dateInvalid"));
    if(!districtById(incident.district)) throw new Error(interpolate(tr("districtInvalid"),{district:incident.district}));
    if(!Object.hasOwn(state.data.categories,incident.category)) throw new Error(interpolate(tr("categoryInvalid"),{category:incident.category}));
    if(!["low","medium","high"].includes(incident.severity)) throw new Error(tr("severityInvalid"));
    if(!VALID_STATUSES.has(incident.status)) throw new Error(tr("statusInvalid"));
    if(!Number.isFinite(incident.latitude)||!Number.isFinite(incident.longitude)||incident.latitude < -90||incident.latitude > 90||incident.longitude < -180||incident.longitude > 180) throw new Error(tr("coordinatesInvalid"));
    existingIds.add(incident.id);
    return incident;
  }

  function activeIncidents() {
    const today=todayISO();
    const limit=state.period==="all"?null:Number(state.period);
    const cutoffDate=limit===null?null:new Date(`${today}T00:00:00Z`);
    if(cutoffDate) cutoffDate.setUTCDate(cutoffDate.getUTCDate()-(limit-1));
    const cutoff=cutoffDate?.toISOString().slice(0,10)||null;
    return state.data.incidents.filter((item)=>
      (state.selectedDistrict==="all"||item.district===state.selectedDistrict)&&
      (state.category==="all"||item.category===state.category)&&
      (state.severity==="all"||item.severity===state.severity)&&
      (!cutoff||item.date>=cutoff)&&item.date<=today&&
      (!state.from||item.date>=state.from)&&(!state.to||item.date<=state.to)
    );
  }

  function fillFilters() {
    const selectedDistrict=state.selectedDistrict;
    const selectedCategory=state.category;
    el("district-filter").innerHTML=`<option value="all">${esc(tr("allDistricts"))}</option>`+state.data.districts.map((item)=>`<option value="${esc(item.id)}">${esc(localized(item.name))}</option>`).join("");
    el("district-filter").value=state.data.districts.some((item)=>item.id===selectedDistrict)?selectedDistrict:"all";
    el("category-filter").innerHTML=`<option value="all">${esc(tr("allTypes"))}</option>`+Object.entries(state.data.categories).map(([id,name])=>`<option value="${esc(id)}">${esc(localized(name))}</option>`).join("");
    el("category-filter").value=Object.hasOwn(state.data.categories,selectedCategory)?selectedCategory:"all";
    el("period-filter").value=state.period;
    el("severity-filter").value=state.severity;
    renderCategoryLegend();
  }

  function renderCategoryLegend() {
    if(!state.data) return;
    setText("category-count",Object.keys(state.data.categories).length.toLocaleString(state.lang));
    el("category-legend").innerHTML=Object.entries(state.data.categories).map(([id,name],index)=>{
      const configuredColor=state.data.categories[id].color;
      const color=typeof configuredColor==="string"&&/^#[0-9a-f]{6}$/i.test(configuredColor)?configuredColor:CATEGORY_COLORS[index%CATEGORY_COLORS.length];
      return `<div class="layer-row"><span class="legend-dot legend-category-dot" style="--legend-color:${esc(color)}"></span><span>${esc(localized(name))}</span></div>`;
    }).join("");
  }

  function getDistrictStats(incidents) {
    const today=new Date(`${todayISO()}T12:00:00Z`);
    return state.data.districts.map((district)=>{
      const records=incidents.filter((item)=>item.district===district.id);
      const high=records.filter((item)=>item.severity==="high").length;
      const medium=records.filter((item)=>item.severity==="medium").length;
      const low=records.filter((item)=>item.severity==="low").length;
      const recent=records.filter((item)=>(today-new Date(`${item.date}T12:00:00Z`))/86400000<7).length;
      const previous=records.filter((item)=>{
        const age=(today-new Date(`${item.date}T12:00:00Z`))/86400000;
        return age>=7&&age<14;
      }).length;
      const delta=previous===0?(recent>0?null:0):Math.round((recent-previous)/previous*100);
      const coverageEntries=(state.data.serviceCoverage||[]).filter((entry)=>entry.district===district.id);
      const coverage=coverageEntries.reduce((sum,entry)=>sum+entry.count,0);
      const coverageKnown=coverageEntries.length>0;
      const rising=delta!==null&&delta>0;
      const coverageReview=coverageKnown&&coverage===0&&recent>=2;
      const priority=high>=2&&records.length>=3&&rising?"high":high>=1||records.length>=4&&rising||coverageReview?"medium":"routine";
      return {district,records,count:records.length,high,medium,low,recent,previous,delta,coverage,coverageKnown,priority};
    });
  }

  function updateSummary(incidents) {
    const stats=getDistrictStats(incidents).sort((a,b)=>b.count-a.count);
    setText("kpi-incidents",incidents.length.toLocaleString(state.lang));
    for(const severity of ["high","medium","low"]) setText(`kpi-${severity}`,incidents.filter((item)=>item.severity===severity).length.toLocaleString(state.lang));
    setText("kpi-highest",stats.length&&stats[0].count?districtName(stats[0].district.id):"—");
    setText("kpi-lowest",stats.length&&stats[stats.length-1].count?districtName(stats[stats.length-1].district.id):"—");
    setText("kpi-open",incidents.filter((item)=>item.status==="open"||item.status==="investigating").length.toLocaleString(state.lang));
    setText("kpi-resolved",incidents.filter((item)=>item.status==="resolved"||item.status==="closed").length.toLocaleString(state.lang));
    const badge=el("dataset-badge");
    const hasSimulated=state.data.incidents.some((item)=>item.simulated);
    const hasImported=state.data.incidents.some((item)=>!item.simulated);
    badge.textContent=hasSimulated&&hasImported?tr("mixedBadge"):hasImported?tr("importedBadge"):tr("simulatedBadge");
    badge.classList.toggle("imported-badge",state.loadedSource!=="simulated");
  }

  function renderDistrictTable(incidents) {
    const query=state.query.trim().toLocaleLowerCase(state.lang);
    const rows=getDistrictStats(incidents).filter((item)=>`${item.district.name.en} ${item.district.name.ar}`.toLocaleLowerCase(state.lang).includes(query));
    rows.sort((a,b)=>state.sort==="incidents"?b.count-a.count:state.sort==="lowest"?a.count-b.count:state.sort==="trend"?(b.delta??-Infinity)-(a.delta??-Infinity):localized(a.district.name).localeCompare(localized(b.district.name),state.lang));
    const tbody=el("district-table");
    if(!rows.length) tbody.innerHTML=`<tr><td colspan="7" class="empty-state">${esc(tr("none"))}</td></tr>`;
    else tbody.innerHTML=rows.map((item)=>{
      const trend=item.delta===null?tr("insufficient"):`${item.delta>0?"+":""}${item.delta}%`;
      const trendClass=item.delta>0?"trend-up":item.delta<0?"trend-down":"";
      const priorityKey=item.priority==="high"?"priorityHigh":item.priority==="medium"?"priorityMedium":"priorityRoutine";
      const title=item.priority==="high"?"priorityHighReason":item.priority==="medium"?"priorityMediumReason":"priorityRoutineReason";
      const active=state.selectedDistrict===item.district.id?" selected-district":"";
      return `<tr class="district-row${active}" data-district-row="${esc(item.district.id)}" tabindex="0" aria-label="${esc(item.district.name.en)} ${esc(item.district.name.ar)}">
        <td><span class="district-name"><i class="district-marker"></i><span><strong>${esc(item.district.name.en)}</strong><small lang="ar" dir="rtl">${esc(item.district.name.ar)}</small></span></span></td>
        <td><span class="count-pill">${item.count.toLocaleString(state.lang)}</span></td>
        <td>${item.high.toLocaleString(state.lang)}</td><td>${item.medium.toLocaleString(state.lang)}</td><td>${item.low.toLocaleString(state.lang)}</td>
        <td class="trend-label ${trendClass}">${esc(trend)}</td>
        <td><span class="priority-chip priority-${item.priority}" title="${esc(tr(title))}">${esc(tr(priorityKey))}</span></td>
      </tr>`;
    }).join("");
    tbody.querySelectorAll("[data-district-row]").forEach((row)=>{
      const selectDistrict=()=>{
        state.selectedDistrict=row.dataset.districtRow;
        fillFilters();
        render();
        el("map-section").scrollIntoView({behavior:"smooth",block:"center"});
      };
      row.addEventListener("click",selectDistrict);
      row.addEventListener("keydown",(event)=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();selectDistrict();}});
    });
    setText("table-count",`${rows.length} / ${state.data.districts.length}`);
    renderDistrictDetail(incidents);
  }

  function renderDistrictDetail(incidents) {
    if(state.selectedDistrict==="all") {
      el("district-detail").innerHTML=`<span>${esc(tr("selectDistrictTip"))}</span>`;
      return;
    }
    const selected=incidents.filter((item)=>item.district===state.selectedDistrict);
    const categoryBreakdown=Object.keys(state.data.categories).map((id)=>({id,count:selected.filter((item)=>item.category===id).length})).filter((item)=>item.count).sort((a,b)=>b.count-a.count);
    const severityBreakdown=["high","medium","low"].map((severity)=>`${esc(tr(severity))}: ${selected.filter((item)=>item.severity===severity).length}`).join(" · ");
    const categories=categoryBreakdown.length?categoryBreakdown.map((item)=>`<span class="detail-chip">${esc(categoryName(item.id))} <b>${item.count}</b></span>`).join(""):esc(tr("noRecords"));
    el("district-detail").innerHTML=`<strong>${esc(districtName(state.selectedDistrict))} · ${esc(tr("districtDetail"))}</strong><div class="detail-chips">${categories}</div><p>${esc(tr("severityBreakdown"))}: ${severityBreakdown}</p>`;
  }

  function renderAssessment(incidents) {
    const stats=getDistrictStats(incidents);
    const rank={high:0,medium:1,routine:2};
    const ordered=stats.slice().sort((a,b)=>rank[a.priority]-rank[b.priority]||b.recent-a.recent||b.count-a.count).slice(0,4);
    el("recommendations").innerHTML=ordered.map((item,index)=>{
      const key=item.priority==="high"?"priorityHigh":item.priority==="medium"?"priorityMedium":"priorityRoutine";
      const reason=item.priority==="high"?"priorityHighReason":item.priority==="medium"?"priorityMediumReason":"priorityRoutineReason";
      const coverage=!item.coverageKnown?((state.data.serviceCoverage||[]).length?tr("coverageUnknown"):tr("noCoverage")):`${tr("coverageForDistrict").replace("{count}",item.coverage)} `;
      const evidence=state.lang==="ar"?`السجلات: ${item.count} · مرتفعة الشدة: ${item.high} · آخر ٧ أيام: ${item.recent} · السابق: ${item.previous}. `:`Records: ${item.count} · high severity: ${item.high} · last 7 days: ${item.recent} · previous 7 days: ${item.previous}. `;
      return `<div class="recommendation"><span class="rec-rank">${index+1}</span><div class="rec-copy"><strong>${esc(districtName(item.district.id))} · ${esc(tr(key))}</strong><p>${esc(evidence+coverage+tr(reason))}</p></div><span class="rec-evidence">${item.count.toLocaleString(state.lang)} ${esc(tr("sampleIncidents").toLowerCase())}</span></div>`;
    }).join("");
  }

  function renderCharts(incidents) {
    if(!window.Chart) {
      ["trend","category","district"].forEach((name)=>{el(`${name}-chart`).hidden=true;el(`${name}-fallback`).hidden=false;});
      return;
    }
    ["trend","category","district"].forEach((name)=>{el(`${name}-chart`).hidden=false;el(`${name}-fallback`).hidden=true;});
    Object.values(state.charts).forEach((chart)=>chart?.destroy());
    const chartText=state.lang==="ar";
    const axisColor="#829294";
    const baseOptions={responsive:true,maintainAspectRatio:false,animation:{duration:180},plugins:{legend:{display:false},tooltip:{backgroundColor:"#10191d",titleColor:"#e7eeee",bodyColor:"#bdc9c7",borderColor:"#425457",borderWidth:1}},scales:{x:{grid:{display:false},ticks:{color:axisColor,font:{size:9}},border:{color:"#344347"}},y:{beginAtZero:true,ticks:{precision:0,color:axisColor,font:{size:9}},grid:{color:"#2b393d"},border:{display:false}}}};
    const byDate=new Map();
    incidents.forEach((item)=>byDate.set(item.date,(byDate.get(item.date)||0)+1));
    const trendLabels=Array.from({length:8},(_,index)=>{
      const date=new Date(`${todayISO()}T12:00:00Z`);date.setUTCDate(date.getUTCDate()-(7-index)*7+1);
      const start=date.toISOString().slice(0,10);
      const end=new Date(date);end.setUTCDate(end.getUTCDate()+7);
      const value=[...byDate.entries()].filter(([day])=>day>=start&&day<end.toISOString().slice(0,10)).reduce((sum,[,count])=>sum+count,0);
      return {label:new Intl.DateTimeFormat(chartText?"ar-IQ":"en-GB",{month:"short",day:"numeric",timeZone:"UTC"}).format(date),value};
    });
    const recent=trendLabels[7].value,previous=trendLabels[6].value;
    const trendKey=previous===0?"trendNoBaseline":recent===previous?"trendNoChange":recent>previous?"trendUp":"trendDown";
    setText("trend-summary",interpolate(tr(trendKey),{pct:previous?Math.round(Math.abs((recent-previous)/previous)*100):0}));
    state.charts.trend=new Chart(el("trend-chart"),{type:"line",data:{labels:trendLabels.map((item)=>item.label),datasets:[{data:trendLabels.map((item)=>item.value),borderColor:"#72d7b0",backgroundColor:"rgba(114,215,176,.12)",fill:true,tension:.3,pointRadius:2.5,pointBackgroundColor:"#72d7b0",borderWidth:2}]},options:baseOptions});
    const categories=Object.entries(state.data.categories).map(([id,name])=>({id,label:localized(name),count:incidents.filter((item)=>item.category===id).length})).filter((item)=>item.count||state.category==="all");
    state.charts.category=new Chart(el("category-chart"),{type:"bar",data:{labels:categories.map((item)=>item.label),datasets:[{data:categories.map((item)=>item.count),backgroundColor:categories.map((item,index)=>state.data.categories[item.id].color||CATEGORY_COLORS[index%CATEGORY_COLORS.length]),borderRadius:3,maxBarThickness:22}]},options:{...baseOptions,indexAxis:"y",scales:{x:{beginAtZero:true,ticks:{precision:0,color:axisColor,font:{size:9}},grid:{color:"#2b393d"},border:{display:false}},y:{grid:{display:false},ticks:{color:"#b7c5c1",font:{size:9}},border:{color:"#344347"}}}}});
    const districts=getDistrictStats(incidents);
    state.charts.district=new Chart(el("district-chart"),{type:"bar",data:{labels:districts.map((item)=>localized(item.district.name)),datasets:[{data:districts.map((item)=>item.count),backgroundColor:districts.map((item)=>item.district.id===state.selectedDistrict?"#efb765":"#73aee6"),borderRadius:3,maxBarThickness:24}]},options:{...baseOptions,indexAxis:"y",onClick:(_event,elements)=>{
      if(elements.length){state.selectedDistrict=districts[elements[0].index].district.id;fillFilters();render();}
    },scales:{x:{beginAtZero:true,ticks:{precision:0,color:axisColor,font:{size:9}},grid:{color:"#2b393d"},border:{display:false}},y:{grid:{display:false},ticks:{color:"#b7c5c1",font:{size:9}},border:{color:"#344347"}}}}});
  }

  function renderMap(incidents) {
    if(!state.map) return;
    const showDistricts=el("map-section").querySelector('[data-layer="districts"]').checked;
    const showIncidents=el("map-section").querySelector('[data-layer="incidents"]').checked;
    if(state.layers.districts) {
      if(showDistricts) state.layers.districts.addTo(state.map); else state.map.removeLayer(state.layers.districts);
      state.layers.districts.eachLayer((layer)=>{
        const selected=layer.feature.properties.id===state.selectedDistrict;
        layer.setStyle({color:selected?"#f2c877":"#90b9a7",weight:selected?2.5:1.3,fillColor:selected?"#e8b85b":"#72d7b0",fillOpacity:selected ? .19 : .075,dashArray:"4 4"});
        layer.setTooltipContent(state.lang==="ar"?layer.feature.properties.name_ar:layer.feature.properties.name_en);
      });
    }
    if(state.layers.incidents) {
      state.map.removeLayer(state.layers.incidents);
      state.layers.incidents.clearLayers();
      if(showIncidents) {
        incidents.forEach((item)=>{
          const category=state.data.categories[item.category];
          const marker=L.circleMarker([item.latitude,item.longitude],{radius:item.severity==="high"?7:item.severity==="medium"?6:5,weight:2,color:category?.color||"#d5e0dd",fillColor:SEVERITY_COLORS[item.severity],fillOpacity:.92});
          const statusKey=`status${item.status[0].toUpperCase()}${item.status.slice(1)}`;
          marker.bindPopup(`<div class="popup-title">${esc(tr("incident"))} ${esc(item.id)} · ${esc(categoryName(item.category))}</div><div class="popup-meta">${esc(tr("districtLabel"))}: ${esc(districtName(item.district))}<br>${esc(tr("typeLabel"))}: ${esc(categoryName(item.category))}<br>${esc(tr("severityLabel"))}: ${esc(tr(item.severity))}<br>${esc(tr("statusLabel"))}: ${esc(tr(statusKey))}<br>${esc(tr("dateLabel"))}: ${esc(formatDate(item.date))}<br>${esc(item.simulated?tr("simulatedRecord"):tr("importedRecord"))}</div>`);
          state.layers.incidents.addLayer(marker);
        });
        state.layers.incidents.addTo(state.map);
      }
    }
    if(state.selectedDistrict!==state.lastMapDistrict) {
      if(state.selectedDistrict!=="all") {
        const feature=state.geojson.features.find((item)=>item.properties.id===state.selectedDistrict);
        if(feature) state.map.fitBounds(L.geoJSON(feature).getBounds(),{padding:[24,24],maxZoom:13});
      } else if(state.lastMapDistrict!==null) {
        state.map.fitBounds(state.layers.districts.getBounds(),{padding:[24,24]});
      } else {
        state.map.fitBounds(state.layers.districts.getBounds(),{padding:[24,24]});
      }
      state.lastMapDistrict=state.selectedDistrict;
    }
  }

  function render() {
    const incidents=activeIncidents();
    updateSummary(incidents);
    renderDistrictTable(incidents);
    renderCharts(incidents);
    renderAssessment(incidents);
    renderMap(incidents);
  }

  function initMap() {
    if(!window.L||!state.geojson) {
      el("map-fallback").hidden=false;el("map").hidden=true;return;
    }
    try {
      state.map=L.map("map",{zoomControl:true,scrollWheelZoom:false}).setView([33.35,44.39],11);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(state.map);
      state.layers.districts=L.geoJSON(state.geojson,{filter:(feature)=>!!feature.properties.illustrative,style:{color:"#90b9a7",weight:1.3,fillColor:"#72d7b0",fillOpacity:.075,dashArray:"4 4"},onEachFeature:(feature,layer)=>{
        layer.bindTooltip(state.lang==="ar"?feature.properties.name_ar:feature.properties.name_en,{permanent:true,direction:"center",className:"district-label"});
        layer.on("click",()=>{state.selectedDistrict=feature.properties.id;fillFilters();render();});
      }});
      state.layers.incidents=window.L.markerClusterGroup?L.markerClusterGroup({showCoverageOnHover:false,spiderfyOnMaxZoom:true,iconCreateFunction:(cluster)=>L.divIcon({html:`<div>${cluster.getChildCount()}</div>`,className:"marker-cluster",iconSize:[34,34]})}):L.layerGroup();
      document.querySelectorAll("[data-layer]").forEach((input)=>input.addEventListener("change",()=>renderMap(activeIncidents())));
      window.setTimeout(()=>state.map.invalidateSize(),120);
    } catch(error) {
      console.error("Map initialization failed",error);
      el("map-fallback").hidden=false;el("map").hidden=true;
    }
  }

  function renderCategoryEditor() {
    const host=el("category-editor");
    host.innerHTML=Object.entries(state.data.categories).map(([id,name])=>`<form class="category-edit-row" data-category="${esc(id)}">
      <code>${esc(id)}</code><label><span>${esc(tr("categoryNameEn"))}</span><input name="en" value="${esc(name.en)}" maxlength="45" required></label>
      <label><span>${esc(tr("categoryNameAr"))}</span><input name="ar" value="${esc(name.ar)}" maxlength="45" required dir="rtl"></label>
      <button class="secondary-button" type="submit">${esc(tr("saveCategory"))}</button>
    </form>`).join("");
    host.querySelectorAll(".category-edit-row").forEach((form)=>form.addEventListener("submit",(event)=>{
      event.preventDefault();
      const fields=new FormData(form);
      const en=String(fields.get("en")).trim(),ar=String(fields.get("ar")).trim();
      if(!en||!ar){showToast(tr("categoryRequired"));return;}
      state.data.categories[form.dataset.category]={...state.data.categories[form.dataset.category],en,ar};
      persistCategories();fillFilters();renderCategoryEditor();render();showToast(tr("categorySaved"));
    }));
  }

  function persistCategories() {
    try { localStorage.setItem("civic-signal-categories",JSON.stringify(state.data.categories)); }
    catch(error) { console.error("Could not save category configuration",error);showToast(error.message); }
  }

  function restoreCategories() {
    try {
      const saved=localStorage.getItem("civic-signal-categories");
      if(!saved) return;
      const categories=JSON.parse(saved);
      if(!categories||typeof categories!=="object"||Array.isArray(categories)) throw new Error("Saved category settings are invalid.");
      Object.entries(categories).forEach(([id,name])=>{
        if(!/^[a-z0-9_]+$/.test(id)||!name||typeof name.en!=="string"||typeof name.ar!=="string"||(name.color!==undefined&&(typeof name.color!=="string"||!/^#[0-9a-f]{6}$/i.test(name.color)))) throw new Error("Saved category settings are invalid.");
      });
      state.data.categories=categories;
    } catch(error) {
      console.error("Could not restore category configuration",error);
      try { localStorage.removeItem("civic-signal-categories"); }
      catch(removeError) { console.error("Could not clear invalid category configuration",removeError); }
    }
  }

  function parseCsv(text) {
    const rows=[];let row=[],field="",quoted=false;
    for(let index=0;index<text.length;index++){
      const char=text[index];
      if(quoted&&char==='"'&&text[index+1]==='"'){field+='"';index++;}
      else if(char==='"') quoted=!quoted;
      else if(char===","&&!quoted){row.push(field);field="";}
      else if((char==="\n"||char==="\r")&&!quoted){
        if(char==="\r"&&text[index+1]==="\n") index++;
        row.push(field);if(row.some((cell)=>cell.trim())) rows.push(row);
        row=[];field="";
      } else field+=char;
    }
    if(quoted) throw new Error(tr("badCsv"));
    if(field.length||row.length){row.push(field);if(row.some((cell)=>cell.trim()))rows.push(row);}
    if(rows.length<2) throw new Error(tr("badCsv"));
    const headers=rows.shift().map((header)=>header.trim().replace(/^\uFEFF/,""));
    if(new Set(headers).size!==headers.length||headers.some((header)=>!REQUIRED_FIELDS.includes(header))||REQUIRED_FIELDS.some((header)=>!headers.includes(header))) throw new Error(`${tr("badCsv")} ${tr("importSchema")}`);
    return rows.map((cells,index)=>{
      if(cells.length!==headers.length) throw new Error(interpolate(tr("rowInvalid"),{row:index+2,reason:tr("badCsv")}));
      return Object.fromEntries(headers.map((header,column)=>[header,cells[column].trim()]));
    });
  }

  function parseGeoJson(text) {
    let document;
    try { document=JSON.parse(text); } catch(_error) { throw new Error(tr("geojsonInvalid")); }
    if(document?.type!=="FeatureCollection"||!Array.isArray(document.features)) throw new Error(tr("geojsonInvalid"));
    return document.features.map((feature,index)=>{
      if(feature?.type!=="Feature"||feature.geometry?.type!=="Point"||!Array.isArray(feature.geometry.coordinates)||feature.geometry.coordinates.length<2) throw new Error(interpolate(tr("rowInvalid"),{row:index+1,reason:tr("geojsonInvalid")}));
      const properties=feature.properties||{};
      return {...properties,latitude:feature.geometry.coordinates[1],longitude:feature.geometry.coordinates[0]};
    });
  }

  function importSuccessMessage(count) {
    return state.lang==="en"
      ? `Validated and imported ${count} incident record${count===1?"":"s"}.`
      : `تم التحقق واستيراد ${count} سجل حادثة.`;
  }

  async function importFile() {
    const file=el("data-file").files[0];
    if(!file){setImportStatus(tr("chooseFileError"),true);return;}
    try {
      const text=await file.text();
      const records=/\.csv$/i.test(file.name)||file.type==="text/csv"?parseCsv(text):parseGeoJson(text);
      const base=el("import-mode").value==="replace"?[]:state.data.incidents;
      const ids=new Set(base.map((item)=>item.id));
      const validated=records.map((record,index)=>{
        try { return validateIncident(record,index,ids); }
        catch(error) { throw new Error(interpolate(tr("rowInvalid"),{row:index+1,reason:error.message})); }
      });
      if(!validated.length) throw new Error("The file has no incident records.");
      state.data.incidents=[...base,...validated];
      state.loadedSource="imported";
      el("data-file").value="";
      setImportStatus(importSuccessMessage(validated.length),false);
      fillFilters();render();showToast(importSuccessMessage(validated.length));
    } catch(error) {
      console.error("Incident import rejected",error);
      setImportStatus(interpolate(tr("importError"),{reason:error.message}),true);
    }
  }

  function setImportStatus(message,isError) {
    const node=el("import-status");
    node.textContent=message;
    node.classList.toggle("error",isError);
    node.classList.toggle("success",!isError);
  }

  function addCategory(event) {
    event.preventDefault();
    const en=el("new-category-en").value.trim(),ar=el("new-category-ar").value.trim();
    if(!en||!ar){showToast(tr("categoryRequired"));return;}
    const slug=en.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"");
    const id=`custom_${slug||"category"}`;
    if(Object.hasOwn(state.data.categories,id)){showToast(tr("categoryExists"));return;}
    state.data.categories[id]={en,ar,color:CATEGORY_COLORS[Object.keys(state.data.categories).length%CATEGORY_COLORS.length]};
    persistCategories();el("add-category-form").reset();fillFilters();renderCategoryEditor();render();showToast(tr("categoryAdded"));
  }

  function bindControls() {
    el("language-toggle").addEventListener("click",()=>{state.lang=state.lang==="en"?"ar":"en";applyLanguage();});
    el("district-filter").addEventListener("change",(event)=>{state.selectedDistrict=event.target.value;render();});
    el("period-filter").addEventListener("change",(event)=>{state.period=event.target.value;render();});
    el("category-filter").addEventListener("change",(event)=>{state.category=event.target.value;render();});
    el("severity-filter").addEventListener("change",(event)=>{state.severity=event.target.value;render();});
    el("date-from").addEventListener("change",(event)=>{
      const value=event.target.value;
      if(value&&state.to&&value>state.to){event.target.value=state.from;showToast(tr("dateInvalid"));return;}
      state.from=value;render();
    });
    el("date-to").addEventListener("change",(event)=>{
      const value=event.target.value;
      if(state.from&&value&&state.from>value){event.target.value=state.to;showToast(tr("dateInvalid"));return;}
      state.to=value;render();
    });
    el("district-search").addEventListener("input",(event)=>{state.query=event.target.value;renderDistrictTable(activeIncidents());});
    el("sort-select").addEventListener("change",(event)=>{state.sort=event.target.value;renderDistrictTable(activeIncidents());});
    el("import-button").addEventListener("click",importFile);
    el("reset-data").addEventListener("click",()=>{
      state.data=structuredClone(state.defaultData);restoreCategories();state.loadedSource="simulated";state.selectedDistrict="all";state.period="all";state.category="all";state.severity="all";state.from="";state.to="";
      el("date-from").value="";el("date-to").value="";el("period-filter").value="all";el("severity-filter").value="all";
      setImportStatus(interpolate(tr("dataLoaded"),{count:state.data.incidents.length}),false);fillFilters();renderCategoryEditor();render();showToast(tr("simulatedBadge"));
    });
    el("add-category-form").addEventListener("submit",addCategory);
    el("notice").querySelector(".notice-close").addEventListener("click",()=>el("notice").remove());
  }

  async function start() {
    bindControls();applyLanguage();
    try {
      const [dataResponse,geoResponse]=await Promise.all([fetch("data/demo-data.json"),fetch("data/districts.geojson")]);
      if(!dataResponse.ok||!geoResponse.ok) throw new Error("Could not load data/demo-data.json or data/districts.geojson.");
      const [data,geojson]=await Promise.all([dataResponse.json(),geoResponse.json()]);
      if(!Array.isArray(data.districts)||!data.categories||!Array.isArray(data.incidents)||geojson?.type!=="FeatureCollection"||!Array.isArray(geojson.features)) throw new Error("Local demo data has an invalid format.");
      state.data=data;state.defaultData=structuredClone(data);state.geojson=geojson;
      restoreCategories();
      const ids=new Set();
      state.data.incidents=state.data.incidents.map((record,index)=>validateIncident(record,index,ids));
      fillFilters();renderCategoryEditor();initMap();render();applyLanguage();
      setText("copyright-year",String(new Date().getFullYear()));
      setImportStatus(interpolate(tr("dataLoaded"),{count:state.data.incidents.length}),false);
    } catch(error) {
      console.error("Dashboard initialization failed",error);
      setImportStatus(error.message,true);
      el("district-table").innerHTML=`<tr><td colspan="7" class="empty-state">${esc(error.message)}</td></tr>`;
      el("map-fallback").hidden=false;el("map").hidden=true;
      el("map-fallback").querySelector("p").textContent="Start the local server with python -m http.server 8000 and confirm the data files are present.";
    }
  }

  document.addEventListener("DOMContentLoaded",start);
})();
