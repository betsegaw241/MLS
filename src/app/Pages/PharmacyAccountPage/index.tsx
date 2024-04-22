import PharmacyAccountComponent from "app/Components/PharmacyAccountComponent";
import { useEffect, useState } from "react";
import { IPharmacy } from "./slices/types";
import { useDispatch, useSelector } from "react-redux";
import { usePharmacyAccountSlice } from "./slices";
import { useParams } from "react-router-dom";
import {selectPharmacy} from './slices/selector';

const PharmacyAccountPage = () => {
  const [editPharmacyData, setEditPharmacyData] = useState(false);
  const [editPharmacyOPerationalData, seteditPharmacyOPerationalData] =
    useState(false);

    const dispatch = useDispatch();
    const { actions } = usePharmacyAccountSlice();
    const { id } = useParams();
    const pharmacy = useSelector(selectPharmacy);


   useEffect(() => {
    dispatch(actions.getpharmacyDetail(id));
  }, []);

  const handleUpdate = (values: IPharmacy) => {
    console.log(values);
    setEditPharmacyData(!editPharmacyData);
  };

  const handleUpdateOperations = (values: IPharmacy) => {
    console.log(values);
    seteditPharmacyOPerationalData(!editPharmacyOPerationalData);
  };
//  console.log("---------------------",pharmacy)

  return (pharmacy &&
    <PharmacyAccountComponent
      editPharmacyData={editPharmacyData}
      setEditPharmacyData={setEditPharmacyData}
      editPharmacyOPerationalData={editPharmacyOPerationalData}
      seteditPharmacyOPerationalData={seteditPharmacyOPerationalData}
      pharmacy={pharmacy}
      handleUpdate={handleUpdate}
      handleUpdateOperations={handleUpdateOperations}
    />
  );
};

export default PharmacyAccountPage;
