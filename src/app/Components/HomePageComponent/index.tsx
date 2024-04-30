import { useEffect } from "react";
import { Box, Button, Flex, Grid, Text } from "../ui/Blocks";
import { HomePageProps } from "./types";
import Header from "../ui/Header";
import { useNavigate } from "react-router";
import LoadingPage from "utils/LoadingPage";
import cover from "../../../assets/images/cover.jpeg";
import { IoIosCall, IoIosMail } from "react-icons/io";

const HomePageComponent = (props: HomePageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  console.log(props.pharmacies);
  return (
    <>
      <Header notifications={[]} />
      <Flex
        backgroundColor={"#ffff"}
        // backgroundColor={"#f5f5f5"}
        width={"100vw"}
        height={"100vh"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        margin={"0px"}
        flexDirection={"column"}
        // style={{ gap: 3 }}
      >
        {props.pharmacies?.length > 0 ? (
          <Flex
            width={"90%"}
            marginTop={"70px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderRadius={"5px"}
            paddingY={3}
          >
            <Flex>
              <Text fontFamily={"poppins"} fontSize={6}>
                My pharmacy
              </Text>
            </Flex>
          </Flex>
        ) : (
          <Flex
            width={"90%"}
            marginTop={"70px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderRadius={"5px"}
            paddingY={3}
          >
            <Flex>
              <Button
                variant="primary"
                borderRadius={"8px"}
                p={2}
                fontFamily={"poppins"}
                fontSize={5}
                onClick={() => navigate("/addPharmacy")}
              >
                Register Pharmacy
              </Button>
            </Flex>
          </Flex>
        )}

        {props.loading ? (
          <LoadingPage />
        ) : (
          <Flex
            backgroundColor={"#ffff"}
            width={"80%"}
            paddingBottom={4}
            borderRadius={"5px"}
            flexDirection={"column"}
          >
            <Grid
              // border={"1px solid #f5f5f5f5"}
              borderRadius={0}
              gridColumnGap={"40px"}
              gridRowGap={"15px"}
              gridTemplateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                // "repeat(4, 1fr)",
              ]}
              mb={2}
              p={1}
            >
              {props.pharmacies?.map((pharmacy) => (
                <Flex
                  key={pharmacy._id}
                  border={"1px solid #f5f5f5f5"}
                  flexDirection={"column"}
                  m={1}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                  borderRadius={1}
                  boxShadow={"1px 10px 50px -35px rgba(38,36,38,0.56)"}
                  height={300}
                >
                  <Box
                    width={"100%"}
                    backgroundColor={"#0000"}
                    height={100}
                    borderRadius={1}
                  >
                    <img
                      src={cover}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                  </Box>
                  <Flex
                    style={{ gap: 10 }}
                    flexDirection={"column"}
                    width={"90%"}
                    height={"100%"}
                    p={1}
                  >
                    <Text fontFamily={"poppins"} fontSize={6}>
                      {pharmacy.name}
                    </Text>
                    <Flex alignItems={"center"} style={{ gap: 10 }}>
                      <IoIosMail color="#B4D4FF" size={21} />
                      <Text fontFamily={"poppins"} fontSize={5}>
                        {pharmacy.email}
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} style={{ gap: 10 }}>
                      <IoIosCall color="#B4D4FF" size={21} />
                      <Text fontFamily={"poppins"} fontSize={5}>
                        {pharmacy.phoneNumber}
                      </Text>
                    </Flex>

                    <Flex
                      width={"100%"}
                      justifyContent={"flex-end"}
                      mt={"auto"}
                    >
                      {pharmacy.status == "pending" ? (
                        <Text
                          fontFamily={"poppins"}
                          p={1}
                          backgroundColor={"#f5f5f5"}
                        >
                          pending
                        </Text>
                      ) : (
                        <Text
                          p={1}
                          borderRadius={1}
                          onClick={() =>
                            navigate(`/pharmacist/dashboard/${pharmacy._id}`)
                          }
                          border={"1px #B4D4FF solid"}
                          fontFamily={"poppins"}
                          style={{ cursor: "pointer" }}
                        >
                          Go to Dashboard
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </Flex>
        )}
      </Flex>
    </>
  );
};
export default HomePageComponent;
