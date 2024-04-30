import { theme } from "../../../styles/theme";
import { Button, Flex, Grid, Text } from "../ui/Blocks";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import report from "../../../assets/Report.pdf";
import id from "../../../assets/lid.jpeg";
import { GridBox } from "../ui/Blocks/GridBox";
import MapComponent from "../ui/MapComponent";
import { useState } from "react";
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
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const getFileExtension = (url: any) => {
    return url.split(".").pop().toLowerCase();
  };

  const docs = [{ uri: report }, { uri: id }];

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
  const getFileTypeFromMIME = async (uri) => {
    try {
      const response = await fetch(uri);
      const contentType = response.headers.get("content-type");
      console.log(contentType);
      if (contentType.includes("application/pdf")) {
        return "pdf";
      } else if (contentType.includes("image")) {
        return "image";
      } else {
        return "unknown";
      }
    } catch (error) {
      console.error("Error fetching MIME type:", error);
      return "unknown";
    }
  };

  const renderViewer = (document: any) => {
    console.log("-----------", getFileTypeFromMIME(document));
    const type = getFileTypeFromMIME(document);
    if (type === "pdf") {
      return (
        <DocViewer
          key={document.uri}
          documents={[document]}
          initialActiveDocument={document}
          pluginRenderers={DocViewerRenderers}
          config={{
            header: {
              disableHeader: true,
              disableFileName: true,
              retainURLParams: false,
            },
            pdfZoom: {
              defaultZoom: 1,
              zoomJump: 0.2,
            },
            pdfVerticalScrollByDefault: false,
          }}
          style={{ border: "1px solid #4444" }}
        />
      );
    }else if (type === "image") {
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
    } else {
      return <Text fontFamily={'poppins'}>Unsupported file format</Text>;
    }
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
          Verify Pharmacy
        </Text>
        <Text
          fontFamily={"poppins"}
          fontSize={3}
          backgroundColor={"#f5f5f5f5"}
          color={"#282E34"}
          borderRadius={"4px"}
        >
          pending
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
        <GridBox lable={"Phone"} value={props.pharmacy?.pharmacist?.name} />
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
        <GridBox lable={"Pharmacy Email"} value={props.pharmacy.address} />
      </Grid>

      <Text fontFamily={"poppins"} fontSize={5} p={1}>
        Pharmacy Lisense
      </Text>
      <Flex flexDirection="column" alignItems="center">
        {renderViewer(props.pharmacy.pharmacistLicense)}
      </Flex>
      <Text fontFamily={"poppins"} fontSize={5} p={1}>
        Pharmacist Lisense
      </Text>
      <Flex flexDirection="column" alignItems="center">
        {renderViewer(docs[1])}
      </Flex>

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
    </Flex>
  );
};
export default VerifyPharmacyDetailComponent;
