import { useEffect, useState } from "react";
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
  const [status, setStatus] = useState("");

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
    dispatch(actions.getpharmacies({ page: currentPage, status: status }));
  }, [currentPage, status]);

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
