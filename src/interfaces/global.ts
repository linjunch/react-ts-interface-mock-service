export type RecordType = 'coustomer' | 'contract' | 'order' | 'declare' | 'sh';
export type CompanyType = 'supplier' | 'trade' | 'operator';
export type TrendsType = RecordType;
export type SourceType = 'NONE' | 'ESR_TRADE' | 'AH_SITE' | 'FS_SHARE';
export type DefaultViewType = 'SS' | 'SA' | 'TS' | 'TC' | 'TA' | 'OS' | 'OC' | 'OA';
export type StatusType = 'enabled' | 'disabled' | 'deleted';
export type SortType = 'createDate' | 'piDate';
export type GoodsSortType = 'insDate' | 'goodsCode';
export type LedgerSortType = 'insDate' | 'exDate';
export type CompanySortType = GoodsSortType;
export type SexType = 0 | 1;
export type ServiceType = 'declareService' | 'traditionService' | 'newService';
export type DeclareType = 'esrDeclare' | 'otherDeclare';
export type SizeType = '20GP' | '40GP' | '40HQ' | '45HQ' | '散货';

export type StepType =
  | 'draft'
  | 'send'
  | 'accept'
  | 'reject'
  | 'container'
  | 'return'
  | 'check'
  | 'pass'
  | 'refuse';
export type CheckStepType = 'draft' | 'check' | 'pass' | 'return' | 'reject';
export type BillStepType = CheckStepType;
export type ShStepType =
  | 'draft'
  | 'shed'
  | 'return'
  | 'jhed'
  | 'pass'
  | 'affirm'
  | 'reaffirm'
  | 'verify';
export type ContractStepType = 'draft' | 'send' | 'reject' | 'censor' | 'check' | 'pass' | 'refuse';
export type DeclareStepType =
  | 'draft'
  | 'check'
  | 'return'
  | 'confirm'
  | 'withdraw'
  | 'declare'
  | 'declaring'
  | 'pass'
  | 'clearance'
  | 'invoice'
  | 'drawbacking'
  | 'finish';
export type OrderStepType =
  | 'container'
  | 'reject'
  | 'check'
  | 'return'
  | 'refuse'
  | 'pass'
  | 'finish'
  | 'convert';
export type LedgerStepType =
  | 'draft'
  | 'check'
  | 'pass'
  | 'return'
  | 'refuse'
  | 'invoice'
  | 'apply'
  | 'accept'
  | 'finish';
export type PaymentStepType = 'draft' | 'check' | 'confirm' | 'payment' | 'finish';

export type DownloadType = 'packing' | 'template' | 'tpl1' | 'tpl2';
export type CompanyModeType = 'production' | 'trade';
export type CustomerType = 'customer' | 'supplier';
export type PotentialCustomersType = 'center' | 'public' | 'private';
export type CustomerSortType = 'insDate';
export type InputType = 'apply' | 'supply' | 'intserv';
export type ValType = 'pass' | 'return' | 'reject';
export type ShAttrType = 'serviceType' | 'buyer' | 'owner' | 'country' | 'currency';
export type LedgerAttrType =
  | 'tradeArea'
  | 'tradeCountry'
  | 'buyer'
  | 'hscode'
  | 'factory'
  | 'owner'
  | 'trade';
export type OrderAttrType =
  | 'tradeArea'
  | 'tradeCountry'
  | 'buyer'
  | 'hscode'
  | 'factory'
  | 'owner'
  | 'trade'
  | 'supplier'
  | 'salesman';
export type CustomerRelationType = 'being' | 'history';
export type LockStatusType = 'lock' | 'unlock';
export type OrderFeeAttrtype = 'feeType' | 'trade' | 'owner' | 'supplier';
export type AnalysisType = 'serviceType' | 'mode' | 'province' | 'city' | 'district' | 'salesman';
export type OrderType = 'own' | 'other';
export type BillType = 'declareService' | 'truckService' | 'shippingService';
export type PaymentType = 'beforehand' | 'surplus';
