import { Box, Flex, Grid, P, Text } from "../ui/Blocks";
import cover21 from "assets/images/cover21.jpg";
import logo from "assets/brands/pharmacyLogo.png";
import { GridBox } from "../ui/Blocks/GridBox";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import EditPharmacyAccountComponent from "./EditPharmacyAccountComponent";
import UploadImage from "../ui/ImageUpload";
import EditPharmacyOperationsComponent from "./EditPharmacyOperationComponent";

const PharmacyAccountComponent = () => {
  const [editPharmacyData, setEditPharmacyData] = useState(false);
  const [editPharmacyOPerationalData, seteditPharmacyOPerationalData] =
    useState(false);
  const [selectCover, setSelectCover] = useState<File[]>([]);
  const [selectLogo, setSelectLogo] = useState<File[]>([]);
  const uploadCoverPhoto = (file: File[]) => {
    setSelectCover(file);
  };
  const uploadLogo = (file: File[]) => {
    setSelectLogo(file);
  };
  console.log(selectCover);
  console.log(selectLogo);

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
                : cover21
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
        {editPharmacyData && (
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
                  : logo
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
          {editPharmacyData && (
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

        <Flex flexDirection={"column"} justifyContent={"center"} marginLeft={'5%'}>
          <Text fontFamily={"poppins"} fontSize={5}>
            pharmacy Name
          </Text>
          <Text fontFamily={"poppins"} fontSize={5}>
            email@pharmacy.com
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
          {editPharmacyData ? (
            <EditPharmacyAccountComponent setEdit={setEditPharmacyData} />
          ) : editPharmacyOPerationalData ? (
            <EditPharmacyOperationsComponent
              setEdit={seteditPharmacyOPerationalData}
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
                  onClick={() => setEditPharmacyData(!editPharmacyData)}
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
                <GridBox lable={"Name"} value={"Black Angle"} />
                <GridBox lable={"Email"} value={"zuriya@magic.com"} />
                <GridBox lable={"Phone"} value={"0912334556"} />
                <GridBox lable={"State"} value={"Wolkite"} />
                <GridBox lable={"city"} value={"Wolkite"} />
                <GridBox lable={"Social Media"} value={"facebook"} />
                <GridBox lable={"Opretional Hours"} value={"2PM-3AM"} />
                <GridBox lable={"Stock level"} value={"400"} />
              </Grid>
              <Flex width={"100%"} justifyContent={"space-between"} p={1}>
                <Flex alignItems={"center"} style={{ gap: 10 }}>
                  <Text fontFamily={"poppins"} fontSize={5}>
                    Deliver Information
                  </Text>
                  <Text
                    fontSize={3}
                    fontFamily={"poppins"}
                    backgroundColor={"#B4D4FF"}
                    borderRadius={1}
                    padding={"2px"}
                  >
                    Enabled
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
                    seteditPharmacyOPerationalData(!editPharmacyOPerationalData)
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
                <GridBox lable={"Delivery Waiting Time"} value={"2days"} />
                <GridBox lable={"Delivery Times"} value={"400"} />
                <GridBox lable={"Delivery Area"} value={"400"} />
                <GridBox lable={"Delivery Fee in km"} value={"5 birr"} />
                <GridBox lable={"Fast Delivery Fee"} value={"400"} />
              </Grid>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PharmacyAccountComponent;
