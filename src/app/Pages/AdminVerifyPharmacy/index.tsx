import { useDispatch, useSelector } from "react-redux";
import { UseVerifyPharmaciesSlice } from "./slice";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { selectIsLoading, selectPharmacies } from "./slice/selector";
import { useLocation } from "react-router-dom";
import { UseGetUsersSlice } from "../AdminUsersPage/slice";
import { selectUsers } from "../AdminUsersPage/slice/selector";
import VerifyPharmacyComponent from "app/Components/VerifyPharmacyComponent";
import { intialValues } from "../AdminPharmaciesPage/constants";

const AdminVerifyPharmacy = () => {
  const dispatch = useDispatch();
  const { actions } = UseVerifyPharmaciesSlice();
  const userActions = UseGetUsersSlice();
  const pharmacies = useSelector(selectPharmacies);
  const loading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("");
  const admins = useSelector(selectUsers);
  const [query, setQuery] = useState("");

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleFilterUser = (value: string) => {
    setStatus(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(actions.getpharmacies({ page: currentPage, status: "pending" }));
  }, [currentPage, status]);

 

 
  const onSearch = () => {};
  return (
    <>
      <VerifyPharmacyComponent
        loading={loading}
        setQuery={setQuery}
        onSearch={onSearch}
        page={0}
        pharmacies={pharmacies}
        handlePageChange={handlePageChange}
        handleFilterUser={handleFilterUser}
      />
    </>
  );
};

export default AdminVerifyPharmacy;
