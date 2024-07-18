import PharmacyAccountComponent from "app/Components/PharmacyAccountComponent";
import { useEffect, useState } from "react";
import { IPharmacy } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { usePharmacyAccountSlice } from "./slices";
import { useParams } from "react-router-dom";
import {
  selectPharmacy,
  selectUpdated,
  selectBanks,
  selectLoading,
} from "./slices/selector";
import api from "../../../API/api";
import LoadingPage from "utils/LoadingPage";

const PharmacyAccountPage = () => {
  const [editPharmacyData, setEditPharmacyData] = useState(false);
  const [editPharmacyAccountDetail, SetEditPharmacyAccountDetail] =
    useState(false);
  const [editPharmacyOPerationalData, seteditPharmacyOPerationalData] =
    useState(false);

  const [cover, setCover] = useState("");
  const [logo, setLogo] = useState("");
  const formData = new FormData();
  const dispatch = useDispatch();
  const { actions } = usePharmacyAccountSlice();
  const { id } = useParams();
  const pharmacy = useSelector(selectPharmacy);
  const updated = useSelector(selectUpdated);
  const banks = useSelector(selectBanks);
  // const link = useSelector(selectLink);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(actions.getpharmacyDetail(id));
    dispatch(actions.getBanks());
  }, [updated]);

  const handleUpdate = (values: IPharmacy) => {
    dispatch(
      actions.updatepharmacyDetail({ ...values, cover: cover, logo: logo })
    );
    setEditPharmacyData(!editPharmacyData);
  };

  const handleUpdateOperations = (values: IPharmacy) => {
    dispatch(actions.updatepharmacyDetail({ ...pharmacy, ...values }));
    seteditPharmacyOPerationalData(!editPharmacyOPerationalData);
  };

  const handleUpdateAccountDetail = (values: IPharmacy) => {
    const account = banks.data.find(
      (account) => account.name === values.bankName
    );

    dispatch(
      actions.updatepharmacyDetail({
        ...pharmacy,
        account: {
          accountHolderName: values.accountHolderName,
          accountNumber: values.accountNumber,
          bankName: values.bankName,
          bankCode: account?.id,
        },
      })
    );
    SetEditPharmacyAccountDetail(!editPharmacyAccountDetail);
  };

  const handleUploadCover = async (file: File[]) => {
    formData.append("file", file[0]);
    await uploadFileAndUpdateState(formData, setCover);
    formData.delete("file");
  };

  const handleUploadLogo = async (file: File[]) => {
    formData.append("file", file[0]);
    await uploadFileAndUpdateState(formData, setLogo);
    formData.delete("file");
  };

  async function uploadFileAndUpdateState(
    data: any,
    setState: (res: any) => void
  ) {
    try {
      const res = await api({
        route: `/file/upload`,
        method: "POST",
        isSecureRoute: true,
        body: data,
      });
      if (res) {
        setState(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
  let banksName: any = [];
  // let banksCode = [];
  if (banks) {
    banksName = banks?.data?.map((bank) => ({
      label: bank.name,
      value: bank.name,
    }));
  }
  return loading ? (
    <LoadingPage />
  ) : (
    <PharmacyAccountComponent
      editPharmacyData={editPharmacyData}
      setEditPharmacyData={setEditPharmacyData}
      editPharmacyOPerationalData={editPharmacyOPerationalData}
      seteditPharmacyOPerationalData={seteditPharmacyOPerationalData}
      SetEditPharmacyAccountDetail={SetEditPharmacyAccountDetail}
      editPharmacyAccountDetail={editPharmacyAccountDetail}
      pharmacy={pharmacy}
      banksName={banksName}
      handleUpdate={handleUpdate}
      handleUpdateOperations={handleUpdateOperations}
      handleUploadCover={handleUploadCover}
      handleUploadLogo={handleUploadLogo}
      handleUpdateAccountDetail={handleUpdateAccountDetail}
    />
  );
};

export default PharmacyAccountPage;
