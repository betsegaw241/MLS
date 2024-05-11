import ManageInventory from "app/Components/ManageInventory";
import { useEffect, useState } from "react";
import { UseManageInventorySlice } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectLowStockDrugs,
  selectManageInventoryState,
  selectSoonExpiringDrugs,
  selectRecentDrugs,
  selectExpiredDrugs,
} from "./slice/selector";
selectManageInventoryState
const ManageInventoryPage = () => {
  const { actions } = UseManageInventorySlice();
  const dispatch = useDispatch();
   const drugs = useSelector(selectManageInventoryState);
   const recentlyadded = useSelector(selectRecentDrugs);
   const lowStockDrug = useSelector(selectLowStockDrugs);
   const expiredDrugs = useSelector(selectExpiredDrugs);
   const soonExpiringDrugs = useSelector(selectSoonExpiringDrugs);
   const [currentPage, setCurrentPage] = useState(1);
   const { id } = useParams();

    const getDrugs = () => {
      dispatch(
        actions.getDrugs({
          id: id,
          page: currentPage,
          limit: 10,
        })
      );
    };

      const getSoldOutDrugs = () => {
        dispatch(
          actions.getSoldOutDrugs({
            id: id,
            page: currentPage,
            limit: 10,
          })
        );
      };  
      const getrecentlyaddedDrugs = () => {
        dispatch(
          actions.getrecentlyaddedDrugs({
            id: id,
            page: currentPage,
            limit: 10,
            sortBy: 'createdAt',
            sortOrder: "dsc",
          })
        );
      }; 
       const getexpiredDrugs = () => {
        dispatch(
          actions.getexpiredDrugs({
            id: id,
            page: currentPage,
            limit: 10,
            status: "expired",
          })
        );
      };

       
        const getLowStockDrugs = () => {
          dispatch(
            actions.getLowStockDrugs({
              id: id,
              page: currentPage,
              limit: 10,
              status: "lowStock",
              sortBy: "stockLevel",
              sortOrder: "asc",
            })
          );
        };
        
const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
  setCurrentPage(page); 
};
 useEffect(() => {
  //  getDrugs();
  //  getSoldOutDrugs();
   getrecentlyaddedDrugs();
   getexpiredDrugs();
    // getSoonExpiringDrugs();
   getLowStockDrugs();
 }, [currentPage]);

  return (
    <ManageInventory
      drugs={drugs.drugs.data}
      currentPage={currentPage}
      recentlyadded={recentlyadded.data}
      lowStockDrug={lowStockDrug}
      pages={drugs.totalPages}
      onPageChange={handlePageChange}
      expiredDrugs={expiredDrugs}
    />
  );
};
export default ManageInventoryPage;
