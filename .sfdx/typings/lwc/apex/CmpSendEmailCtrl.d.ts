declare module "@salesforce/apex/CmpSendEmailCtrl.ctrlGetLists" {
  export default function ctrlGetLists(): Promise<any>;
}
declare module "@salesforce/apex/CmpSendEmailCtrl.ctrlGetEmailTemplate" {
  export default function ctrlGetEmailTemplate(param: {templateId: any}): Promise<any>;
}
declare module "@salesforce/apex/CmpSendEmailCtrl.ctrlDeleteDocument" {
  export default function ctrlDeleteDocument(param: {lstDocumentId: any}): Promise<any>;
}
declare module "@salesforce/apex/CmpSendEmailCtrl.ctrlSendEmail" {
  export default function ctrlSendEmail(param: {templateId: any, format: any, fromId: any, to: any, relatedTo: any, relatedToRecord: any, additionalTo: any, cc: any, bcc: any, useSignature: any, subject: any, body: any, lstUploadFileStr: any}): Promise<any>;
}
declare module "@salesforce/apex/CmpSendEmailCtrl.ctrlGetNameField" {
  export default function ctrlGetNameField(param: {objName: any}): Promise<any>;
}
