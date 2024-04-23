export interface transactionPageState {
  isgettingTransaction: boolean;
  isTransactionExist: boolean;
  transaction: Itransaction;
  transactions: [];
}

export interface Itransaction {
  data: any;
  length: number;
  _id: string;
  sender: {
    name: string;
    email: string;
  };
  receiver: {
    name: string;
    email: string;
  };
  senderAccount: {
    accountNumber: string;
    bankName: string;
    accountType: string;
  };
  receiverAccount: {
    accountNumber: string;
    bankName: string;
    accountType: string;
  };
  reason: string;
  createdAt: string;
  totalPages: number;
}
