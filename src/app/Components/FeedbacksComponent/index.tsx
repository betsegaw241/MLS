import { Button, Flex, Text } from "../ui/Blocks";
import complaint from "../../../assets/icons/complaint.png";
import idea from "../../../assets/icons/idea.png";
import question from "../../../assets/icons/question.png";
import Paginate from "../ui/Pagination/Paginate";
import Dropdown from "../ui/Blocks/Dropdown";
import { useState } from "react";
import { FeedbackComponentProps } from "./types";
import { useNavigate } from "react-router";
import { RiFilterOffFill } from "react-icons/ri";

const FeedbacksComponent = (props: FeedbackComponentProps) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const FeedBackTypes = [
    { label: "Complaint", value: "complaint" },
    { label: "Suggestion", value: "suggestion" },
    { label: "Question", value: "question" },
  ];
  const Role = [
    { label: "Customer", value: "customer" },
    { label: "Pharmacist", value: "pharmacist" },
  ];
  return (
    <Flex
      width={"100%"}
      backgroundColor={"#ffff"}
      m={1}
      borderRadius={1}
      p={1}
      flexDirection={"column"}
      minHeight={"100vh"}
    >
      <Text fontFamily={"poppins"} fontSize={6}>
        feedback
      </Text>
      <Flex width={"100%"} flexDirection={"column"} style={{ gap: 10 }}>
        <Flex
          style={{ gap: 10 }}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Text fontFamily={"poppins"} p={1}>
            Filter by:
          </Text>
          <Dropdown
            options={Role}
            label={"Role"}
            handleChange={props.handleFilterByRole}
          />

          <Dropdown
            options={FeedBackTypes}
            label={"Type"}
            handleChange={props.handleFilterType}
          />
          {props.reset ? (
            <Flex
              p={1}
              alignItems={"center"}
              style={{ cursor: "pointer" }}
              onClick={() => props.resetFilter()}
            >
              <RiFilterOffFill />
              <Text fontFamily={"poppins"}>Reset</Text>
            </Flex>
          ) : (
            <></>
          )}
        </Flex>

        <Flex width={"100%"} flexDirection={"column"} style={{ gap: 10 }}>
          {props.feedbacks?.map((item, index) => (
            <Flex
              key={index}
              alignItems={"center"}
              background={" linear-gradient(to right, #fff, #F7FAFF)"}
              p={1}
              borderRadius={1}
              style={{ gap: 20, cursor: "pointer" }}
              onClick={() => navigate(`/feedbackdetail/${item._id}`)}
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
                <Flex flexDirection={"column"}>
                  <Flex
                    alignContent={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text fontFamily={"poppins"} fontSize={4}>
                      {item.user?.name}
                    </Text>
                    <Text fontFamily={"poppins"} fontSize={1}>
                      {new Date(item.createdAt).toDateString()}
                    </Text>
                  </Flex>

                  <Text fontFamily={"poppins"} fontSize={1}>
                    {item.user?.role}
                  </Text>
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                >
                  <Text fontFamily={"poppins"}>{item.title}</Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex justifyContent={"flex-end"} marginRight={15}>
          <Paginate
            pages={props.totalPages}
            handlePageChange={props.handlePageChange}
            page={props.page}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeedbacksComponent;
