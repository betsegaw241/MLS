import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectPharmacies } from "./slice/selector";
import { UseGetPharmaciesSlice } from "./slice";
import AdminPharmaciesComponent from "app/Components/AdminPharmaciesComponent";

const AdminPharmaciesPage = () => {
  const dispatch = useDispatch();
  const { actions } = UseGetPharmaciesSlice();
  const pharmacies = useSelector(selectPharmacies);
  const loading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState("");

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(actions.getpharmacies({ page: currentPage, role: role }));
  }, [currentPage, role]);

  const handleFilterUser = (value: string) => {
    setRole(value);
    setCurrentPage(1);
  };

  return (
    <AdminPharmaciesComponent
      loading={false}
      page={currentPage}
      pharmacies={pharmacies}
      handlePageChange={handlePageChange}
      handleFilterUser={handleFilterUser}
    />
  );
};

export default AdminPharmaciesPage;
