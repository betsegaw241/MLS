import AddAdmins from "app/Components/AddAdmins";
import { initialValues } from "./constants";
import { FormValues } from "./types";
import { useDispatch } from "react-redux";
import { useAddAdminPageSlice } from "./slice";

const AddAdminPage = () => {
  const { actions } = useAddAdminPageSlice();
  const dispatch = useDispatch();



  const handleAddAdmin =  (values: FormValues) => {
        dispatch(actions.addAdmin({ name:`${values.firstName} ${values.lastName}`,email:values.adminEmailAddress,}));

  };

  return (
    <>
      <AddAdmins
        initialValues={initialValues}
        errorMessage={""}
        handleAddAdmin={handleAddAdmin} 
        addAdminValidationSchema={""}      />
    </>
  );
};

export default AddAdminPage;
