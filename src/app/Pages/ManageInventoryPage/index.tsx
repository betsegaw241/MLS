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
} from "./slice/selector";
selectManageInventoryState
const ManageInventoryPage = () => {
  const { actions } = UseManageInventorySlice();
  const dispatch = useDispatch();
   const drugs = useSelector(selectManageInventoryState);
   const recentlyadded = useSelector(selectRecentDrugs);
   const lowStockDrug = useSelector(selectLowStockDrugs);
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
          })
        );
      };

       const getSoonExpiringDrugs = () => {
         dispatch(
           actions.getSoonExpiringDrugs({
             id: id,
             page: currentPage,
             limit: 10,
             sortBy: "expiredDate",
             sortOrder: "asc",
           })
         );
       };
        const getLowStockDrugs = () => {
          dispatch(
            actions.getLowStockDrugs({
              id: id,
              page: currentPage,
              limit: 10,
              sortBy: "stockLevel",
              sortOrder: "dsc",
            })
          );
        };
        
const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
  setCurrentPage(page); 
};
 useEffect(() => {
   getDrugs();
   getSoldOutDrugs();
   getrecentlyaddedDrugs();
   getexpiredDrugs();
   getSoonExpiringDrugs();
   getLowStockDrugs();
 }, [currentPage]);

  return (
    <ManageInventory
      drugs={drugs.drugs.data}
      currentPage={currentPage}
      recentlyadded={recentlyadded.data}
      lowStockDrug={lowStockDrug.data}
      soonExpiringDrugs={soonExpiringDrugs.data}
      pages={drugs.totalPages}
      onPageChange={handlePageChange}
    />
  );
};
export default ManageInventoryPage;
