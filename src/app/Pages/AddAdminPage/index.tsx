import AddAdmins from "app/Components/AddAdmins";
import { initialValues } from "./constants";
import { FormValues } from "./types";
import { useDispatch } from "react-redux";
import { useAddAdminPageSlice } from "./slice";

const AddAdminPage = () => {
  const { actions } = useAddAdminPageSlice();
  const dispatch = useDispatch();

  const handleAddAdmin = async (values: FormValues) => {
    try {
      const updatedData = {
        ...values,
        
      };
      console.log("handleAddAdmin", updatedData);
    } catch (error) {
      console.log("handleAddAdmin--error", error);
    }
  };

  return (
    <>
      <AddAdmins
        initialValues={initialValues}
        errorMessage={""}
        handleAddAdmin={handleAddAdmin}
      />
      ;
    </>
  );
};

export default AddAdminPage;
