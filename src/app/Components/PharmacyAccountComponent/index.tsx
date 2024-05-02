import { Box, Flex, Grid, P, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import UploadImage from "../ui/ImageUpload";
import EditPharmacyOperationsComponent from "./EditPharmacyOperationComponent";
import { IPharmacyAccountComponent } from "./types";
import { IoMdCloudUpload } from "react-icons/io";
import EditPharmacyProfileComponent from "./EditPharmacyProfileComponent";
import EditPharmacyAccountDetailComponent from "./EditPharmacyAccountDetailComponent";
import { Rating } from "react-simple-star-rating";

const PharmacyAccountComponent = (props: IPharmacyAccountComponent) => {
  const [selectCover, setSelectCover] = useState<File[]>([]);
  const [selectLogo, setSelectLogo] = useState<File[]>([]);
  const [coverSaved, setCoverSaved] = useState(true);
  const [logoSaved, setLogoSaved] = useState(true);
  const uploadCoverPhoto = (file: File[]) => {
    setSelectCover(file);
    setCoverSaved(false);

    // props.handleUploadCover(file);
  };
  const handleUpdateCover = () => {
    props.handleUploadCover(selectCover);
    setCoverSaved(true);
  };

  const uploadLogo = (file: File[]) => {
    setSelectLogo(file);
    // props.setSelectLogoPhoto(file);
    setLogoSaved(false);
  };
  const handleUpdateLogo = () => {
    props.handleUploadLogo(selectLogo);
    setLogoSaved(true);
  };

  // function truncateString(str: string, maxLength: number) {
  //   if (str) {
  //     return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  //   }
  // }

  return (
    <Flex
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      flexDirection={"column"}
      justifyContent={"center"}
      pb={200}
    >
      <Flex flexDirection={"column"} borderRadius={1}>
        <Box
          width={"100%"}
          backgroundColor={"#f5f5f5"}
          height={150}
          borderRadius={1}
        >
          <img
            src={
              selectCover.length > 0
                ? URL.createObjectURL(selectCover[0])
                : props.pharmacy.cover
            }
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
        </Box>
        {props.editPharmacyData && (
          <Flex justifyContent={"flex-end"} p={1} style={{ gap: 10 }}>
            <UploadImage image={uploadCoverPhoto}>
              <Flex
                border={"1px #B4D4FF solid"}
                style={{ cursor: "pointer" }}
                justifyContent={"center"}
                alignItems={"center"}
                width={50}
                borderRadius={1}
                p={1}
              >
                <IoMdCloudUpload size={20} />
              </Flex>
            </UploadImage>

            {selectCover && !coverSaved && (
              <Text
                fontFamily={"poppins"}
                border={"1px solid #B4D4FF"}
                borderRadius={1}
                p={1}
                fontSize={4}
                style={{ cursor: "pointer" }}
                onClick={() => handleUpdateCover()}
              >
                save
              </Text>
            )}
          </Flex>
        )}
      </Flex>

      <Flex p={1}>
        <Flex flexDirection={"column"} style={{ gap: 10 }}>
          <Box
            width={150}
            height={150}
            borderRadius={"50%"}
            marginTop={-50}
            background={"#f5f5f5"}
          >
            <img
              src={
                selectLogo.length > 0
                  ? URL.createObjectURL(selectLogo[0])
                  : props.pharmacy.logo
              }
              alt="pharmacy logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                border: "5px solid #f5f5f5",
              }}
            />
          </Box>
          {props.editPharmacyData && (
            <Flex
              justifySelf={"flex-end"}
              alignSelf={"flex-end"}
              style={{ gap: 20 }}
            >
              <UploadImage image={uploadLogo}>
                <Flex
                  border={"1px #B4D4FF solid"}
                  style={{ cursor: "pointer" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={50}
                  borderRadius={1}
                  p={1}
                >
                  <IoMdCloudUpload size={20} />
                </Flex>
              </UploadImage>
              {selectLogo && !logoSaved && (
                <Text
                  fontFamily={"poppins"}
                  border={"1px solid #B4D4FF"}
                  borderRadius={1}
                  p={1}
                  fontSize={4}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleUpdateLogo()}
                >
                  save
                </Text>
              )}
            </Flex>
          )}
        </Flex>

        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          marginLeft={"5%"}
        >
          <Text fontFamily={"poppins"} fontSize={6}>
            {props.pharmacy.name}
          </Text>
          <Text fontFamily={"poppins"} fontSize={4}>
            {props.pharmacy.email}
          </Text>
          <Flex alignItems={"center"} style={{ gap: 10 }}>
            <Rating
              readonly
              allowFraction
              initialValue={props.pharmacy?.avgRating}
            />
            <Text fontFamily={"poppins"} fontSize={1}>
              {props.pharmacy?.avgRating}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex width={"100%"} justifyContent={"space-around"}>
        <Flex
          width={"90%"}
          //   border={"1px #f5f5f5 solid"}
          m={1}
          p={1}
          flexDirection={"column"}
          borderRadius={1}
        >
          {props.editPharmacyData ? (
            <EditPharmacyProfileComponent
              pharmacy={props.pharmacy}
              setEdit={props.setEditPharmacyData}
              handleUpdate={props.handleUpdate}
            />
          ) : props.editPharmacyOPerationalData ? (
            <EditPharmacyOperationsComponent
              pharmacy={props.pharmacy}
              initialValues={props.pharmacy}
              setEdit={props.seteditPharmacyOPerationalData}
              handleUpdateOperations={props.handleUpdateOperations}
            />
          ) : props.editPharmacyAccountDetail ? (
            <EditPharmacyAccountDetailComponent
              pharmacy={props.pharmacy?.account}
              setEdit={props.SetEditPharmacyAccountDetail}
              handleUpdateOperations={props.handleUpdateAccountDetail}
              banksName={props.banksName}
              // banksCode={props.banksCode}
            />
          ) : (
            <>
              <Flex width={"100%"} justifyContent={"space-between"} p={1}>
                <Text fontFamily={"poppins"} fontSize={5}>
                  Pharmacy Information
                </Text>
                <Flex
                  style={{ gap: 5 }}
                  border={"1px #B4D4FF solid"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={"5px"}
                  mr={5}
                  width={80}
                  borderRadius={5}
                  onClick={() =>
                    props.setEditPharmacyData(!props.editPharmacyData)
                  }
                >
                  <P
                    fontFamily={"poppins"}
                    padding={"0px"}
                    margin={"0px"}
                    fontSize={3}
                  >
                    Edit
                  </P>

                  <MdEdit color="#B4D4FF" />
                </Flex>
              </Flex>
              <Flex
                width={"100%"}
                flexDirection={"column"}
                // border={"1px solid #f5f5f5f5"}
                borderRadius={0}
              >
                <Grid
                  borderRadius={0}
                  gridColumnGap={"40px"}
                  gridRowGap={"15px"}
                  width={"100%"}
                  gridTemplateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  p={1}
                >
                  <GridBox lable={"Name"} value={props.pharmacy.name} />
                  <GridBox lable={"Email"} value={props.pharmacy.email} />
                  <GridBox lable={"Phone"} value={props.pharmacy.phoneNumber} />
                  
                  <GridBox lable={"address"} value={props.pharmacy.address} />
                  <GridBox
                    lable={"Working Hours"}
                    value={props.pharmacy.workingHours}
                  />
                  <GridBox
                    lable={"Facebook"}
                    value={props.pharmacy.socialMedia?.facebook}
                  />
                  <GridBox
                    lable={"Telegram"}
                    value={props.pharmacy.socialMedia?.telegram}
                  />{" "}
                  <GridBox
                    lable={"Linkedin"}
                    value={props.pharmacy.socialMedia?.linkedIn}
                  />
                </Grid>
                <Flex flexDirection={"column"} p={1} width={"100%"}>
                  <Text fontFamily={"poppins"}>About</Text>
                  <Text fontFamily={"poppins"} fontSize={4}>
                    {" "}
                    {props.pharmacy.about}
                  </Text>
                </Flex>
              </Flex>
              <Flex width={"100%"} justifyContent={"space-between"} p={1}>
                <Flex alignItems={"center"} style={{ gap: 10 }}>
                  <Text fontFamily={"poppins"} fontSize={5}>
                    Deliver Information
                  </Text>
                  <Text
                    fontSize={3}
                    fontFamily={"poppins"}
                    backgroundColor={
                      props.pharmacy.hasDeliveryService ? "#B4D4FF" : "#f5f5f5"
                    }
                    borderRadius={1}
                    padding={"5px"}
                  >
                    {props.pharmacy.hasDeliveryService ? "Enabled" : "Disabled"}
                  </Text>
                </Flex>

                <Flex
                  style={{ gap: 5 }}
                  border={"1px #B4D4FF solid"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={"5px"}
                  mr={5}
                  width={80}
                  borderRadius={5}
                  onClick={() =>
                    props.seteditPharmacyOPerationalData(
                      !props.editPharmacyOPerationalData
                    )
                  }
                >
                  <P
                    fontFamily={"poppins"}
                    padding={"0px"}
                    margin={"0px"}
                    fontSize={3}
                  >
                    Edit
                  </P>

                  <MdEdit color="#B4D4FF" />
                </Flex>
              </Flex>
              <Grid
                border={"1px solid #f5f5f5f5"}
                borderRadius={0}
                gridColumnGap={"40px"}
                gridRowGap={"15px"}
                gridTemplateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                mb={2}
                p={1}
              >
                <GridBox
                  lable={"Delivery Coverage"}
                  value={props.pharmacy.deliveryCoverage}
                />
                <GridBox
                  lable={"Delivery Fee in km"}
                  value={props.pharmacy.deliveryPricePerKm}
                />
                <GridBox
                  lable={"Minimum delivery time"}
                  value={props.pharmacy.minDeliveryTime}
                />
                <GridBox
                  lable={"Maximum delivery time"}
                  value={props.pharmacy.maxDeliveryTime}
                />
              </Grid>
              <Flex width={"100%"} justifyContent={"space-between"} p={1}>
                <Flex alignItems={"center"} style={{ gap: 10 }}>
                  <Text fontFamily={"poppins"} fontSize={5}>
                    Account Detail
                  </Text>
                </Flex>

                <Flex
                  style={{ gap: 5 }}
                  border={"1px #B4D4FF solid"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={"5px"}
                  mr={5}
                  width={80}
                  borderRadius={5}
                  onClick={() =>
                    props.SetEditPharmacyAccountDetail(
                      !props.editPharmacyAccountDetail
                    )
                  }
                >
                  <P
                    fontFamily={"poppins"}
                    padding={"0px"}
                    margin={"0px"}
                    fontSize={3}
                  >
                    Edit
                  </P>

                  <MdEdit color="#B4D4FF" />
                </Flex>
              </Flex>
              <Grid
                border={"1px solid #f5f5f5f5"}
                borderRadius={0}
                gridColumnGap={"40px"}
                gridRowGap={"15px"}
                gridTemplateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                mb={2}
                p={1}
              >
                <GridBox
                  lable={"Bank Name"}
                  value={props.pharmacy.account?.bankName}
                />
                <GridBox
                  lable={"Account Holder Name"}
                  value={props.pharmacy.account?.accountHolderName}
                />
                <GridBox
                  lable={"Account Number"}
                  value={props.pharmacy.account?.accountNumber}
                />
              </Grid>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PharmacyAccountComponent;
