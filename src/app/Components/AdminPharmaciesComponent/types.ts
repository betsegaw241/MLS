import { IpharmacyData } from "app/Pages/AdminPharmaciesPage/slice/types";

export interface StockComponentProps {
    loading: boolean;
    // setQuery: React.Dispatch<React.SetStateAction<string>>;
    // setMinPrice: React.Dispatch<React.SetStateAction<string>>;
    // setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
    // setCatagory: React.Dispatch<React.SetStateAction<string>>;
    // onSearch: () => void;
    // onFilter: () => void;
    page: number;
    pharmacies: IpharmacyData;
    handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
    handleFilterUser:(value:string)=>void;
  }
  
 
 
  