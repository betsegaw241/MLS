import { useEffect } from "react";
import { Box, Button, Flex, Text } from "../ui/Blocks";
import { HomePageProps } from "./types";
import Header from "../ui/Header";
import { useNavigate } from "react-router";
import LoadingPage from "utils/LoadingPage";

const HomePageComponent = (props: HomePageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <>
      <Header />
      <Flex
        backgroundColor={"#f5f5f5"}
        width={"100vw"}
        height={"100vh"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        margin={"0px"}
        flexDirection={"column"}
        style={{ gap: 5 }}
      >
        <Flex
          backgroundColor={"#ffff"}
          width={["100%", "80%"]}
          marginTop={"80px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderRadius={"5px"}
          paddingY={3}
        >
          <Flex ml={1}>
            <Text fontFamily={"poppins"} fontSize={6}>
              My pharmacy
            </Text>
          </Flex>
          <Flex mr={1}>
            <Button
              variant="primary"
              borderRadius={"8px"}
              p={1}
              fontFamily={"poppins"}
              fontSize={5}
              onClick={() => navigate("/addPharmacy")}
            >
              Add New Pharmacy
            </Button>
          </Flex>
        </Flex>

        {props.loading ? (
          <LoadingPage />
        ) : (
          <Flex
            backgroundColor={"#ffff"}
            width={["100%", "80%"]}
            height={"500px"}
            paddingBottom={4}
            borderRadius={"5px"}
            flexDirection={"column"}
          >
            {props.pharmacies?.map((pharmacy) => (
              <Flex
                key={pharmacy._id}
                backgroundColor={"#f5f5f5"}
                flexDirection={"row"}
                m={1}
                p={2}
                style={{ gap: 20 }}
                alignItems={"center"}
                justifyContent={"space-around"}
                borderRadius={"8px"}
                onClick={() =>
                  navigate(`/pharmacist/dashboard/${pharmacy._id}`)
                }
              >
                <Flex alignItems={"center"} style={{ gap: 10 }}>
                  <Box
                    width={8}
                    backgroundColor={"#f5f5"}
                    height={8}
                    borderRadius={"50%"}
                  >
                    {" "}
                  </Box>
                  {/* <img
                 src={pharmacy.logo}
                ></img> */}
                  <Text fontFamily={"poppins"} fontSize={6}>
                    {pharmacy.name}
                  </Text>
                </Flex>

                <Flex>
                  <Text fontFamily={"poppins"} fontSize={3}>
                    {pharmacy.email}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontFamily={"poppins"} fontSize={3}>
                    {pharmacy.phoneNumber}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </>
  );
};
export default HomePageComponent;
