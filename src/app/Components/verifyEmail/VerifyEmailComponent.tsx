import { useEffect } from "react";
import { Box, Flex, Text } from "../ui/Blocks";
import { theme } from "../../../styles/theme";
import emailIcon from '../../../assets/brands/emailIcon.png'
const VerifyEmailComponent = () => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={theme.colors.dark.black[5]}
      height={"100vh"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={["100%",'80%','60%']}
        p={2}
        height={"500px"}
        backgroundColor={"#ffff"} borderRadius={'8px'}
      >
        <Box>
          <img
            src={emailIcon}
            alt="YEmail icon" width={150} height={150}
          />
        </Box>
        <Text fontFamily={"poppins"} fontSize={7} fontWeight={"bold"}>
          Verify Your Email
        </Text>
        <Text fontFamily={"poppins"} fontSize={5}>
          Thank you for signing up! To complete your registration, please check
          your email for a verification link.
        </Text>
      </Flex>
    </Flex>
  );
};

export default VerifyEmailComponent;
