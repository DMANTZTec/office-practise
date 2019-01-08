export class SummaryData {
    seqNum: number;
    postDate: string;
    metricModality: string;
    entityId: number;
    entityName: string;
    entityCqsScores: number;
    entityPossibleScoreWt: number;
    entityStandardizedScoreWt: number;
    diffEntityCqsScores: number;
    phyCqsScore: number;
    phyPercentile: number;
    phyRank: number;
    pracCqsScore: number;
    pracGrpName: string;
    pracGrpId: number;
    fkcScore: string;
}

export class KPICategoryData {
    metricCategory: string;
    description: string;
    redCount: number;
    greenCount: number;
    yellowCount: number;
    uiPercentile: number;
    entityStandardizedScoreWt: number;
    entityPossibleScoreWt: number;
    metricCategoryOrder: number;
}

// export class KPIDetailsData {
//     rowNumber: number;
//     categoryName: string;
//     postDate: string;
//     categoryId: number;
//     kpiName: string;
//     kpiTgtShortName: string;
//     kpiColorClass: string;
//     kpiRate: number;
//     fkcKpiRate: number;
//     kpiGoalDesc: string;
//     isUpGoodInd: number;
//     uom: string;
//     kpiTrendLabel: string;
//     yAxisUpperLimit: number;
//     yAxisLowerLimit: number;
//     kpiWeights: number;
//     kpiPointsEarned: number;
//     kpiWghtPointsEarned: number;
//     kpiHigh: number;
//     upperLimitKpiRate: number;
//     lowerLimitKpiRate: number;
//     kpiLow: number;
//     tileType: number;
// }

export class Patient {
    attendingPhysician: string;
    clinic: number;
    dob: string;
    groupNm: string;
    kpiNotMetCnt: number;
    mrn: string;
    physiciansGroup: string;
    isIncident: boolean;
}

export class PatientMetric {

    //"reportingMonth": "OCT-17";


    MRN: string;
    metricName: string;
    metricCd: string;
    metInd: string; // At metric level (not for month)
    metricDefinition: string;


    // legend info
    metricResources: string;
    legendInfoDesc: string;
    legendInfo1: string;
    legendInfo2: string;
    legendInfo3: string;
    legendInfo4: string;

    // kpi trend
    subMetricId: string;
    subMetricName: string;
    isParent: string;
    compositeMetric: boolean;


    metricDt: string;
    targetMonthValue: number;

    isTrend: boolean; // might need to be calculated from UI or service but not at db level


}

export class KPIHeatMapDetail {
    colId: string;
    colName: string;
    catName: string;
    month1: number;
    month1cellClass: string;

    month2: number;
    month2cellClass: string;


    month3: number;
    month3cellClass: string;

    month4: number;
    month4cellClass: string;

    month5: number;
    month5cellClass: string;

    month6: number;
    month6cellClass: string;

    month7: number;
    month7cellClass: string;

    month8: number;
    month8cellClass: string;

    month9: number;
    month9cellClass: string;

    month10: number;
    month10cellClass: string;

    month11: number;
    month11cellClass: string;

    month12: number;
    month12cellClass: string;

    metricLabelText: string;

    uiShowKPIDtlInd: string;
    tileType: string;

    accessEntityId: string;
    isUpSGoodInd: string;
    weights: string;
    weightsDescription: string;

}

export class PhysicianDetailsData {
    rnk: number;
    postDate: string;
    postDate1: string;
    entityId: number;
    entityName: string;
    entityCqsScore: number;
    outputEntityId: number;
    outputEntityName: string;
    metricModality: string;
    outStandardizedScoreWt: number;
    outPossibleScoreWt: number;
    outCqsScore: number;
    outCqsScoreDiff: number;
    pracCqsScore: number;
    phyCqsScore: number;
    rn: number;
    patientCount: number;
    fkcScore: number;
}

export class OvertimeMonthLabels {
    month1Label: string;
    month2Label: string;
    month3Label: string;
    month4Label: string;
    month5Label: string;
    month6Label: string;
    month7Label: string;
    month8Label: string;
    month9Label: string;
    month10Label: string;
    month11Label: string;
    month12Label: string;
}

export class PhysicianCompareHeaders {
    physician1Label: string;
    physician1Id: number;
    physician2Label: string;
    physician2Id: number;
    physician3Label: string;
    physician3Id: number;
    physician4Label: string;
    physician4Id: number;
    physician5Label: string;
    physician5Id: number;
}

export class PhysicianCompareData {
    metricId: number;
    metricName: string;
    metricLabelText: string;
    metricCategory: string;
    metricCategoryOrder: number;
    physician1Id: number;
    physician1Name: string;
    physician1: number;
    physician1StandardizedScore: number;
    physician1ColorClass: string;
    physician1Uom: string;
    physician2Id: number;
    physician2Name: string;
    physician2: number;
    physician2StandardizedScore: number;
    physician2ColorClass: string;
    physician2Uom: string;
    physician3Id: number;
    physician3Name: string;
    physician3: number;
    physician3StandardizedScore: number;
    physician3ColorClass: string;
    physician3Uom: string;
    physician4Id: number;
    physician4Name: string;
    physician4: number;
    physician4StandardizedScore: number;
    physician4ColorClass: string;
    physician4Uom: string;
    physician5Id: number;
    physician5Name: string;
    physician5: number;
    physician5StandardizedScore: number;
    physician5ColorClass: string;
    physician5Uom: string;
}

export class KPIDetailsData {
    metricName: string;
    metricRankResults: MetricRankResults;
    metricKpiTrends: MetricKpiTrends;
}

export class MetricRankResults {
    // 36 columns
    entityId: number;
    entityMetricValue: number;
    entityName: string;
    entityPossibleScoreWT: number;
    entityStandardizedScoreWt: number;
    isUpGoodInd: number;
    kpiCd: string;
    kpiHigh: number;
    kpiLow: number;
    lowerLimitKpiRate: number;
    lowerLimitPoints: number;
    metricCategory: string;
    metricId: number;
    metricLabelTxt: string;
    metricModality: string;
    metricName: string;
    metricTgtDesc: string;
    metricTgtRangeTypTxt: string;
    metricTgtShortDesc: string;
    minPossiblePoints: number;
    patientCount: number;
    phyMetricValue: number;
    postDate: string;
    pracMetricValue: number;
    rn: number;
    rnk: number;
    tileType: number;
    uiKpiDenomLabel: string;
    uiKpiLabel: string;
    uiKpiTrendLabel: string;
    uiShowKpiDtlInd: number;
    uom: string;
    upperLimitKpiRate: number;
    upperLimitPoints: number;
    weights: number;
    weightsDesc: string;

    // metricColorClass: string;
    // entityStandardizedScore: number;
    // parentMetricLabelTxt: string;
    // metricLongNames: string; 
    // entityPossibleScore: number;  

}

export class MetricKpiTrends {
    entityMetricValue: number;
    lowerLimitKpiRate: number;
    metricId: number;
    metricName: string;
    postDate: string;
    postDate1: string;
    uiPrefix: string;
    uom: string;
    upperLimitKpiRate: number;
}