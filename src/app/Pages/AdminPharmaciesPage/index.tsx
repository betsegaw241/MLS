import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectPharmacies } from "./slice/selector";
import { UseGetPharmaciesSlice } from "./slice";
import AdminPharmaciesComponent from "app/Components/AdminPharmaciesComponent";
import { UseGetUsersSlice } from "../AdminUsersPage/slice";
import { selectUsers } from "../AdminUsersPage/slice/selector";
import { IntialValues } from "app/Components/AdminPharmaciesComponent/types";

const AdminPharmaciesPage = () => {
  const dispatch = useDispatch();
  const { actions } = UseGetPharmaciesSlice();
  const userActions = UseGetUsersSlice();
  const pharmacies = useSelector(selectPharmacies);
  const loading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("");
  const admins = useSelector(selectUsers);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(actions.getpharmacies({ page: currentPage, status: status }));
  }, [currentPage, status]);

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
    dispatch(userActions.actions.getUsers({ role: "admin", limit: 50 }));
  }, []);

  const adminsArray = admins?.data?.map((item) => ({
    value: item._id,
    label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  }));

  const onSearch = () => {
    // dispatch(actions.getpharmacies({  }));
  };
  const handleAssign = (values: IntialValues) => {
    console.log(values);
    dispatch(actions.assignpharmacies(values));
  };
  return (
    <AdminPharmaciesComponent
      loading={false}
      page={currentPage}
      pharmacies={pharmacies}
      handlePageChange={handlePageChange}
      handleFilterUser={handleFilterUser}
      setQuery={setQuery}
      onSearch={onSearch}
      admins={adminsArray}
      handleAssign={handleAssign}
    />
  );
};

export default AdminPharmaciesPage;
