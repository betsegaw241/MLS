export interface Transaction {
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
};
export interface TransactionComponentProps {
  transactions: any;
};

