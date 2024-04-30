import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectPharmacies } from "./slice/selector";
import { UseGetPharmaciesSlice } from "./slice";
import AdminPharmaciesComponent from "app/Components/AdminPharmaciesComponent";
import { UseGetUsersSlice } from "../AdminUsersPage/slice";
import { selectUsers } from "../AdminUsersPage/slice/selector";
import { intialValues } from "./constants";
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
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [catagory, setCatagory] = useState("");

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

  useEffect(() => {
    dispatch(userActions.actions.getUsers({ role: "admin" }));
  }, []);

  const adminsArray = admins.data.map((item) => ({
    value: item._id,
    label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  }));

  const handleAssign = (values: IntialValues) => {
    console.log("$$$$$$$$$$", values);
  };
  const onSearch = () => {};
  return (
    <AdminPharmaciesComponent
      loading={false}
      page={currentPage}
      pharmacies={pharmacies}
      intialValues={intialValues}
      admins={adminsArray}
      handlePageChange={handlePageChange}
      handleFilterUser={handleFilterUser}
      setQuery={setQuery}
      onSearch={onSearch}
      handleAssign={handleAssign}
    />
  );
};

export default AdminPharmaciesPage;
