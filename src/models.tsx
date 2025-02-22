// routing
export enum RouterType {
  BIOGRAFYS = "biography",
  GALLERY = "gallery",
  QUOTES = "quotes",
  LEGACY = "Legacy",
  CONTACT = "contact",
  ARTICLES = "articles"
}

export interface AddSplitPaymentSectionStateType {
  addedSplitPayments: {
    id: string;
  }[];
  isTableVisible: boolean;
  connectedDocNum: string;
  columnsData: never[];
  convertedDestinationID: null | string;
  editablePaymentData: PaymentResponseDto;
}
