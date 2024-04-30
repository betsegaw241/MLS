import { Box, Flex, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";

const LandingComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        backgroundColor={"#E3E2FF"}
        height={"70px"}
        position={"fixed"}
        py={["0px"]}
        px={["0px"]}
        top={"0px"}
        left={"0px"}
        width={"100%"}
        alignItems={"center"}
      >
        <Flex
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
          paddingX={10}
        >
          <Text
            fontFamily={"poppins"}
            fontSize={6}
            fontWeight={"bold"}
            onClick={() => navigate("/pharmacist/home")}
          >
            Medicine Locator System
          </Text>

          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            style={{ gap: 50 }}
            marginLeft={"auto"}
          >
            <Box>
            
            </Box>
           
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default LandingComponent;
