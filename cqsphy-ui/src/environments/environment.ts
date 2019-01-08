
export const environment = {
  production: false,
  KPIHeatMapView_URL: './assets/data/PatientKPIHeatMap.json',
  // PatientsList_URL: './assets/data/Patient.json',
  PatientsList_URL: 'http://localhost:8080/metricsapi/getpatientList',
  // PatientMetric_URL: './assets/data/PatientMetric.json',
  PatientMetric_URL: 'http://localhost:8080/metricsapi/getmetricList',
  applicationDataApiUrl: 'https://dev-logixml.intranet.fmcna.com/biproductservices/app_data/detailsByAppName?appName=',
  userHierarchyAccessApiUrl: 'https://dev-logixml.intranet.fmcna.com/biproductservices/hierarchy/userHierarchyAccess?userId=',
  summaryApiUrl: 'http://localhost:8080/metricsapi/getEntityTrendSummary',
  kPICategoryApiUrl: 'http://localhost:8080/metricsapi/getCategorySummary',
  kPIDetailsApiUrl: 'http://localhost:8080/metricsapi/getAllKpiData',
  phySingleListApiUrl: 'http://localhost:8080/metricsapi/getEntitySingleList',
  phyCqsScoreApiUrl: './assets/data/PhyCQSScoreOvertime.json',
  overtimeMonthLabelsApiUrl: './assets/data/OvertimeMonthLabels.json',
  phyCompareHeaders: './assets/data/PhyCompareHeaders.json',
  phyCompareApiUrl: './assets/data/PhyCompareData.json',
  entityCensusApiUrl: 'http://localhost:8080/metricsapi/apicontroller/entityCensus',
  
  userAccessInfoUrl: 'https://dev-logixml.intranet.fmcna.com/tacservices/authorizationController/userAccessInfo?userId=',
  USER_ID_COOKIE_NAME: 'fmcUserID',
  SSO_LOGIN_URL: 'https://biapps-dev.fmcna.com/cqsphy',
  userHierarchyAccessByUserIdApiUrl: 'https://dev-logixml.intranet.fmcna.com/biproductservices/hierarchy/userHierarchyAccessByUserId',
  };
