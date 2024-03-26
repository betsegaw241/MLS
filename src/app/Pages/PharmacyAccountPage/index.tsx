import PharmacyAccountComponent from "app/Components/PharmacyAccountComponent";
import { useState } from "react";
import { IPharmacy } from "./slices/types";

const PharmacyAccountPage = () => {
  const [editPharmacyData, setEditPharmacyData] = useState(false);
  const [editPharmacyOPerationalData, seteditPharmacyOPerationalData] =
    useState(false);
  const pharmacy: IPharmacy = {
    _id: "609e9dd0e6c8a8495c8e343c",
    name: "HealthPlus Pharmacy",
    email: "healthplus@example.com",
    phone: "+1234567890",
    state: "California",
    city: "Los Angeles",
    operationalHours: "9:00 AM - 7:00 PM",
    deliveryWaitingTime: "30 minutes",
    deliveryTimes: "10:00 AM - 5:00 PM",
    deliveryArea: "Within 10 miles",
    fastDeliveryFee: "$5",
    deliveryFeeinKm: "$1/km",
    isDeliveryAvailable: true,
    socialMedia: {
      facebook: "https://www.facebook.com/healthpluspharmacy",
      telegram: "https://t.me/healthpluspharm",
      linkedin: "https://www.linkedin.com/company/healthplus-pharmacy",
    },
  };
  const handleUpdate = (values: IPharmacy) => {
    console.log(values);
    setEditPharmacyData(!editPharmacyData);
  };

  const handleUpdateOperations = (values: IPharmacy) => {
    console.log(values);
    seteditPharmacyOPerationalData(!editPharmacyOPerationalData);
  };

  return (
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
