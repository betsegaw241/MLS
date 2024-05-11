import RegisterSellComponent from "app/Components/RegisterSellComponent";
import { SetStateAction, useEffect, useState } from "react";
import { UseAddDrugSlice } from "../AddDrugsPage/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectDrug, selectIsAdding } from "../AddDrugsPage/slice/selector";
import { useParams } from "react-router-dom";
import { FormValues } from "app/Components/RegisterSellComponent/types";
import { UseRegisterDrugSlice } from "../NewDrugRegistrationPage/slice";
import {
  selectDrugStck,
  selectIsLoading,
} from "../DrugDetailPage/slice/selector";
import { UseGetDrugDetailSlice } from "../DrugDetailPage/slice";
import { UseRegisterSellSlice } from "./slice";
import { selectLoading, selectRegisterd } from "./slice/selector";

const RegisterSellPage = () => {
  const loading = useSelector(selectLoading);
  const registerd = useSelector(selectRegisterd);
  const { actions } = UseAddDrugSlice();
  const registersellActions = UseRegisterSellSlice();
  const drugDetailactions = UseGetDrugDetailSlice();

  const dispatch = useDispatch();
  const { id } = useParams();
  const drugs = useSelector(selectDrug);
  const drugStck = useSelector(selectDrugStck);
  const [currentPage, setCurrentPage] = useState(1);
  const [drug, setDrug] = useState("");
  const [batch, setBatch] = useState("");
  const Loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(actions.getDrug(id));
  }, []);

  useEffect(() => {
    dispatch(
      drugDetailactions.actions.getDrugStock({
        id: drug,
        page: currentPage,
        limit: 10,
        sortBy: "createdAt",
        sortOrder: "dsc",
      })
    );
  }, [currentPage, drug]);

  const drugsArray = drugs.map((item) => ({
    value: item._id,
    label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  }));

  const handleRegister = (values: any) => {
    dispatch(
      registersellActions.actions.resgsterSell({
        quantity: values.quantity,
        stockId: batch,
        pharmacyId: id,
        drug: drug,
      })
    );
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      <RegisterSellComponent
        drugs={drugsArray}
        loading={loading}
        handleRegister={handleRegister}
        handlePageChange={handlePageChange}
        drugStck={drugStck}
        setDrug={setDrug}
        Loading={Loading}
        page={currentPage}
        registerd={registerd}
        setBatch={setBatch}
      />
      ;
    </>
  );
};
export default RegisterSellPage;
