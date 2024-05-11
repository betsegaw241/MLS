import SuperAdminDashboardComponent from "app/Components/AdminDashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseGetPharmaciesSlice } from "../AdminPharmaciesPage/slice";
import {
  selectPharmacies,
  selectIsLoading,
} from "../AdminPharmaciesPage/slice/selector";
import AdminDashboardComponent from "app/Components/AdminDashboard/admindashboard";

const AdminDashboardPage = () => {
  const dispatch = useDispatch();
  const { actions } = UseGetPharmaciesSlice();
  const role = localStorage.getItem("role");
  const [currentPage, setCurrentPage] = useState(1);
  const pharmacies = useSelector(selectPharmacies);
  const loading = useSelector(selectIsLoading);

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (role === "admin") {
      dispatch(actions.getpharmacies({ page: currentPage, status: status }));
    }
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const onSearch = () => {
    // dispatch(actions.getpharmacies({  }));
  };

  return role === "superAdmin" ? (
    <SuperAdminDashboardComponent />
  ) : (
    <AdminDashboardComponent
      loading={loading}
      setQuery={setQuery}
      onSearch={onSearch}
      page={0}
      pharmacies={pharmacies}
      handlePageChange={handlePageChange}
    />
  );
};
export default AdminDashboardPage;
