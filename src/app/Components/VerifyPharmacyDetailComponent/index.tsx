import { theme } from "../../../styles/theme";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from "react";
import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineZoomOut } from "react-icons/md";
import { MdZoomInMap } from "react-icons/md";
import { SlCloudDownload } from "react-icons/sl";
import { VerifyPharmacyDetailComponentProps } from "./types";

const VerifyPharmacyDetailComponent = (
  props: VerifyPharmacyDetailComponentProps
) => {
  const handleDownload = (url: string) => {
    const filename = "image.jpg"; // Change the filename as needed

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
  };

  const renderViewer = (document: any) => {
    return (
      <Flex
        border={"1px solid #4444"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        flexDirection={"column"}
      >
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <Flex
                marginBottom={1}
                borderBottom={"1px solid #4444"}
                width={"100%"}
                justifyContent={"flex-end"}
              >
                <Flex p={1} onClick={() => handleDownload(document)}>
                  <SlCloudDownload size={20} />
                </Flex>
                <Flex marginRight={10}>
                  <Flex p={1} onClick={() => zoomIn()}>
                    <MdOutlineZoomIn size={20} />
                  </Flex>
                  <Flex p={1} onClick={() => zoomOut()}>
                    <MdOutlineZoomOut size={20} />
                  </Flex>
                  <Flex p={1} onClick={() => resetTransform()}>
                    <MdZoomInMap size={20} />
                  </Flex>
                </Flex>
              </Flex>

              <TransformComponent>
                <Flex width={[300, 500, 700]}>
                  <img
                    src={document}
                    alt="Image"
                    style={{
                      width: "100%",
                    }}
                  />
                </Flex>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Flex>
    );
  };

  return (
    <Flex
      m={1}
      borderRadius={1}
      p={1}
      backgroundColor={theme.colors.light.white[0]}
      width={"100%"}
      flexDirection={"column"}
    >
      <Flex alignItems={"center"} style={{ gap: 50 }}>
        <Text fontFamily={"poppins"} fontSize={6}>
          Verify Pharmacy Details
        </Text>
       
      </Flex>
      <Text fontFamily={"poppins"} fontSize={5} p={1}>
        Pharmacist Information
      </Text>

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
        <GridBox lable={"Name"} value={props.pharmacy?.pharmacist?.name} />
        <GridBox
          lable={"Phone"}
          value={props.pharmacy?.pharmacist?.phoneNumber}
        />
        <GridBox lable={"Email"} value={props.pharmacy?.pharmacist?.email} />
      </Grid>
      <Text fontFamily={"poppins"} fontSize={5} p={1}>
        Pharmacy Information
      </Text>

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
        <GridBox lable={"Pharmacy Name"} value={props.pharmacy.name} />
        <GridBox lable={"Pharmacy Phone"} value={props.pharmacy.phoneNumber} />
        <GridBox lable={"Pharmacy Email"} value={props.pharmacy.email} />
        <GridBox lable={"Adress"} value={props.pharmacy.address} />
        <GridBox lable={"Status"} value={props.pharmacy.status} />
      </Grid>

      <Text fontFamily={"poppins"} fontSize={5} p={1}>
        Pharmacy Lisense
      </Text>
      <Flex flexDirection="column" alignItems="center">
        {renderViewer(props.pharmacy?.pharmacist?.pharmacistLicense)}
      </Flex>
      <Text fontFamily={"poppins"} fontSize={5} p={1}>
        Pharmacist Lisense
      </Text>
      <Flex flexDirection="column" alignItems="center">
        {renderViewer(props.pharmacy?.pharmacyLicense)}
      </Flex>

      {props.pharmacy?.status == "pending" ||
      props.pharmacy?.status == "unassigned" ? (
        <Flex
          p={1}
          paddingTop={50}
          justifyContent={"flex-end"}
          style={{ gap: 30 }}
        >
          <Button
            variant="secondary"
            p={1}
            borderRadius={1}
            fontFamily={"poppins"}
            fontSize={5}
            width={200}
            onClick={() => props.handleVerify("approved")}
          >
            Approve
          </Button>
          <Button
            variant="warning"
            p={1}
            borderRadius={1}
            fontFamily={"poppins"}
            fontSize={5}
            width={200}
            onClick={() => props.handleVerify("rejected")}
          >
            Reject
          </Button>
        </Flex>
      ) : props.pharmacy?.status == "approved" ? (
        <Flex
          p={1}
          paddingTop={50}
          justifyContent={"flex-end"}
          style={{ gap: 30 }}
        >
          <Button
            variant="warning"
            p={1}
            borderRadius={1}
            fontFamily={"poppins"}
            fontSize={5}
            width={200}
            onClick={() => props.handleVerify("deactivated")}
          >
            Approve
          </Button>
        </Flex>
      ) : props.pharmacy?.status == "rejected" ||
        props.pharmacy?.status == "deactivated" ? (
        <Flex
          p={1}
          paddingTop={50}
          justifyContent={"flex-end"}
          style={{ gap: 30 }}
        >
          <Button
            variant="warning"
            p={1}
            borderRadius={1}
            fontFamily={"poppins"}
            fontSize={5}
            width={200}
            onClick={() => props.handleVerify("approved")}
          >
            Approve
          </Button>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};
export default VerifyPharmacyDetailComponent;
// enum: ['pending', 'approved', 'rejected', 'deactivated', 'unassigned'],
