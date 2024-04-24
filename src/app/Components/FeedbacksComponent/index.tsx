import { Button, Flex, Text } from "../ui/Blocks";
import complaint from "../../../assets/icons/complaint.png";
import idea from "../../../assets/icons/idea.png";
import question from "../../../assets/icons/question.png";
import deleteicon from "../../../assets/icons/delete.png";
import Paginate from "../ui/Pagination/Paginate";
import Dropdown from "../ui/Blocks/Dropdown";
import Modal from "../ui/Modal";
import { useState } from "react";
import { FeedbackComponentProps } from "./types";

const FeedbacksComponent = (props: FeedbackComponentProps) => {
  const [showModal, setShowModal] = useState(false);

 
  const FeedBackTypes = [
    { label: "Complaint", value: "complaint" },
    { label: "Suggestion", value: "suggestion" },
    { label: "Question", value: "question" },
  ];
  const FeedBackStatus = [
    { label: "Pending", value: "pending" },
    { label: "Replayed", value: "replayed" },
    { label: "Closed", value: "closed" },
  ];
  return (
    <Flex
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      p={1}
      flexDirection={"column"}
      height={"100vh"}
    >
      <Text fontFamily={"poppins"} fontSize={6}>
        feedback
      </Text>
      <Flex width={"100%"} flexDirection={"column"} style={{ gap: 10 }}>
        <Flex
          style={{ gap: 10 }}
          justifyContent={"flex-end"}
          //   p={1}
          alignItems={"center"}
        >
          <Text fontFamily={"poppins"} p={1}>
            Filter by:
          </Text>
          <Dropdown
            options={FeedBackStatus}
            label={"Status"}
            handleChange={props.handleFilterStatus}
          />

          <Dropdown
            options={FeedBackTypes}
            label={"Type"}
            handleChange={props.handleFilterType}
          />
        </Flex>

        <Flex width={"100%"} flexDirection={"column"} style={{ gap: 10 }}>
          {props.feedbacks.map((item, index) => (
            <Flex
              key={index}
              alignItems={"center"}
              background={" linear-gradient(to right, #fff, #F7FAFF)"}
              p={1}
              borderRadius={1}
              style={{ gap: 20 }}
              onClick={() => console.log("hello")}
            >
              <Flex>
                <img
                  src={
                    item.type == "complaint"
                      ? complaint
                      : item.type == "suggestion"
                      ? idea
                      : question
                  }
                  alt=""
                  width={25}
                  height={25}
                />
              </Flex>
              <Flex flexDirection={"column"} width={"90%"}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                >
                  <Text fontFamily={"poppins"}>{item.title}</Text>
                  <Flex
                    style={{ gap: 10 }}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text fontFamily={"poppins"} fontSize={1}>
                      {new Date(item.createdAt).toDateString()}
                    </Text>
                    <Text fontSize={2} fontFamily={"poppins"}>
                      {item.status}
                    </Text>
                  </Flex>
                </Flex>

                <Flex justifyContent={"space-between"}>
                  <Flex width={"80%"}>
                    <Text fontFamily={"poppins"} fontSize={1}>
                      {item.content}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                marginLeft={"1%"}
                style={{ cursor: "pointer" }}
                onClick={() => setShowModal(!showModal)}
              >
                <img
                  src={deleteicon}
                  alt="delete icon"
                  width={20}
                  height={20}
                />
              </Flex>
            </Flex>
          ))}
        </Flex>
        {/* {props.totalPages > 1  &&    } */}
        <Flex justifyContent={"flex-end"} marginRight={15}>
          <Paginate
            pages={props.totalPages}
            handlePageChange={props.handlePageChange}
            page={props.page}
          />
        </Flex>
      </Flex>
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
              >
                Conform
              </Button>
              <Button
                width={"40%"}
                fontFamily={"poppins"}
                fontSize={5}
                p={1}
                borderRadius={"4px"}
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

export default FeedbacksComponent;
