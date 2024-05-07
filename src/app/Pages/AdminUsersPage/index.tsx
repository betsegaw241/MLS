import AdminUsersComponent from "app/Components/AdminUsersComponent";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseGetDrugsSlice } from "../StockPage/slice";
import { selectIsLoading, selectUsers } from "./slice/selector";
import { UseGetUsersSlice } from "./slice";

const AdminUsersPage = () => {
  const dispatch = useDispatch();
  const { actions } = UseGetUsersSlice();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState("");
  const startIndex = (currentPage - 1) * 10 + 1;
  const endIndex = Math.min(startIndex + 10 - 1, users.totalDocuments);
  const [query, setQuery] = useState("");

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(actions.getUsers({ page: currentPage, role: role }));
  }, [currentPage, role]);

  const handleFilterUser = (value: string) => {
    setRole(value);
    setCurrentPage(1);
  };
  const onSearch = () => {
    dispatch(actions.getUsers({ page: currentPage, role: role, name: query }));
  };

  return (
    <AdminUsersComponent
      loading={false}
      page={currentPage}
      users={users}
      handlePageChange={handlePageChange}
      handleFilterUser={handleFilterUser}
      endIndex={endIndex}
      startIndex={startIndex}
      setQuery={setQuery}
      onSearch={onSearch}
    />
  );
};

export default AdminUsersPage;
