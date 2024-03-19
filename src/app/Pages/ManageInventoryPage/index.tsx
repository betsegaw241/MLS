import ManageInventory from "app/Components/ManageInventory";
import { useEffect } from "react";
import { UseManageInventorySlice } from "./slice";
import { useDispatch } from "react-redux";

const ManageInventoryPage = () => {
  const { actions } = UseManageInventorySlice();
  const dispatch = useDispatch();
  const orders = [
    {
      id: 1,
      name: "Beka",
      drug: "Advil",
      phone: "0935354",
      location: "A.A",
      time: "4:30 PM",
      status: "PENDING",
      date: "29/35/33",
      recived: 400,
      balance: 400,
      expiration_date: "09/35/33",
      batch: 1233,
    },
    {
      id: 2,
      name: "Toltu",
      drug: "Differin",
      phone: "092535454",
      location: "Wolkite",
      time: "4:30 PM",
      status: "REJECTED",
      date: "29/35/33",
      recived: 400,
      balance: 400,
      expiration_date: "09/35/33",
      batch: 1233,
    },
    {
      id: 3,
      name: "Desta",
      drug: "Orajel",
      phone: "093535421",
      location: "Dire",
      time: "4:30 PM",
      status: "ACCEPTED",
      date: "29/35/33",
      recived: 400,
      balance: 400,
      expiration_date: "09/35/33",
      batch: 1233,
    },
    {
      id: 4,
      name: "Damtew",
      drug: "Advil",
      phone: "091535488",
      location: "A.A",
      time: "4:30 PM",
      status: "PENDING",
      date: "29/35/33",
      recived: 400,
      balance: 400,
      expiration_date: "09/35/33",
      batch: 1233,
    },
    {
      id: 5,
      name: "Getu",
      drug: "Differin",
      phone: "095535477",
      location: "Gubrye",
      time: "4:30 PM",
      status: "PENDING",
      date: "29/35/33",
      recived: 400,
      balance: 4,
      expiration_date: "09/35/33",
      batch: 1233,
    },
    {
      id: 6,
      name: "Roba",
      drug: "Advil",
      phone: "093535455",
      location: "Adama",
      time: "4:30 PM",
      status: "REJECTED",
      date: "29/35/33",
      recived: 400,
      balance: 400,
      expiration_date: "09/35/33",
      batch: 1233,
    },
    {
      id: 7,
      name: "Iskindir",
      drug: "Clifford",
      phone: "093535433",
      location: "Bahirdar",
      time: "4:30 PM",
      status: "ACCEPTED",
      date: "29/35/33",
      recived: 400,
      balance: 3,
      expiration_date: "09/35/33",
      batch: 1233,
    },
    {
      id: 8,
      name: "Iskindir",
      drug: "Clifford",
      phone: "093535433",
      location: "Bahirdar",
      time: "4:30 PM",
      status: "ACCEPTED",
      date: "29/35/33",
      recived: 400,
      balance: 1,
      expiration_date: "09/35/33",
      batch: 1233,
    },
  ];

  useEffect(() => {
    dispatch(actions.getDrugs());
  }, []);

  return <ManageInventory orders={orders} />;
};
export default ManageInventoryPage;
