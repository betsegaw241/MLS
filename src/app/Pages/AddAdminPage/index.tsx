import AddAdmins from "app/Components/AddAdmins";
import { initialValues } from "./constants";
import { FormValues } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { useAddAdminPageSlice } from "./slice";
import { addAdminValidationSchema } from "./validators";
import { selectErrorMessage, selectIsLoading } from "./slice/selector";
import { selectIsCreated } from "./slice/selector";
import { useNavigate } from "react-router";
const AddAdminPage = () => {
  const { actions } = useAddAdminPageSlice();
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);
  const isCreated = useSelector(selectIsCreated);
  const loading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  const handleAddAdmin = (values: FormValues) => {
    dispatch(
      actions.addAdmin({
        name: `${values.firstName} ${values.lastName}`,
        phoneNumber: values.adminPhoneNumber,
        email: values.adminEmailAddress,
      })
    );
  };

if(isCreated){
  dispatch(actions.addReset);
  navigate('/users')
}



  return (
    <>
      <AddAdmins
        initialValues={initialValues}
        errorMessage={errorMessage}
        handleAddAdmin={handleAddAdmin}
        addAdminValidationSchema={addAdminValidationSchema}
        isCreated={isCreated}
        loading={loading}
      />
    </>
  );
};

export default AddAdminPage;
