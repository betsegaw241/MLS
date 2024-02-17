import { useEffect } from "react";
import { Box, Button, Flex, Text } from "../ui/Blocks";
import { HomePageProps } from "./types";

const HomePageComponent = (props: HomePageProps) => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <Flex
      backgroundColor={"#f5f5f5"}
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"0px"}
      flexDirection={"column"}
      style={{ gap: 5 }}
    >
      <Flex
        backgroundColor={"#ffff"}
        width={["100%", "80%"]}
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
          >
            Add New Pharmacy
          </Button>
        </Flex>
      </Flex>
      {/* second */}
      <Flex
        backgroundColor={"#ffff"}
        width={["100%", "80%"]}
        height={"500px"}
        paddingBottom={4}
        borderRadius={"5px"}
        flexDirection={"column"}
      >
        <Flex
          backgroundColor={"#f5f5f5"}
          flexDirection={"row"}
          m={1}
          p={2}
          style={{ gap: 20 }}
          alignItems={"center"}
          borderRadius={"8px"}
        >
          <Box
            backgroundColor={"#ffff"}
            width={"50px"}
            height={"50px"}
            borderRadius={"50%"}
          ></Box>
          <Text fontFamily={"poppins"} fontSize={6}>
            Flex Pharmacy
          </Text>
          <Flex>
            <Text fontFamily={"poppins"} fontSize={4}>
              last year
            </Text>
          </Flex>
          <Flex>:</Flex>
        </Flex>
        <Flex
          backgroundColor={"#f5f5f5"}
          flexDirection={"row"}
          m={1}
          p={2}
          style={{ gap: 20 }}
          alignItems={"center"}
          borderRadius={"8px"}
        >
          <Box
            backgroundColor={"#ffff"}
            width={"50px"}
            height={"50px"}
            borderRadius={"50%"}
          ></Box>
          <Text fontFamily={"poppins"} fontSize={6}>
            Flex Pharmacy
          </Text>
          <Flex>
            <Text fontFamily={"poppins"} fontSize={4}>
              last year
            </Text>
          </Flex>
          <Flex>:</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default HomePageComponent;
