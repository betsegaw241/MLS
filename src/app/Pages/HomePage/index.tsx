import HomePageComponent from "app/Components/HomePageComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectErrorMessage, selectPharmacies } from "./slice/selector";
import { useEffect } from "react";
import { useHomePageSlice } from "./slice";

const HomePage = () => {
  const pharmacies = useSelector(selectPharmacies);
  const errorMessage = useSelector(selectErrorMessage);

  const { actions } = useHomePageSlice();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");

  useEffect(() => {
     dispatch(actions.getPharmacies(userId));
    
  }, []);

  return (
    <>
      <HomePageComponent pharmacies={pharmacies} errorMessage={errorMessage} />
    </>
  );
};

export default HomePage;
