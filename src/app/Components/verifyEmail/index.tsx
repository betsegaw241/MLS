import { useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "../ui/Blocks";
import { theme } from "../../../styles/theme";
import emailIcon from "../../../assets/brands/emailIcon.png";
import OtpInput from "react-otp-input";
import emailIcon2 from "../../../assets/brands/verified.png";
import { useNavigate } from "react-router";

const VerifyEmailComponent = (props: any) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  const handleVerify = () => {
    props.onHandleVerify(otp);
  };

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
        width={"90%"}
        p={2}
        height={"550px"}
        backgroundColor={"#ffff"}
        borderRadius={"8px"}
      >
        {true ? (
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={["100%", "80%", "60%"]}
            p={1}
            height={"500px"}
            backgroundColor={"#ffff"}
            borderRadius={"8px"}
          >
            <Box>
              <img
                src={emailIcon2}
                alt="YEmail icon"
                width={150}
                height={150}
              />
            </Box>
            <Text fontFamily={"poppins"} fontSize={7} fontWeight={"bold"}>
              Email Verified!
            </Text>
            <Text fontFamily={"poppins"} fontSize={5}>
              Your email has been successfully verified.
            </Text>
            <Text
              fontFamily={"poppins"}
              fontSize={6}
              p={1}
              style={{ cursor: "pointer" }}
              backgroundColor={"#f5f5f5"}
              borderRadius={1}
              onClick={() => navigate("/login")}
            >
              Go to Login
            </Text>
          </Flex>
        ) : (
          <>
            <Box>
              <img src={emailIcon} alt="YEmail icon" width={150} height={150} />
            </Box>
            <Text fontFamily={"poppins"} fontSize={7} fontWeight={"bold"}>
              Verify Your Email
            </Text>
            <Flex width={"70%"} py={1}>
              <Text fontFamily={"poppins"} fontSize={5}>
                Please check your email for the verification code and enter it
                below to complete the registration process. If you haven't
                received the email, please check your spam folder or request a
                new code.
              </Text>
            </Flex>

            <Flex
              width={"100%"}
              justifyContent={"center"}
              py={1}
              flexDirection={"column"}
              alignItems={"center"}
              style={{ gap: 20 }}
            >
              <OtpInput
                inputStyle={{
                  width: 50,
                  height: 50,
                  fontSize: 25,
                  fontFamily: "poppins",
                }}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span style={{ fontSize: 30 }}>-</span>}
                renderInput={(props) => <input {...props} />}
              />
              <Button
                variant="secondary"
                p={1}
                fontFamily={"poppins"}
                fontSize={5}
                borderRadius={1}
                width={250}
                onClick={handleVerify}
              >
                Verify
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default VerifyEmailComponent;
