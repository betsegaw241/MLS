import { Box, Flex, Grid, P, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import EditPharmacyAccountComponent from "./EditPharmacyAccountComponent";
import UploadImage from "../ui/ImageUpload";
import EditPharmacyOperationsComponent from "./EditPharmacyOperationComponent";
import { IPharmacyAccountComponent } from "./types";

const PharmacyAccountComponent = (props: IPharmacyAccountComponent) => {
  const [selectCover, setSelectCover] = useState<File[]>([]);
  const [selectLogo, setSelectLogo] = useState<File[]>([]);
  const uploadCoverPhoto = (file: File[]) => {
    setSelectCover(file);
  };
  const uploadLogo = (file: File[]) => {
    setSelectLogo(file);
  };

  function truncateString(str: string, maxLength: number) {
    if (str) {
      return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    }
  }

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
      <Flex>
        <Box width={"100%"} backgroundColor={"#f5f5f5"} height={150}>
          <img
            src={
              selectCover.length > 0
                ? URL.createObjectURL(selectCover[0])
                : props.pharmacy.coverPhoto
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
          <UploadImage image={uploadCoverPhoto}>
            <Flex
              justifySelf={"flex-end"}
              alignSelf={"flex-end"}
              border={"1px #B4D4FF solid"}
              marginLeft={-100}
              mb={1}
              justifyContent={"center"}
              width={50}
              borderRadius={3}
            >
              <MdEdit color="#B4D4FF" size={20} />
            </Flex>
          </UploadImage>
        )}
      </Flex>

      <Flex height={100} p={1}>
        <Flex>
          <Box width={150} height={150} borderRadius={"50%"} marginTop={-50}>
            <img
              src={
                selectLogo.length > 0
                  ? URL.createObjectURL(selectLogo[0])
                  : props.pharmacy.pharmacyLogo
              }
              alt="pharmacy logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Box>
          {props.editPharmacyData && (
            <UploadImage image={uploadLogo}>
              <Flex
                justifySelf={"flex-end"}
                alignSelf={"flex-end"}
                border={"1px #B4D4FF solid"}
                //   p={1}
                justifyContent={"center"}
                width={50}
                borderRadius={3}
              >
                <MdEdit color="#B4D4FF" size={20} />
              </Flex>
            </UploadImage>
          )}
        </Flex>

        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          marginLeft={"5%"}
        >
          <Text fontFamily={"poppins"} fontSize={5}>
            {props.pharmacy.name}
          </Text>
          <Text fontFamily={"poppins"} fontSize={5}>
            {props.pharmacy.email}
          </Text>
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
            <EditPharmacyAccountComponent
              pharmacy={props.pharmacy}
              setEdit={props.setEditPharmacyData}
              handleUpdate={props.handleUpdate}
            />
          ) : props.editPharmacyOPerationalData ? (
            <EditPharmacyOperationsComponent
              pharmacy={props.pharmacy}
              setEdit={props.seteditPharmacyOPerationalData}
              handleUpdateOperations={props.handleUpdateOperations}
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
                <GridBox lable={"Name"} value={props.pharmacy.name} />
                <GridBox lable={"Email"} value={props.pharmacy.email} />
                <GridBox lable={"Phone"} value={props.pharmacy.phoneNumber} />
                <GridBox lable={"State"} value={props.pharmacy.state} />
                <GridBox lable={"city"} value={props.pharmacy.city} />
                <GridBox
                  lable={"Opretional Hours"}
                  value={props.pharmacy.operationalHours}
                />
                <GridBox
                  lable={"Facebook"}
                  value={truncateString(
                    props.pharmacy.socialMedia?.facebook,
                    20
                  )}
                />
                <GridBox
                  lable={"Telegram"}
                  value={truncateString(
                    props.pharmacy.socialMedia?.telegram,
                    20
                  )}
                />{" "}
                <GridBox
                  lable={"Linkedin"}
                  value={truncateString(
                    props.pharmacy.socialMedia?.linkedin,
                    20
                  )}
                />
              </Grid>
              <Flex width={"100%"} justifyContent={"space-between"} p={1}>
                <Flex alignItems={"center"} style={{ gap: 10 }}>
                  <Text fontFamily={"poppins"} fontSize={5}>
                    Deliver Information
                  </Text>
                  <Text
                    fontSize={3}
                    fontFamily={"poppins"}
                    backgroundColor={
                      props.pharmacy.isDeliveryAvailable ? "#B4D4FF" : "#f5f5f5"
                    }
                    borderRadius={1}
                    padding={"2px"}
                  >
                    {props.pharmacy.isDeliveryAvailable
                      ? "Enabled"
                      : "Disabled"}
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
                  lable={"Delivery Waiting Time"}
                  value={props.pharmacy.deliveryWaitingTime}
                />
                <GridBox
                  lable={"Delivery Times"}
                  value={props.pharmacy.deliveryTimes}
                />
                <GridBox
                  lable={"Delivery Area"}
                  value={props.pharmacy.deliveryArea}
                />
                <GridBox
                  lable={"Delivery Fee in km"}
                  value={props.pharmacy.deliveryFeeinKm}
                />
                <GridBox
                  lable={"Fast Delivery Fee"}
                  value={props.pharmacy.fastDeliveryFee}
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
