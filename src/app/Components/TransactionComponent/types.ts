

export interface TransactionComponentProps {
  transactions: TransactionData;
  onPageChange: any;
  currentPage: number;
  pages: number;
  onSearch: () => void;
  onFilter: () => void;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

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
}

interface TransactionData {
  data: Transaction[];
}
