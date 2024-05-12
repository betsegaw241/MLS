import { useEffect, useRef, useState } from "react";
import { Box, Flex, Text } from "../ui/Blocks";
import { useNavigate } from "react-router";
import { Rating } from "react-simple-star-rating";
import imge from "assets/brands/verified.png";
import { IoIosCall, IoMdMail } from "react-icons/io";
import fb from "assets/icons/facebook.png";
import tg from "assets/icons/telegram.png";
import ln from "assets/icons/linkedin.png";
import gp from "assets/icons/google-play.png";
import aps from "assets/icons/app-store.png";
import doc from "assets/images/doctor.png";

const LandingComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  const testimonialsData = [
    { id: "1", text: "Testimonial 1" },
    { id: "2", text: "Testimonial 2" },
    { id: "3", text: "Testimonial 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex width={"100%"} minHeight={"100vh"} flexDirection={"column"}>
      <Flex
        width={"100%"}
        background={"#fff"}
        height={60}
        alignItems={"center"}
        position={"fixed"}
        top={"0px"}
        justifyContent={"space-between"}
      >
        <Flex px={5} width={"100%"} style={{ gap: 20 }} alignItems={"center"}>
          <Text fontFamily={"lobster"} fontSize={10} color={"#0B60B0"}>
            MedicineLocator
          </Text>
          {/* <Text fontFamily={"poppins"}>why us ?</Text> */}
        </Flex>
        <Flex
          px={5}
          width={"100%"}
          justifyContent={"flex-end"}
          style={{ gap: 20 }}
          alignItems={"center"}
        >
          <Text
            fontFamily={"poppins"}
            p={1}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Text>
          <Text
            fontFamily={"poppins"}
            p={1}
            backgroundColor={"#065AD8"}
            style={{ cursor: "pointer" }}
            borderRadius={1}
            color={"#fff"}
          >
            Register Your Pharmacy
          </Text>
        </Flex>
      </Flex>
      <Flex
        style={{ height: `calc(100vh - 60px)` }}
        pt={70}
        px={1}
        justifyContent={"center"}
        backgroundColor={"rgba(202, 240, 248, 0.09)"}
      >
        <Flex
          width={"35%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          p={1}
        >
          <Text fontSize={10} fontWeight={"bold"} fontFamily={"poppins"}>
            Help us to build the future of healthcare
          </Text>
          <Text fontFamily={"poppins"} fontSize={4} py={5}>
            A medicine locator system is a software application that allows
            users to search for and locate pharmacies that stock the medications
            they need. It can also provide information on pricing, availability,
            and directions to nearby pharmacies.
          </Text>
          <Flex
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"poppins"}
              p={1}
              backgroundColor={"#065AD8"}
              style={{ cursor: "pointer" }}
              borderRadius={1}
              color={"#fff"}
            >
              Register Your Pharmacy
            </Text>

            <Text fontFamily={"poppins"} style={{ cursor: "pointer" }}>
              Read more &gt;
            </Text>
          </Flex>
        </Flex>
        <Flex width={"65%"} flexDirection={"column"} alignItems={"center"}>
          <Flex
            position={"relative"}
            background={"rgba(11, 96, 176, 0.1)"}
            width={600}
            height={600}
            zIndex={-1}
            borderRadius={"50%"}
          >
            <img
              src={doc}
              style={{ width: 500, marginTop: "auto", height: 500 }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        background={"#0B60B0"}
        height={"100vh"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Flex
          width={"45%"}
          height={"90vh"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Flex
            backgroundColor={"rgba(202, 240, 248, 0.9)"}
            borderRadius={1}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"70%"}
            height={"70vh"}
            p={2}
          >
            <Text
              fontFamily={"poppins"}
              fontSize={6}
              color={"#1E0342"}
              fontWeight={"bold"}
              p={1}
            >
              Get the App
            </Text>
            <Text fontFamily={"poppins"} color={"#1E0342"} fontWeight={"bold"}>
              Get Our App from Google Play and the App Store
            </Text>
            <Text
              fontFamily={"poppins"}
              color={"#1E0342"}
              fontSize={3}
              p={1}
              textAlign={"center"}
            >
              Are you in need of medication or looking for a nearby pharmacy?
              Our app simplifies the process by allowing you to effortlessly
              locate pharmacies in your area. With just a few taps, you can find
              the closest pharmacies to your current location, ensuring quick
              and convenient access to the medication you need.
            </Text>
            <Flex style={{ gap: 10 }} p={1}>
              <img src={gp} width={50} alt="goole play link" />
              <img src={aps} width={50} alt="app store link" />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={"50%"}
          // background={"rgba(255, 255, 255, 0.08)"}
          borderRadius={1}
          height={"70vh"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontFamily={"lato"} color={"#fff"} fontSize={7}>
            About Medicine Locator System
          </Text>
          <Text
            fontFamily={"poppins"}
            color={"#fff"}
            fontSize={5}
            textAlign={"center"}
            p={2}
          >
            A medicine locator system is a software application that allows
            users to search for and locate pharmacies that stock the medications
            they need. It can also provide information on pricing, availability,
            and directions to nearby pharmacies. Medicine locator systems can be
            a valuable resource for patients who are struggling to find the
            medications they need, and they can help to improve access to
            healthcare by making it easier for patients to find and afford the
            medications they need.
          </Text>
          
        </Flex>
      </Flex>

      <Flex
        backgroundColor={"rgba(202, 240, 248, 0.09)"}
        height={"100vh"}
        justifyContent={"space-around"}
        alignItems={"center"}
        overflow={"hidden"}
      >
        <Flex
          width={"20%"}
          height={300}
          borderRadius={1}
          justifyContent={"center"}
          alignItems={"center"}
          background={"#f5f5f5"}
          flexDirection={"column"}
          p={1}
          boxShadow={"-2px 0px 20px -2px rgba(0,0,0,0.2)"}
        >
          <img src={imge} width={60} />
          <Text fontFamily={"lato"} fontSize={6}>
            Antoni Joshua
          </Text>
          <Rating readonly allowFraction initialValue={5} size={20} />
          <Text fontFamily={"lato"} textAlign={"center"} fontSize={4}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            eligendi quae quos suscipit iusto! Reprehenderit maxime, quas rerum
            necessitatibus iure quam voluptatibus recusandae dolore impedit,
            consectetur soluta minus hic quidem.
          </Text>
        </Flex>
        <Flex
          width={"30%"}
          height={300}
          borderRadius={1}
          justifyContent={"center"}
          alignItems={"center"}
          background={"#f5f5f5"}
          flexDirection={"column"}
          p={1}
          boxShadow={"-2px 0px 20px -2px rgba(0,0,0,0.2)"}
        >
          <img src={imge} width={60} />
          <Text fontFamily={"poppins"} fontSize={6}>
            Fabrizo Luwi
          </Text>
          <Rating readonly allowFraction initialValue={4.5} size={20} />
          <Text fontFamily={"poppins"} textAlign={"center"} fontSize={3} py={2}>
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            eligendi quae quos suscipit iusto! Reprehenderit maxime, quas rerum
            necessitatibus iure quam voluptatibus recusandae dolore impedit,
            consectetur soluta minus hic quidem."
          </Text>
        </Flex>
        <Flex
          width={"20%"}
          height={300}
          borderRadius={1}
          justifyContent={"center"}
          alignItems={"center"}
          background={"#f5f5f5"}
          flexDirection={"column"}
          p={1}
          boxShadow={"-2px 0px 20px -2px rgba(0,0,0,0.2)"}
        >
          <img src={imge} width={60} />
          <Text fontFamily={"poppins"} fontSize={6}>
            Fabrizo Luwi
          </Text>
          <Rating readonly allowFraction initialValue={4.5} size={20} />
          <Text fontFamily={"poppins"} textAlign={"center"} fontSize={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            eligendi quae quos suscipit iusto! Reprehenderit maxime, quas rerum
            necessitatibus iure quam voluptatibus recusandae dolore impedit,
            consectetur soluta minus hic quidem.
          </Text>
        </Flex>
      </Flex>

      <Flex
        background={"#070F2B"}
        height={"20vh"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"} style={{ gap: 10 }}>
          <Text fontFamily={"lobster"} fontSize={10} color={"#fff"}>
            MedicineLocator
          </Text>
        </Flex>
        <Flex>
          <Text fontFamily={"poppins"} fontSize={6} color={"#fff"}>
            About us
          </Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          // alignItems={"center"}
        >
          <Text fontFamily={"poppins"} fontSize={6} color={"#fff"}>
            Get Help
          </Text>
          <Flex alignItems={"center"} style={{ gap: 5 }}>
            <IoIosCall color={"#fff"} />

            <Text fontFamily={"poppins"} fontSize={2} color={"#fff"}>
              +251900220022
            </Text>
          </Flex>
          <Flex alignItems={"center"} style={{ gap: 5 }}>
            <IoMdMail color={"#fff"} />

            <Text fontFamily={"poppins"} fontSize={2} color={"#fff"}>
              medicilocator.help@mail.com
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Text fontFamily={"poppins"} fontSize={6} color={"#fff"}>
            community
          </Text>
          <Flex p={1} width={"100%"} justifyContent={"space-between"}>
            <img src={fb} width={20} />
            <img src={ln} width={20} />
            <img src={tg} width={20} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default LandingComponent;
