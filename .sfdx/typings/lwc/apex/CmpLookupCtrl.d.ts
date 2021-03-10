declare module "@salesforce/apex/CmpLookupCtrl.getRecords" {
  export default function getRecords(param: {sObjectName: any, valueFieldName: any, displayedFieldName: any, otherFields: any, whereClause: any}): Promise<any>;
}
declare module "@salesforce/apex/CmpLookupCtrl.getHelpText" {
  export default function getHelpText(param: {field: any}): Promise<any>;
}
declare module "@salesforce/apex/CmpLookupCtrl.getReference" {
  export default function getReference(param: {field: any}): Promise<any>;
}
declare module "@salesforce/apex/CmpLookupCtrl.getFieldValue" {
  export default function getFieldValue(param: {obj: any, objId: any, label: any}): Promise<any>;
}
