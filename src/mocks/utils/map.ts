export default {
  // email: '@email',
  // me: '@boolean',
  // lock: '@boolean',
  // disable: '@boolean',
  // stress: '@boolean',
  // allowComment: '@boolean',
  // important: '@boolean',
  // cover: '@boolean',
  // show: '@boolean',
  // memberNumber: '@integer',
  // viewNumber: '@integer',
  // uselessNumber: '@integer',
  // usefulNumber: '@integer',
  // number: '@integer',
  // childNumber: '@integer',
  // floor: '@integer',
  // floorReply: '@integer',
  // feedbackNumber: '@integer',
  // notReadNumber: '@integer',
  // notUnderstandNumber: '@integer',
  // sequence: '@integer(1,255)',
  // version: '@integer',
  // downloadNumber: '@integer',
  // projectNumber: '@integer',
  // area: '@county(true)',
  // teamName: '@ctitle(50)',
  // projectName: '@ctitle(50)',
  // documentName: '@ctitle(50)',
  // title: '@ctitle(60)',
  // brief: '@ctitle(100)',
  // content: '@ctitle(100)',
  // subTitle: '@ctitle(100)',
  // jobName: '@ctitle(8)',
  // fileName: '@ctitle(50)',
  // itemName: '@ctitle(60)',
  // resourceName: '@ctitle(60)',
  // mediaName: '@ctitle(60)',
  // requirements: '@cparagraph(50)',
  // responsibilities: '@cparagraph(50)',
  // salary: '@cparagraph(8)',
  // memberName: '@cname',
  // itemUrl: '@url',
  // downloadUrl: '@url',
  // photoImage: '@image(260x200)',
  // coverImage: '@image(260x200)',
  // createdDate: '@datetime(yyyy-MM-dd HH:mm:ss.SSS)',
  // expiredDate: '@datetime(yyyy-MM-dd HH:mm:ss.SSS)',
  // documentNumber: '@integer',
  // id: '@id',
  // openAppId: '@string',
  // ip: '@ip',
  // role: { 'role|1': ['SUPER_ADMIN', 'ADMIN', 'EDITOR', 'VIEWER'] },
  // status: { 'status|1': ['ENABLE', 'DISABLE'] },
  // openAppStatus: { 'openAppStatus|1': ['CHECKUNPASS', 'SUBMIT', 'CHECKPASS', 'ONLINE'] },
  // documentType: { 'documentType|1': ['NEWS', 'HELP', 'BULLETIN', 'JOB', 'RESOURCE', 'MEDIA'] },
  // mediaType: { 'mediaType|1': ['IMAGE', 'VIDEO'] },
  // education: { 'education|1': ['本科', '专科', '硕士', '博士'] },
  // experience: { 'experience|1': ['无', '1年', '2年', '3年'] },
  defaultView: { 'defaultView|1': ['SS', 'SA'] },
  SS: '@boolean',
  SA: '@boolean',
  TS: '@boolean',
  TC: '@boolean',
  TA: '@boolean',
  OS: '@boolean',
  OC: '@boolean',
  OA: '@boolean',
  no: '@integer(0, 100)',
  operator: '@cname',
  operDate: '@datetime(yyyy-MM-dd HH:mm:ss.SSS)',
  operType: '@string',
  detail: '@string',
  account: '@id',
  imageUrl: '@image(260x200)',
  root: '@boolean',
  userName: '@cname',
  roleId: '@id',
};
