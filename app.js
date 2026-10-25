(() => {
  "use strict";

  const translations = {
    en: {
      brandSub:"Republic of Iraq · Baghdad",unofficialBrand:"Unofficial illustrative dashboard",workspace:"WORKSPACE",overview:"Overview",mapNav:"Incident map",districts:"District analysis",dataNav:"Data tools",
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
      patternWatch:"تحليل الأنماط",weeklyTrend:"اتجاه الحوادث بمرور الوقت",simulatedCount:"أعداد افتراضية",chartUnavailable:"مكتبة الرسوم غير متاحة؛ ما زالت السجلات معروضة.",trendCaveat:"عينة خيالية صغيرة فقط؛ لا تشير إلى خطر فعلي أو مستوى السلامة.",distribution:"توزيع الفئات",incidentsByCategory:"الحوادث حسب الفئة",categoryCaveat:"تعرض الأعداد السجلات المحملة فقط.",districtComparison:"مقارنة المناطق",incidentsByDistrict:"الحوادث حسب المنطقة",districtChartCaveat:"اختر منطقة لتصفية الخريطة والرسوم الأخرى.",
      searchPlaceholder:"ابحث عن منطقة…",sortName:"ترتيب: الاسم",sortCount:"ترتيب: الأكثر حوادث",sortLowest:"ترتيب: الأقل حوادث",sortTrend:"ترتيب: الاتجاه الحديث",districtSnapshot:"تحليل المناطق",thDistrict:"المنطقة",thSampleCount:"السجلات",thHigh:"مرتفعة",thMedium:"متوسطة",thLow:"منخفضة",thTrend:"تغير ٧ أيام",thPriority:"التقييم",relativeOnly:"المقارنات النسبية ضمن بيانات المحاكاة وليست معدلات أو درجات سلامة.",none:"لا توجد مناطق مطابقة.",up:"ارتفاع",down:"انخفاض",flat:"مستقر",insufficient:"سجل غير كافٍ",trendNoChange:"لا يوجد تغير ملحوظ ضمن هذه العينة.",trendNoBaseline:"لا توجد سجلات كافية لمقارنة ٧ أيام.",trendUp:"السجلات الافتراضية أعلى بنسبة {pct}٪ من الأيام السبعة السابقة.",trendDown:"السجلات الافتراضية أقل بنسبة {pct}٪ من الأيام السبعة السابقة.",
      planningContext:"دعم القرار",assessmentTitle:"أولويات التقييم",notOperational:"غير تشغيلي",priorityHigh:"مرتفع · تقييم إضافي",priorityMedium:"متوسط · مراجعة الأنماط",priorityRoutine:"متابعة اعتيادية",priorityHighReason:"سجلات متعددة عالية الشدة واتجاه حديث متزايد؛ تحقق من المصدر والسياق. الأعداد وحدها لا تدل على ظروف غير آمنة.",priorityMediumReason:"يستدعي مزيج الشدة أو الزيادة الحديثة مراجعة جودة البيانات وسياق الخدمات.",priorityRoutineReason:"لا توجد إشارة مركبة في هذه البيانات المحدودة. وهذا لا يثبت السلامة.",noCoverage:"لم تتوفر بيانات مجمعة عن تغطية الخدمات؛ لا يمكن مقارنة توفر الموارد.",coverageProvided:"تتوفر بيانات مجمعة عن تغطية الخدمات للمقارنة.",coverageUnknown:"لم يتوفر عدد تغطية خاص بهذه المنطقة.",coverageForDistrict:"العدد المجمع المبلغ عنه: {count}. لا يقيس ذلك التوفر أو الكفاية.",recommendationDisclaimer:"المؤشرات للتقييم الإضافي فقط بناءً على السجلات المحملة. لا تثبت أعداد الحوادث وحدها أن المنطقة غير آمنة ولا تبرر إجراءً ضد أشخاص.",loadingRecommendations:"جارٍ تحميل سياق التقييم…",
      dataTools:"حوكمة البيانات",importTitle:"استيراد بيانات الحوادث محلياً",importHelp:"استورد ملفات جداول أو بيانات جغرافية مصرحاً بها ومنزوعة الهوية. تبقى البيانات في جلسة المتصفح؛ استخدم إحداثيات عامة أو مجمعة قبل المشاركة.",chooseFile:"اختيار ملف للاستيراد",importButton:"تحقق واستورد",resetDemo:"إعادة بيانات المحاكاة",importSchema:"الحقول المطلوبة: المعرّف والتاريخ والمنطقة والفئة والشدة والحالة وخط العرض وخط الطول. يجب أن تتطابق أسماء الأعمدة البرمجية مع النموذج أدناه.",csvFormatTitle:"أعمدة الملف الجدولي",geojsonFormatTitle:"بيانات جغرافية بصيغة جيوجيسون",privacyNote:"لا تستورد معرّفات شخصية أو تفاصيل تشغيلية حساسة أو مواقع انتشار دقيقة أو سجلات سرية. لا يحتوي هذا التطبيق الثابت على مصادقة أو سجل تدقيق أو تخزين آمن.",appendMode:"إضافة إلى البيانات الحالية",replaceMode:"استبدال الحوادث الحالية",importSuccess:"تم التحقق واستيراد {count} سجل حادثة.",importError:"تعذر الاستيراد: {reason}",chooseFileError:"اختر ملفاً للاستيراد أولاً.",emptyImport:"الملف لا يحتوي على سجلات حوادث.",duplicateId:"معرّف حادثة مكرر: {id}",dateInvalid:"أدخل تاريخاً صحيحاً بالتنسيق سنة-شهر-يوم.",districtInvalid:"المنطقة غير معروفة: {district}",categoryInvalid:"الفئة غير معروفة: {category}",severityInvalid:"يجب أن تكون الشدة منخفضة أو متوسطة أو مرتفعة.",statusInvalid:"الحالة يجب أن تكون مفتوحة أو قيد المراجعة أو تمت المعالجة أو مغلقة.",coordinatesInvalid:"الإحداثيات خارج النطاق الصحيح لخطوط العرض والطول.",missingFields:"حقول مطلوبة مفقودة: {fields}.",rowInvalid:"سجل غير صالح في الصف أو المعلم رقم {row}: {reason}",badCsv:"يجب أن يحتوي الملف الجدولي على صف عناوين وحقول مقتبسة بشكل صحيح.",geojsonInvalid:"يجب أن تكون البيانات الجغرافية مجموعة معالم من نوع نقطة.",dataLoaded:"تم تحميل {count} سجلاً افتراضياً للمحاكاة.",dataLoadError:"تعذر تحميل ملفات البيانات المحلية. تحقق من تشغيل الخادم ووجود ملفات البيانات.",dataInvalid:"تنسيق ملفات البيانات المحلية غير صالح.",incidentIdInvalid:"يجب أن يتكون معرّف الحادثة من حرف واحد إلى ٨٠ حرفاً.",importedBadge:"بيانات مستوردة",simulatedBadge:"بيانات محاكاة",mixedBadge:"بيانات محاكاة ومستورد",statusOpen:"مفتوح",statusInvestigating:"قيد المراجعة",statusResolved:"تمت المعالجة",statusClosed:"مغلق",simulatedRecord:"سجل محاكاة",importedRecord:"سجل مستورد",incident:"حادثة",districtLabel:"المنطقة",typeLabel:"الفئة",severityLabel:"الشدة",statusLabel:"الحالة",dateLabel:"التاريخ",
      categorySettings:"الإعدادات",manageCategories:"إدارة فئات الحوادث",categoryAdminHelp:"عدّل التسميات أو أضف فئة. تُستخدم المعرّفات البرمجية في الملفات المستوردة، وتُحفظ الفئات المخصصة في هذا المتصفح.",categoryEnglishPlaceholder:"اسم الفئة باللغة الإنجليزية",categoryArabicPlaceholder:"اسم الفئة باللغة العربية",addCategory:"إضافة فئة",saveCategory:"حفظ",categorySaved:"تم حفظ تسميات الفئة.",categoryAdded:"تمت إضافة الفئة.",categoryExists:"معرّف الفئة موجود بالفعل.",categoryRequired:"أدخل اسمي الفئة بالإنجليزية والعربية.",categoryFallback:"حوادث أخرى مبلغ عنها",categoryNameEn:"الاسم باللغة الإنجليزية",categoryNameAr:"الاسم باللغة العربية",
      demoFooter:"عرض توضيحي ببيانات محاكاة",footerNote:"خريطة الشارع المفتوحة · سجلات افتراضية",dismiss:"إخفاء التنبيه",districtDetail:"تفصيل الفئات",severityBreakdown:"تفصيل الشدة",noRecords:"لا توجد سجلات تطابق عوامل التصفية الحالية.",categoryCount:"{count} سجلاً",selectDistrictTip:"اختر منطقة لعرض تفصيل الفئات والشدة."
    }
  };

  const CATEGORY_COLORS = ["#72d7b0","#73aee6","#efb765","#f27d72","#c78ce3","#5bc0be","#e685b5","#9bad68","#d89562","#8fabe8"];
  const managementTranslations = {
    en: {
      mapType:"Map type",streetMap:"Street map",satelliteMap:"Satellite imagery",densityMap:"Incident density by district",districtStatsMap:"District statistics",trainingMap:"Fictional military-style training map",trainingCaveat:"Fictional training visualization · contours and grid are illustrative, not real terrain or operational information.",trainingStatus:"FICTIONAL TRAINING MAP · ILLUSTRATIVE ONLY",
      incidentManagement:"Incident management",addIncidentTitle:"Add incident",localOnly:"Stored in this browser",incidentPrivacy:"Use fictional data only. Do not enter names, personal identifiers, or operational details.",
      latitudeLabel:"Latitude (optional)",longitudeLabel:"Longitude (optional)",coordinateHelp:"If coordinates are blank, the map shows a generalized district-center marker.",approxDistrictLocation:"Approximate district-center marker; no coordinates were provided.",descriptionLabel:"Short description (optional)",saveIncident:"Save incident",updateIncident:"Update incident",cancelEdit:"Cancel edit",
      searchIncidents:"Search records",allStatuses:"All statuses",actions:"Actions",edit:"Edit",delete:"Delete",noIncidentRows:"No records match these filters.",incidentSaved:"Incident saved in this browser.",incidentUpdated:"Incident updated.",incidentDeleted:"Incident deleted.",confirmDelete:"Delete this incident record?",editMissing:"The incident being edited no longer exists.",
      descriptionTooLong:"Keep the description under 240 characters.",coordinatePair:"Enter both coordinates or leave both blank.",coordinateInvalid:"Enter valid latitude and longitude values.",duplicateIncident:"An incident with this ID already exists.",templateError:"Excel template library is unavailable.",previewImport:"Preview and validate file",confirmImport:"Import valid preview rows",downloadTemplate:"Download Excel template",previewTitle:"Import preview",validRows:"Valid rows",invalidRows:"Invalid rows",previewNoValid:"No valid rows to import.",previewMore:"Additional rows are available in the file.",previewSuccess:"Imported {count} valid records; invalid rows were skipped.",fileTypeError:"Choose an .xlsx, .csv, or GeoJSON file.",invalidRowSummary:"Row {row}: {reason}",rowLabel:"Row",
      weeklyTrend:"Monthly incident trends",trendNoChange:"No change from the previous month in these records.",trendNoBaseline:"Not enough records for a previous-month comparison.",trendUp:"Records are {pct}% higher than the previous month in this sample.",trendDown:"Records are {pct}% lower than the previous month in this sample.",chooseFile:"Choose XLSX / CSV / GeoJSON",importSchema:"Required: id, date, district, category, severity, status. Coordinates and description are optional.",
      importHelp:"Import fictional, de-identified XLSX, CSV, or GeoJSON files. Records are stored only in this browser and are not uploaded or shared. Use generalized coordinates.",footerNote:"OpenStreetMap and Esri maps · fictional sample records",
      uploaded:"Imported",simulated:"Simulated",mapDensityLegend:"Larger circles indicate more records in this simulated dataset.",mapStatsLegend:"Area color represents filtered record counts only.",mapTrainingLegend:"Decorative contours and coordinate grid are fictional, not real terrain or operational information.",mapStreetLegend:"Marker outline indicates category; fill indicates severity.",mapSatelliteAttribution:"Imagery © Esri and its contributors",statusFilter:"Status",localSaveError:"Could not save browser-local records: {reason}",localRestoreError:"Saved browser records could not be loaded; the fictional demo data remains available.",dateFuture:"Incident dates cannot be in the future.",memoryOnly:"Changed for this page only; browser storage was unavailable."
    },
    ar: {
      mapType:"نوع الخريطة",streetMap:"خريطة الشوارع",satelliteMap:"صور الأقمار الصناعية",densityMap:"كثافة السجلات حسب المنطقة",districtStatsMap:"إحصاءات المناطق",trainingMap:"خريطة عسكرية تدريبية (خيالية)",trainingCaveat:"تصميم تدريبي خيالي · الخطوط والشبكة توضيحية ولا تمثل تضاريس أو معلومات تشغيلية حقيقية.",trainingStatus:"خريطة تدريبية خيالية · عناصر توضيحية فقط",
      incidentManagement:"إدارة السجلات",addIncidentTitle:"إضافة حادثة",localOnly:"محفوظ في هذا المتصفح",incidentPrivacy:"استخدم بيانات خيالية فقط. لا تدخل أسماء أو معرّفات شخصية أو تفاصيل تشغيلية.",
      latitudeLabel:"خط العرض (اختياري)",longitudeLabel:"خط الطول (اختياري)",coordinateHelp:"إذا تُركت الإحداثيات فارغة، تظهر علامة تقريبية في مركز المنطقة.",approxDistrictLocation:"علامة تقريبية لمركز المنطقة؛ لم تُدخل إحداثيات.",descriptionLabel:"وصف مختصر (اختياري)",saveIncident:"حفظ الحادثة",updateIncident:"تحديث الحادثة",cancelEdit:"إلغاء التعديل",
      searchIncidents:"بحث في السجلات",allStatuses:"كل الحالات",actions:"الإجراءات",edit:"تعديل",delete:"حذف",noIncidentRows:"لا توجد سجلات مطابقة لهذه المرشحات.",incidentSaved:"حُفظت الحادثة في هذا المتصفح.",incidentUpdated:"تم تحديث الحادثة.",incidentDeleted:"تم حذف الحادثة.",confirmDelete:"هل تريد حذف سجل هذه الحادثة؟",editMissing:"لم يعد سجل الحادثة قيد التعديل موجوداً.",
      descriptionTooLong:"اجعل الوصف أقصر من ٢٤٠ حرفاً.",coordinatePair:"أدخل الإحداثيين معاً أو اتركهما فارغين.",coordinateInvalid:"أدخل خط عرض وخط طول صالحين.",duplicateIncident:"يوجد سجل آخر بهذا المعرّف.",templateError:"مكتبة قالب Excel غير متاحة.",previewImport:"معاينة الملف والتحقق",confirmImport:"استيراد السجلات الصالحة",downloadTemplate:"تنزيل قالب Excel",previewTitle:"معاينة الاستيراد",validRows:"السجلات الصالحة",invalidRows:"السجلات غير الصالحة",previewNoValid:"لا توجد سجلات صالحة للاستيراد.",previewMore:"توجد سجلات إضافية في الملف.",previewSuccess:"تم استيراد {count} سجل صالح وتجاوز السجلات غير الصالحة.",fileTypeError:"اختر ملف Excel أو CSV أو GeoJSON.",invalidRowSummary:"السطر {row}: {reason}",rowLabel:"السطر",
      weeklyTrend:"اتجاه الحوادث شهرياً",trendNoChange:"لم يتغير عدد السجلات مقارنة بالشهر السابق.",trendNoBaseline:"لا توجد سجلات كافية للمقارنة بالشهر السابق.",trendUp:"زادت السجلات بنسبة {pct}% مقارنة بالشهر السابق في هذه العينة.",trendDown:"انخفضت السجلات بنسبة {pct}% مقارنة بالشهر السابق في هذه العينة.",chooseFile:"اختيار ملف Excel أو CSV أو GeoJSON",importSchema:"الحقول المطلوبة: المعرّف والتاريخ والمنطقة والفئة والشدة والحالة. الإحداثيات والوصف اختياريان.",
      importHelp:"استورد ملفات Excel أو CSV أو GeoJSON خيالية ومنزوعة الهوية. تُحفظ السجلات في هذا المتصفح فقط ولا تُرفع أو تُشارك. استخدم إحداثيات عامة.",footerNote:"خرائط OpenStreetMap وEsri · سجلات خيالية",
      uploaded:"مستوردة",simulated:"محاكاة",mapDensityLegend:"حجم الدائرة يوضح عدد السجلات في مجموعة البيانات الخيالية.",mapStatsLegend:"لون المنطقة يمثل عدد السجلات المفلترة فقط.",mapTrainingLegend:"الخطوط والشبكة زخرفية وخيالية، ولا تمثل تضاريس أو معلومات تشغيلية حقيقية.",mapStreetLegend:"إطار العلامة يوضح الفئة؛ واللون يوضح الشدة.",mapSatelliteAttribution:"صور الأقمار الصناعية © Esri والمساهمون",statusFilter:"الحالة",localSaveError:"تعذر حفظ السجلات محلياً: {reason}",localRestoreError:"تعذر تحميل السجلات المحفوظة؛ ستبقى بيانات العرض الخيالية متاحة.",dateFuture:"لا يمكن أن يكون تاريخ الحادثة في المستقبل.",memoryOnly:"تغييرات هذه الصفحة فقط؛ تعذر استخدام التخزين المحلي في المتصفح."
    }
  };
  const SEVERITY_COLORS = {low:"#72d7b0",medium:"#efb765",high:"#f27d72"};
  const VALID_STATUSES = new Set(["open","investigating","resolved","closed"]);
  const REQUIRED_FIELDS = ["id","date","district","category","severity","status"];
  const IMPORT_FIELDS = [...REQUIRED_FIELDS,"latitude","longitude","description"];
  const state = {
    lang:"ar", data:null, defaultData:null, geojson:null, map:null, layers:{}, charts:{}, importPreview:null,
    selectedDistrict:"all", lastMapDistrict:null, period:"all", category:"all", severity:"all", from:"", to:"",
    query:"", sort:"name", loadedSource:"simulated", importMode:"append", incidentQuery:"", incidentStatus:"all", mapType:"street"
  };
  const el = (id) => document.getElementById(id);
  const tr = (key) => managementTranslations[state.lang]?.[key] || managementTranslations.en[key] || translations[state.lang][key] || translations.en[key] || key;
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const localized = (value) => value && (value[state.lang] || value.en) || "";
  const districtById = (id) => state.data.districts.find((district) => district.id === id);
  const districtName = (id) => localized(districtById(id)?.name) || id;
  const categoryName = (id) => localized(state.data.categories[id]) || id;
  const secondaryName = (names) => state.lang==="ar"?"":names?.ar || "";
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
    document.title=state.lang==="ar"?"بغداد | لوحة تحليل الحوادث الأمنية":"Baghdad | Security Intelligence Dashboard";
    document.querySelectorAll("[data-i18n]").forEach((node)=>{
      const value=tr(node.dataset.i18n);
      if(node.dataset.i18n==="notice") node.innerHTML=value;
      else node.textContent=value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node)=>node.placeholder=tr(node.dataset.i18nPlaceholder));
    const mapTypes={street:tr("streetMap"),satellite:tr("satelliteMap"),density:tr("densityMap"),stats:tr("districtStatsMap"),training:tr("trainingMap")};
    Object.entries(mapTypes).forEach(([value,label])=>{const option=el("map-type-filter").querySelector(`option[value="${value}"]`);if(option)option.textContent=label;});
    el("language-toggle").innerHTML=state.lang==="en"?'العربية <span>↗</span>':'الإنجليزية <span>↗</span>';
    el("language-toggle").setAttribute("aria-label",state.lang==="en"?"التبديل إلى العربية":"التبديل إلى الإنجليزية");
    document.querySelector("nav").setAttribute("aria-label",state.lang==="en"?"Main navigation":"التنقل الرئيسي");
    el("district-filter").setAttribute("aria-label",tr("district"));
    el("period-filter").setAttribute("aria-label",tr("period"));
    el("category-filter").setAttribute("aria-label",tr("category"));
    el("severity-filter").setAttribute("aria-label",tr("severity"));
    el("date-from").setAttribute("aria-label",tr("fromDate"));
    el("date-to").setAttribute("aria-label",tr("toDate"));
    el("sort-select").setAttribute("aria-label",tr("districtComparison"));
    el("district-search").setAttribute("aria-label",tr("searchPlaceholder"));
    el("map-type-filter").setAttribute("aria-label",tr("mapType"));
    el("incident-search").setAttribute("aria-label",tr("searchIncidents"));
    el("incident-status-filter").setAttribute("aria-label",tr("statusFilter"));
    el("incident-form").querySelector('[type="submit"]').textContent=tr(el("incident-edit-id").value?"updateIncident":"saveIncident");
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
      "import-mode":{"append":tr("appendMode"),"replace":tr("replaceMode")},
      "incident-status-filter":{"all":tr("allStatuses"),"open":tr("statusOpen"),"investigating":tr("statusInvestigating"),"resolved":tr("statusResolved"),"closed":tr("statusClosed")},
      "incident-severity":{"low":tr("low"),"medium":tr("medium"),"high":tr("high")}
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
    const latitudeEmpty=raw.latitude===undefined||String(raw.latitude).trim()==="";
    const longitudeEmpty=raw.longitude===undefined||String(raw.longitude).trim()==="";
    if(latitudeEmpty!==longitudeEmpty) throw new Error(tr("coordinatePair"));
    const latitude=latitudeEmpty?null:Number(raw.latitude),longitude=longitudeEmpty?null:Number(raw.longitude);
    const description=String(raw.description??"").trim();
    if(description.length>240) throw new Error(tr("descriptionTooLong"));
    const incident={
      id:String(raw.id).trim(),date:String(raw.date).trim(),district:String(raw.district).trim(),
      category:String(raw.category).trim(),severity:String(raw.severity).trim().toLowerCase(),
      status:String(raw.status).trim().toLowerCase(),latitude,longitude,description,
      simulated:raw.simulated===true
    };
    if(!incident.id||incident.id.length>80) throw new Error(tr("incidentIdInvalid"));
    if(existingIds.has(incident.id)) throw new Error(interpolate(tr("duplicateId"),{id:incident.id}));
    if(!validDate(incident.date)) throw new Error(tr("dateInvalid"));
    if(incident.date>todayISO()) throw new Error(tr("dateFuture"));
    if(!districtById(incident.district)) throw new Error(interpolate(tr("districtInvalid"),{district:incident.district}));
    if(!Object.hasOwn(state.data.categories,incident.category)) throw new Error(interpolate(tr("categoryInvalid"),{category:incident.category}));
    if(!["low","medium","high"].includes(incident.severity)) throw new Error(tr("severityInvalid"));
    if(!VALID_STATUSES.has(incident.status)) throw new Error(tr("statusInvalid"));
    if((incident.latitude!==null||incident.longitude!==null)&&(!Number.isFinite(incident.latitude)||!Number.isFinite(incident.longitude)||incident.latitude < -90||incident.latitude > 90||incident.longitude < -180||incident.longitude > 180)) throw new Error(tr("coordinatesInvalid"));
    existingIds.add(incident.id);
    return incident;
  }

  function activeIncidents() {
    if(!state.data) return [];
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
    el("incident-category").innerHTML=Object.entries(state.data.categories).map(([id,name])=>`<option value="${esc(id)}">${esc(localized(name))}</option>`).join("");
    el("incident-district").innerHTML=state.data.districts.map((item)=>`<option value="${esc(item.id)}">${esc(localized(item.name))}</option>`).join("");
    el("period-filter").value=state.period;
    el("severity-filter").value=state.severity;
    renderCategoryLegend();
    el("incident-date").max=todayISO();
    updateMapModeLegend();
  }

  function updateMapModeLegend() {
    const key=state.mapType==="density"?"mapDensityLegend":state.mapType==="training"?"mapTrainingLegend":state.mapType==="stats"?"mapStatsLegend":"mapStreetLegend";
    setText("map-mode-legend",tr(key));
    el("map-training-caveat").hidden=state.mapType!=="training";
    setText("map-status-label",state.mapType==="training"?tr("trainingStatus"):tr("sampleMap"));
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
    if(!state.data) return;
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
      const primaryName=localized(item.district.name);
      const alternateName=secondaryName(item.district.name);
      return `<tr class="district-row${active}" data-district-row="${esc(item.district.id)}" tabindex="0" aria-label="${esc(primaryName)}">
        <td><span class="district-name"><i class="district-marker"></i><span><strong>${esc(primaryName)}</strong>${alternateName?`<small lang="ar" dir="rtl">${esc(alternateName)}</small>`:""}</span></span></td>
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
    setText("table-count",state.lang==="ar"
      ? `${rows.length.toLocaleString(state.lang)} من ${state.data.districts.length.toLocaleString(state.lang)}`
      : `${rows.length.toLocaleString(state.lang)} / ${state.data.districts.length.toLocaleString(state.lang)}`);
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
    const baseOptions={locale:state.lang==="ar"?"ar-IQ":"en-GB",responsive:true,maintainAspectRatio:false,animation:{duration:180},plugins:{legend:{display:false},tooltip:{backgroundColor:"#10191d",titleColor:"#e7eeee",bodyColor:"#bdc9c7",borderColor:"#425457",borderWidth:1}},scales:{x:{grid:{display:false},ticks:{color:axisColor,font:{size:9}},border:{color:"#344347"}},y:{beginAtZero:true,ticks:{precision:0,color:axisColor,font:{size:9}},grid:{color:"#2b393d"},border:{display:false}}}};
    const byMonth=new Map();
    incidents.forEach((item)=>{const key=item.date.slice(0,7);byMonth.set(key,(byMonth.get(key)||0)+1);});
    const currentMonth=new Date(`${todayISO().slice(0,7)}-01T12:00:00Z`);
    const monthFormatter=new Intl.DateTimeFormat(chartText?"ar-IQ":"en-GB",{month:"short",year:"2-digit",timeZone:"UTC"});
    const trendLabels=Array.from({length:12},(_,index)=>{
      const date=new Date(currentMonth);date.setUTCMonth(date.getUTCMonth()-(11-index));
      const key=date.toISOString().slice(0,7);
      return {label:monthFormatter.format(date),value:byMonth.get(key)||0};
    });
    const recent=trendLabels[11].value,previous=trendLabels[10].value;
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
    const counts=new Map(state.data.districts.map((district)=>[district.id,incidents.filter((item)=>item.district===district.id).length]));
    const maxCount=Math.max(1,...counts.values());
    if(state.layers.districts) {
      if(showDistricts) state.layers.districts.addTo(state.map); else state.map.removeLayer(state.layers.districts);
      state.layers.districts.eachLayer((layer)=>{
        const selected=layer.feature.properties.id===state.selectedDistrict;
        const count=counts.get(layer.feature.properties.id)||0;
        const fill=state.mapType==="stats"?(count===0?"#263538":count/maxCount>.66?"#e87668":count/maxCount>.33?"#e8ae5c":"#75c6a2"):"#72d7b0";
        layer.setStyle({color:selected?"#f2c877":"#90b9a7",weight:selected?2.5:1.3,fillColor:selected?"#e8b85b":fill,fillOpacity:state.mapType==="stats"?.62:selected ? .19 : .075,dashArray:"4 4"});
        layer.setTooltipContent(state.lang==="ar"?layer.feature.properties.name_ar:layer.feature.properties.name_en);
      });
    }
    if(state.layers.density) {
      state.layers.density.clearLayers();
      state.map.removeLayer(state.layers.density);
      if(state.mapType==="density"&&showDistricts) state.data.districts.forEach((district)=>{
        const feature=state.geojson.features.find((item)=>item.properties.id===district.id);
        const count=counts.get(district.id)||0;
        if(!feature||!count) return;
        const center=L.geoJSON(feature).getBounds().getCenter();
        const circle=L.circleMarker(center,{radius:7+Math.min(count,16),color:"#ffc46b",weight:1,fillColor:"#ed765f",fillOpacity:.62});
        circle.bindPopup(`<strong>${esc(districtName(district.id))}</strong><br>${esc(tr("incidents"))}: ${count}`);
        state.layers.density.addLayer(circle);
      });
      if(state.mapType==="density"&&showDistricts) state.layers.density.addTo(state.map);
    }
    if(state.layers.grid) {
      if(state.mapType==="training"&&showDistricts) state.layers.grid.addTo(state.map); else state.map.removeLayer(state.layers.grid);
    }
    if(state.layers.contours) {
      if(state.mapType==="training"&&showDistricts) state.layers.contours.addTo(state.map); else state.map.removeLayer(state.layers.contours);
    }
    el("map").classList.toggle("training-map-mode",state.mapType==="training");
    if(state.layers.incidents) {
      state.map.removeLayer(state.layers.incidents);
      state.layers.incidents.clearLayers();
      if(showIncidents&&state.mapType!=="density") {
        incidents.forEach((item)=>{
          const feature=state.geojson.features.find((entry)=>entry.properties.id===item.district);
          const center=feature?L.geoJSON(feature).getBounds().getCenter():null;
          const latitude=item.latitude??center?.lat,longitude=item.longitude??center?.lng;
          if(!Number.isFinite(latitude)||!Number.isFinite(longitude)) return;
          const category=state.data.categories[item.category];
          const marker=L.circleMarker([latitude,longitude],{radius:item.severity==="high"?7:item.severity==="medium"?6:5,weight:2,color:category?.color||"#d5e0dd",fillColor:SEVERITY_COLORS[item.severity],fillOpacity:.92});
          const statusKey=`status${item.status[0].toUpperCase()}${item.status.slice(1)}`;
          marker.bindPopup(`<div class="popup-title">${esc(tr("incident"))} ${esc(item.id)} · ${esc(categoryName(item.category))}</div><div class="popup-meta">${esc(tr("districtLabel"))}: ${esc(districtName(item.district))}<br>${esc(tr("typeLabel"))}: ${esc(categoryName(item.category))}<br>${esc(tr("severityLabel"))}: ${esc(tr(item.severity))}<br>${esc(tr("statusLabel"))}: ${esc(tr(statusKey))}<br>${esc(tr("dateLabel"))}: ${esc(formatDate(item.date))}<br>${esc(item.simulated?tr("simulatedRecord"):tr("importedRecord"))}${item.latitude===null?`<br>${esc(tr("approxDistrictLocation"))}`:""}${item.description?`<br>${esc(item.description)}`:""}</div>`);
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
    if(!state.data) return;
    const incidents=activeIncidents();
    updateSummary(incidents);
    renderIncidentsTable(incidents);
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
      state.map=L.map("map",{zoomControl:true,scrollWheelZoom:false,attributionControl:false}).setView([33.35,44.39],11);
      L.control.attribution({prefix:"خرائط تفاعلية بواسطة ليفليت"}).addTo(state.map);
      state.layers.base={
        street:L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),
        satellite:L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19,attribution:tr("mapSatelliteAttribution")}),
        training:L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{maxZoom:19,attribution:tr("mapSatelliteAttribution")})
      };
      state.layers.base.street.addTo(state.map);
      state.layers.districts=L.geoJSON(state.geojson,{filter:(feature)=>!!feature.properties.illustrative,style:{color:"#90b9a7",weight:1.3,fillColor:"#72d7b0",fillOpacity:.075,dashArray:"4 4"},onEachFeature:(feature,layer)=>{
        layer.bindTooltip(state.lang==="ar"?feature.properties.name_ar:feature.properties.name_en,{permanent:true,direction:"center",className:"district-label"});
        layer.on("click",()=>{state.selectedDistrict=feature.properties.id;fillFilters();render();});
      }});
      state.layers.incidents=window.L.markerClusterGroup?L.markerClusterGroup({showCoverageOnHover:false,spiderfyOnMaxZoom:true,iconCreateFunction:(cluster)=>L.divIcon({html:`<div>${cluster.getChildCount()}</div>`,className:"marker-cluster",iconSize:[34,34]})}):L.layerGroup();
      state.layers.density=L.layerGroup();
      const bounds=state.layers.districts.getBounds();
      const grid=[];const step=.025;
      const minLat=Math.floor(bounds.getSouth()/step)*step,maxLat=Math.ceil(bounds.getNorth()/step)*step;
      const minLng=Math.floor(bounds.getWest()/step)*step,maxLng=Math.ceil(bounds.getEast()/step)*step;
      for(let lat=minLat;lat<=maxLat;lat+=step) grid.push(L.polyline([[lat,minLng],[lat,maxLng]],{color:"#d8c78d",weight:.55,opacity:.35,dashArray:"3 5",interactive:false}));
      for(let lng=minLng;lng<=maxLng;lng+=step) grid.push(L.polyline([[minLat,lng],[maxLat,lng]],{color:"#d8c78d",weight:.55,opacity:.35,dashArray:"3 5",interactive:false}));
      state.layers.grid=L.layerGroup(grid);
      const center=bounds.getCenter(),contours=[];
      for(let ring=1;ring<=5;ring++) {
        const radiusLat=(bounds.getNorth()-bounds.getSouth())*.075*ring;
        const radiusLng=(bounds.getEast()-bounds.getWest())*.075*ring;
        const points=[];
        for(let index=0;index<=120;index++) {
          const angle=index/120*Math.PI*2;
          const variation=1+Math.sin(angle*3+ring)*.07+Math.cos(angle*5-ring)*.035;
          points.push([center.lat+Math.sin(angle)*radiusLat*variation,center.lng+Math.cos(angle)*radiusLng*variation]);
        }
        contours.push(L.polyline(points,{color:ring%2?"#c9bb82":"#83a58b",weight:.9,opacity:.48,dashArray:ring%2?"5 5":null,interactive:false}));
      }
      state.layers.contours=L.layerGroup(contours);
      document.querySelectorAll("[data-layer]").forEach((input)=>input.addEventListener("change",()=>renderMap(activeIncidents())));
      state.mapType=el("map-type-filter").value;
      renderMap(activeIncidents());
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

  function persistIncidents() {
    try {
      localStorage.setItem("baghdad-gis-incidents",JSON.stringify(state.data.incidents));
      return true;
    } catch(error) {
      console.error("Could not save browser-local incident records",error);
      showToast(interpolate(tr("localSaveError"),{reason:error.message}));
      return false;
    }
  }

  function restoreLocalIncidents() {
    try {
      const saved=localStorage.getItem("baghdad-gis-incidents");
      if(!saved) return;
      const records=JSON.parse(saved);
      if(!Array.isArray(records)) throw new Error("Saved incident records are not a list.");
      const ids=new Set();
      state.data.incidents=records.map((record,index)=>validateIncident(record,index,ids));
      state.loadedSource=state.data.incidents.some((record)=>!record.simulated)?"imported":"simulated";
    } catch(error) {
      console.error("Could not restore browser-local incident records",error);
      showToast(tr("localRestoreError"));
    }
  }

  function nextIncidentId() {
    let id;
    do { id=`LOCAL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`; }
    while(state.data.incidents.some((record)=>record.id===id));
    return id;
  }

  function populateIncidentForm(record=null) {
    const form=el("incident-form");
    form.reset();
    el("incident-edit-id").value=record?.id||"";
    el("incident-date").value=record?.date||todayISO();
    el("incident-category").value=record?.category||Object.keys(state.data.categories)[0];
    el("incident-district").value=record?.district||state.data.districts[0].id;
    el("incident-severity").value=record?.severity||"low";
    el("incident-status").value=record?.status||"open";
    el("incident-latitude").value=record?.latitude??"";
    el("incident-longitude").value=record?.longitude??"";
    el("incident-description").value=record?.description||"";
    form.querySelector('[type="submit"]').textContent=tr(record?"updateIncident":"saveIncident");
    el("cancel-edit").hidden=!record;
    form.scrollIntoView({behavior:"smooth",block:"center"});
  }

  function saveIncident(event) {
    event.preventDefault();
    const editingId=el("incident-edit-id").value;
    const raw={
      id:editingId||nextIncidentId(),date:el("incident-date").value,district:el("incident-district").value,
      category:el("incident-category").value,severity:el("incident-severity").value,status:el("incident-status").value,
      latitude:el("incident-latitude").value,longitude:el("incident-longitude").value,description:el("incident-description").value
    };
    try {
      const index=editingId?state.data.incidents.findIndex((record)=>record.id===editingId):-1;
      if(editingId&&index<0) throw new Error(tr("editMissing"));
      const otherIds=new Set(state.data.incidents.filter((record)=>record.id!==editingId).map((record)=>record.id));
      const incident=validateIncident(raw,0,otherIds);
      incident.simulated=false;
      if(index<0) state.data.incidents.unshift(incident);
      else state.data.incidents[index]=incident;
      state.loadedSource="imported";
      const stored=persistIncidents();
      populateIncidentForm();
      render();
      if(stored) showToast(tr(index<0?"incidentSaved":"incidentUpdated"));
    } catch(error) {
      console.error("Incident record was not saved",error);
      showToast(error.message);
    }
  }

  function renderIncidentsTable(incidents) {
    const query=state.incidentQuery.trim().toLocaleLowerCase(state.lang);
    const records=incidents.filter((record)=>
      (state.incidentStatus==="all"||record.status===state.incidentStatus)&&
      (!query||`${record.id} ${record.description} ${districtName(record.district)} ${categoryName(record.category)}`.toLocaleLowerCase(state.lang).includes(query))
    );
    el("incident-list-count").textContent=records.length.toLocaleString(state.lang);
    const body=el("incidents-table");
    if(!records.length) {
      body.innerHTML=`<tr><td colspan="8" class="empty-state">${esc(tr("noIncidentRows"))}</td></tr>`;
      return;
    }
    body.innerHTML=records.map((record)=>`<tr>
      <td><code>${esc(record.id)}</code><small>${esc(record.simulated?tr("simulated"):tr("uploaded"))}</small></td>
      <td>${esc(formatDate(record.date))}</td><td>${esc(districtName(record.district))}</td><td>${esc(categoryName(record.category))}</td>
      <td><span class="severity-pill severity-${esc(record.severity)}">${esc(tr(record.severity))}</span></td>
      <td>${esc(tr(`status${record.status[0].toUpperCase()}${record.status.slice(1)}`))}</td>
      <td class="incident-description-cell">${esc(record.description||"—")}</td>
      <td class="incident-actions"><button type="button" class="secondary-button" data-edit-incident="${esc(record.id)}">${esc(tr("edit"))}</button><button type="button" class="secondary-button danger-button" data-delete-incident="${esc(record.id)}">${esc(tr("delete"))}</button></td>
    </tr>`).join("");
    body.querySelectorAll("[data-edit-incident]").forEach((button)=>button.addEventListener("click",()=>{
      const record=state.data.incidents.find((item)=>item.id===button.dataset.editIncident);
      if(record) populateIncidentForm(record);
    }));
    body.querySelectorAll("[data-delete-incident]").forEach((button)=>button.addEventListener("click",()=>{
      if(!window.confirm(tr("confirmDelete"))) return;
      state.data.incidents=state.data.incidents.filter((record)=>record.id!==button.dataset.deleteIncident);
      const stored=persistIncidents();
      if(el("incident-edit-id").value===button.dataset.deleteIncident) populateIncidentForm();
      render();
      if(stored) showToast(tr("incidentDeleted"));
    }));
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
    if(new Set(headers).size!==headers.length||headers.some((header)=>!IMPORT_FIELDS.includes(header))||REQUIRED_FIELDS.some((header)=>!headers.includes(header))) throw new Error(`${tr("badCsv")} ${tr("importSchema")}`);
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

  function renderImportPreview() {
    const preview=state.importPreview;
    const host=el("import-preview");
    if(!preview) {host.hidden=true;host.innerHTML="";el("confirm-import").disabled=true;return;}
    host.hidden=false;
    el("confirm-import").disabled=preview.valid.length===0;
    const validRows=preview.valid.slice(0,5).map((item)=>`<li>${esc(item.id)} · ${esc(item.date)} · ${esc(districtName(item.district))}</li>`).join("");
    const invalidRows=preview.invalid.map((item)=>`<li>${esc(interpolate(tr("invalidRowSummary"),{row:item.row,reason:item.reason}))}</li>`).join("");
    host.innerHTML=`<strong>${esc(tr("previewTitle"))}</strong><p>${esc(tr("validRows"))}: ${preview.valid.length.toLocaleString(state.lang)} · ${esc(tr("invalidRows"))}: ${preview.invalid.length.toLocaleString(state.lang)}</p>
      ${validRows?`<ul>${validRows}</ul>`:`<p>${esc(tr("previewNoValid"))}</p>`}
      ${preview.valid.length>5?`<p>${esc(tr("previewMore"))}</p>`:""}
      ${invalidRows?`<details open><summary>${esc(tr("invalidRows"))}</summary><ul>${invalidRows}</ul></details>`:""}`;
  }

  async function importFile() {
    const file=el("data-file").files[0];
    if(!file){setImportStatus(tr("chooseFileError"),true);return;}
    state.importPreview=null;
    renderImportPreview();
    try {
      const extension=file.name.split(".").pop().toLowerCase();
      let records;
      if(extension==="csv") records=parseCsv(await file.text());
      else if(extension==="json"||extension==="geojson") records=parseGeoJson(await file.text());
      else if(extension==="xlsx") {
        if(!window.XLSX) throw new Error(tr("templateError"));
        const workbook=XLSX.read(await file.arrayBuffer(),{type:"array",cellDates:false});
        const firstSheet=workbook.Sheets[workbook.SheetNames[0]];
        if(!firstSheet) throw new Error(tr("badCsv"));
        records=XLSX.utils.sheet_to_json(firstSheet,{defval:"",raw:false});
      } else throw new Error(tr("fileTypeError"));
      if(!records.length) throw new Error(tr("badCsv"));
      const mode=el("import-mode").value;
      const base=mode==="replace"?[]:state.data.incidents;
      const ids=new Set(base.map((item)=>item.id));
      const valid=[],invalid=[];
      records.forEach((record,index)=>{
        try { valid.push(validateIncident(record,index,ids)); }
        catch(error) { invalid.push({row:index+2,reason:error.message}); }
      });
      state.importPreview={valid,invalid,mode};
      renderImportPreview();
      setImportStatus(`${tr("validRows")}: ${valid.length} · ${tr("invalidRows")}: ${invalid.length}`,valid.length===0);
    } catch(error) {
      console.error("Incident import rejected",error);
      setImportStatus(interpolate(tr("importError"),{reason:error.message}),true);
    }
  }

  function confirmImport() {
    if(!state.importPreview?.valid.length) return;
    const base=state.importPreview.mode==="replace"?[]:state.data.incidents;
    const ids=new Set(base.map((item)=>item.id)),validated=[];
    const invalid=[...state.importPreview.invalid];
    state.importPreview.valid.forEach((record,index)=>{
      try {validated.push(validateIncident(record,index,ids));}
      catch(error) {invalid.push({row:index+2,reason:error.message});}
    });
    if(!validated.length) {
      state.importPreview={...state.importPreview,valid:[],invalid};
      renderImportPreview();
      setImportStatus(tr("previewNoValid"),true);
      return;
    }
    state.data.incidents=[...base,...validated];
    state.loadedSource="imported";
    const stored=persistIncidents();
    state.importPreview=null;
    renderImportPreview();
    el("data-file").value="";
    const message=stored?interpolate(tr("previewSuccess"),{count:validated.length}):tr("memoryOnly");
    setImportStatus(message,!stored);
    fillFilters();render();if(stored)showToast(message);
  }

  function downloadTemplate() {
    if(!window.XLSX) {showToast(tr("templateError"));return;}
    const sheet=XLSX.utils.aoa_to_sheet([
      IMPORT_FIELDS,
      ["SIMULATED-EXAMPLE-001","2026-10-25","karkh","traffic_related","low","open","33.310","44.365","Fictional example only"]
    ]);
    sheet["!cols"]=IMPORT_FIELDS.map((field)=>({wch:Math.max(14,field.length+3)}));
    const workbook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook,sheet,"Incidents");
    XLSX.writeFile(workbook,"baghdad-incident-template.xlsx");
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
    setDataControlsEnabled(false);
    el("language-toggle").addEventListener("click",()=>{state.lang=state.lang==="en"?"ar":"en";applyLanguage();});
    el("map-type-filter").addEventListener("change",(event)=>{
      state.mapType=event.target.value;
      if(state.map) {
        Object.values(state.layers.base).forEach((layer)=>state.map.removeLayer(layer));
        const base=state.mapType==="satellite"?"satellite":state.mapType==="training"?"training":"street";
        state.layers.base[base].addTo(state.map);
        state.map.invalidateSize();
      }
      updateMapModeLegend();renderMap(activeIncidents());
    });
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
    el("incident-form").addEventListener("submit",saveIncident);
    el("cancel-edit").addEventListener("click",()=>populateIncidentForm());
    el("incident-search").addEventListener("input",(event)=>{state.incidentQuery=event.target.value;renderIncidentsTable(activeIncidents());});
    el("incident-status-filter").addEventListener("change",(event)=>{state.incidentStatus=event.target.value;renderIncidentsTable(activeIncidents());});
    el("import-button").addEventListener("click",importFile);
    el("confirm-import").addEventListener("click",confirmImport);
    el("download-template").addEventListener("click",downloadTemplate);
    el("import-mode").addEventListener("change",()=>{state.importPreview=null;renderImportPreview();});
    el("reset-data").addEventListener("click",()=>{
      state.data=structuredClone(state.defaultData);restoreCategories();state.loadedSource="simulated";state.selectedDistrict="all";state.period="all";state.category="all";state.severity="all";state.from="";state.to="";
      state.incidentStatus="all";state.incidentQuery="";state.importPreview=null;
      try {localStorage.removeItem("baghdad-gis-incidents");}catch(error){console.error("Could not clear browser-local incidents",error);showToast(error.message);}
      el("incident-search").value="";el("incident-status-filter").value="all";el("date-from").value="";el("date-to").value="";el("period-filter").value="all";el("severity-filter").value="all";renderImportPreview();populateIncidentForm();
      setImportStatus(interpolate(tr("dataLoaded"),{count:state.data.incidents.length}),false);fillFilters();renderCategoryEditor();render();showToast(tr("simulatedBadge"));
    });
    el("add-category-form").addEventListener("submit",addCategory);
    el("notice").querySelector(".notice-close").addEventListener("click",()=>el("notice").remove());
  }

  async function start() {
    bindControls();applyLanguage();
    try {
      const [dataResponse,geoResponse]=await Promise.all([fetch("data/demo-data.json"),fetch("data/districts.geojson")]);
      if(!dataResponse.ok||!geoResponse.ok) throw new Error(tr("dataLoadError"));
      const [data,geojson]=await Promise.all([dataResponse.json(),geoResponse.json()]);
      if(!Array.isArray(data.districts)||!data.categories||!Array.isArray(data.incidents)||geojson?.type!=="FeatureCollection"||!Array.isArray(geojson.features)) throw new Error(tr("dataInvalid"));
      state.data=data;state.defaultData=structuredClone(data);state.geojson=geojson;
      restoreCategories();
      restoreLocalIncidents();
      const ids=new Set();
      state.data.incidents=state.data.incidents.map((record,index)=>validateIncident(record,index,ids));
      fillFilters();populateIncidentForm();renderCategoryEditor();initMap();render();applyLanguage();
      setText("copyright-year",String(new Date().getFullYear()));
      setImportStatus(interpolate(tr("dataLoaded"),{count:state.data.incidents.length}),false);
      setDataControlsEnabled(true);
    } catch(error) {
      console.error("Dashboard initialization failed",error);
      setImportStatus(error.message,true);
      el("district-table").innerHTML=`<tr><td colspan="7" class="empty-state">${esc(error.message)}</td></tr>`;
      el("map-fallback").hidden=false;el("map").hidden=true;
      el("map-fallback").querySelector("p").textContent=tr("dataLoadError");
    }
  }

  function setDataControlsEnabled(enabled) {
    const selectors=[
      "#district-filter","#period-filter","#category-filter","#severity-filter","#date-from","#date-to","#district-search","#sort-select",
      "#incident-form input","#incident-form select","#incident-form textarea","#incident-form button","#incident-search","#incident-status-filter",
      "#data-file","#import-mode","#import-button","#confirm-import","#download-template","#reset-data",
      "#add-category-form input","#add-category-form button"
    ];
    document.querySelectorAll(selectors.join(",")).forEach((control)=>{control.disabled=!enabled;});
  }

  document.addEventListener("DOMContentLoaded",start);
})();
