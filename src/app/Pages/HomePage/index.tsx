import HomePageComponent from "app/Components/HomePageComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorMessage,
  selectIsLoading,
  selectPharmacies,
} from "./slice/selector";
import { useEffect } from "react";
import { useHomePageSlice } from "./slice";

const HomePage = () => {
  const pharmacies = useSelector(selectPharmacies);
  const errorMessage = useSelector(selectErrorMessage);
  const loading = useSelector(selectIsLoading);

  const { actions } = useHomePageSlice();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");

  useEffect(() => {
    dispatch(actions.getPharmacies(userId));
  }, []);

  return (
    <>
      <HomePageComponent
        pharmacies={pharmacies}
        errorMessage={errorMessage}
        loading={loading}
      />
    </>
  );
};

export default HomePage;
