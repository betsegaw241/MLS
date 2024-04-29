import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { drugBatch } from "utils/constants";
import { Box, Button, Flex, Grid, P, Text } from "../ui/Blocks";
import { GridBox } from "../ui/Blocks/GridBox";
import { TableHeader } from "../ui/Blocks/Table";
import LoadingPage from "utils/LoadingPage";
import Paginate from "../ui/Pagination/Paginate";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router";
import { FeedbackDetailProps } from "./types";
import Modal from "../ui/Modal";
import { useState } from "react";

const FeedBacksDetailComponent = ({
  feedback,
  handleDeleteFeedback,
}: FeedbackDetailProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <Flex
      margin={2}
      backgroundColor={"#ffff"}
      width={"100%"}
      flexDirection={"column"}
      p={2}
      borderRadius={1}
      minHeight={"calc(100vh - 120px)"}
    >
      <>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={7} color={"#3d3939"} p={1}>
            Feedback
          </Text>
        </Flex>

        <Box borderRadius={0}>
          <Box>
            <Text fontFamily={"poppins"} fontSize={2}>
              User information
            </Text>
            <Grid
              //   border={"1px solid #f5f5f5f5"}
              borderRadius={0}
              gridColumnGap={"40px"}
              gridRowGap={"15px"}
              gridTemplateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              mb={2}
              p={1}
            >
              <GridBox lable={"Name"} value={feedback?.user?.name} />
              <GridBox lable={"Email"} value={feedback?.user?.email} />
              <GridBox
                lable={"cerated at"}
                value={new Date(feedback?.createdAt).toDateString()}
              />
            </Grid>
          </Box>

          <Text fontFamily={"poppins"} fontSize={2}>
            Feedback
          </Text>
          <Flex flexDirection={"column"} width={"100%"}>
            <Text fontFamily={"poppins"} fontSize={6}>
              {feedback.title}
            </Text>
            <Text fontFamily={"poppins"} fontSize={3}>
              {feedback.content}
            </Text>
          </Flex>
          <Flex p={1} width={"100%"} justifyContent={"flex-end"} py={5}>
            <Button
              p={1}
              marginRight={"10%"}
              width={200}
              fontFamily={"poppins"}
              background={"rgba(255, 0, 0, 0.5)"}
              color={"#fff"}
              fontSize={4}
              borderRadius={1}
              onClick={() => setShowModal(true)}
            >
              Delete
            </Button>
          </Flex>
        </Box>
      </>
      {showModal && (
        <Modal
          open={showModal}
          setOpen={() => {
            setShowModal(!showModal);
          }}
        >
          <Flex
            width={["100%", "50%"]}
            justifyContent={"center"}
            backgroundColor={"#fff"}
            p={2}
            borderRadius={1}
            flexDirection={"column"}
          >
            <Text fontFamily={"poppins"} fontSize={6}>
              Are you sure you want to delete this item?
            </Text>
            <Text fontFamily={"poppins"} fontSize={4}>
              This action is permanent and cannot be undone.
            </Text>
            <Flex width={"100%"} justifyContent={"space-around"} p={1}>
              <Button
                width={"40%"}
                fontFamily={"poppins"}
                fontSize={5}
                p={1}
                borderRadius={"4px"}
                style={{ cursor: "pointer" }}
                background={"rgba(255, 0, 0, 0.5)"}
                onClick={() => handleDeleteFeedback()}
                zIndex={100}
              >
                Conform
              </Button>
              <Button
                width={"40%"}
                fontFamily={"poppins"}
                style={{ cursor: "pointer" }}
                fontSize={5}
                p={1}
                borderRadius={"4px"}
                zIndex={100}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
            </Flex>
          </Flex>
        </Modal>
      )}
    </Flex>
  );
};

export default FeedBacksDetailComponent;
