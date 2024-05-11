import AddAdmins from "app/Components/AddAdmins";
import { initialValues } from "./constants";
import { FormValues } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { useAddAdminPageSlice } from "./slice";
import { addAdminValidationSchema } from "./validators";
import { selectErrorMessage } from "./slice/selector";
import { selectIsCreated } from "./slice/selector";
const AddAdminPage = () => {
  const { actions } = useAddAdminPageSlice();
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);
  const isCreated = useSelector(selectIsCreated);

  const handleAddAdmin = (values: FormValues) => {
    dispatch(
      actions.addAdmin({
        name: `${values.firstName} ${values.lastName}`,
        phoneNumber:values.adminPhoneNumber,
        email: values.adminEmailAddress,
      })
    );
  };

  return (
    <>
      <AddAdmins
        initialValues={initialValues}
        errorMessage={errorMessage}
        handleAddAdmin={handleAddAdmin}
        addAdminValidationSchema={addAdminValidationSchema}
        isCreated={isCreated}
      />
    </>
  );
};

export default AddAdminPage;
