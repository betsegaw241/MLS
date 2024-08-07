import AdminUsersComponent from "app/Components/AdminUsersComponent";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseGetDrugsSlice } from "../StockPage/slice";
import { selectIsLoading, selectUsers } from "./slice/selector";
import { UseGetUsersSlice } from "./slice";
import { useEditProfilePageSlice } from "../ProfilePage/slice";
import { selectEdited } from "../ProfilePage/slice/selector";

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
  const [user, setUser] = useState("");
  const profileActions = useEditProfilePageSlice();
  const edited = useSelector(selectEdited);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(actions.getUsers({ page: currentPage, role: role }));
  }, [currentPage, role, edited]);

  const handleFilterUser = (value: string) => {
    setRole(value);
    setCurrentPage(1);
  };
  const handleManageUser = (value: any) => {
    dispatch(
      profileActions.actions.editProfile({
        id: value.user,
        status: value.value,
      })
    );
  };

  const onSearch = () => {
    dispatch(actions.getUsers({ page: currentPage, role: role, name: query }));
  };

  return (
    <AdminUsersComponent
      setUser={setUser}
      loading={false}
      page={currentPage}
      users={users}
      handlePageChange={handlePageChange}
      handleFilterUser={handleFilterUser}
      endIndex={endIndex}
      startIndex={startIndex}
      setQuery={setQuery}
      onSearch={onSearch}
      handleManageUser={handleManageUser}
    />
  );
};

export default AdminUsersPage;
