export interface transactionDetailPageState {
  isgettingTransaction: boolean;
  isTransactionExist: boolean;
  transaction:ITransaction;
  
}
export interface sender {
    name: string;
    email: string;
  }
  export interface receiver {
    name: string;
    email: string;
  }
  export interface senderAccount {
    accountNumber: string;
    accountHolderName?: string;
    bankName: string;
    accountType: string;
  }
  export interface receiverAccount {
    accountNumber: string;
    accountHolderName: string;
    bankName: string;
    accountType: string;
  }
export interface ITransaction {
  _id: string;
  sender: sender;
  receiver: receiver;
  senderAccount: senderAccount;
  receiverAccount: receiverAccount;
  reason: string;
  createdAt: string;
}

