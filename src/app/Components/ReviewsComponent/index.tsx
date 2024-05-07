import { Rating } from "react-simple-star-rating";
import { Flex, P, Text } from "../ui/Blocks";
import image from "assets/brands/verified.png";
import DonatChart from "../ui/DonatChart";
import { ReviewComponentProps } from "./types";
import Paginate from "../ui/Pagination/Paginate";
const ReviewsComponent = (props: ReviewComponentProps) => {
  return (
    <Flex
      margin={1}
      backgroundColor={"#ffff"}
      width={"100%"}
      flexDirection={"column"}
      p={2}
      minHeight={"100vh"}
      borderRadius={1}
      alignItems={"center"}
    >
      <Flex justifyContent={"space-between"} width={"100%"}>
        <Text fontFamily={"poppins"} fontSize={6}>
          Reviews
        </Text>
        <Text fontFamily={"poppins"}>filter</Text>
      </Flex>
      <Flex
        p={1}
        borderBottom={"1px solid #f5f5f5"}
        justifyContent={"space-between"}
        width={["100%", "90%"]}
        style={{ gap: 5 }}
        flexDirection={["column", "row"]}
      >
        <Flex
          height={100}
          borderRadius={1}
          width={["100%", "30%"]}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontFamily={"poppins"}>Total Reviews</Text>
          <Text fontFamily={"poppins"} fontSize={6} fontWeight={"bold"}>
            {props.totalDocuments}
          </Text>
          <Text fontFamily={"poppins"} fontSize={1}>
            Total Reviews this year
          </Text>
        </Flex>

        <Flex
          height={100}
          borderRadius={1}
          width={["100%", "30%"]}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          borderLeft={"1px solid #f5f5f5"}
          borderRight={"1px solid #f5f5f5"}
        >
          <Text fontFamily={"poppins"}>Average Rating</Text>
          <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Text fontFamily={"poppins"} fontSize={6} px={1}>
              {props.pharmacy.avgRating}
            </Text>
            <Rating
              readonly
              allowFraction
              initialValue={props.pharmacy.avgRating}
              size={25}
            />
          </Flex>
          <Text fontFamily={"poppins"} fontSize={1}>
            Average Rating this year
          </Text>
        </Flex>
        <Flex
          height={100}
          borderRadius={1}
          width={["100%", "30%"]}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <DonatChart />
        </Flex>
      </Flex>
      {/* break--------- */}
      <Flex width={["100%", "90%"]} flexDirection={"column"}>
        {props.reviews?.map((item) => (
          <Flex
            justifyContent={"space-between"}
            p={1}
            flexDirection={["column", "column", "row"]}
            borderBottom={"1px solid #f5f5f5"}
            style={{ gap: 10 }}
          >
            <Flex
              width={["100%", "30%"]}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={["column", "row"]}
              p={1}
            >
              <Flex p={1}>
                <img
                  src={image}
                  height={50}
                  width={50}
                  style={{ borderRadius: "4px" }}
                />
              </Flex>
              <Flex flexDirection={"column"} flexWrap={"wrap"}>
                <Text fontFamily={"poppins"} fontSize={5}>
                  {item.customer.name}
                </Text>{" "}
                <Text fontFamily={"poppins"} fontSize={1}>
                  {item.customer.email}
                </Text>{" "}
              </Flex>
            </Flex>
            <Flex width={["100%", "70%"]} flexDirection={"column"} p={1}>
              <Flex width={"100%"} alignItems={"center"}>
                <Text fontFamily={"poppins"} fontSize={4} px={1}>
                  {item.rating.toFixed(1)}
                </Text>
                <Rating
                  readonly
                  allowFraction
                  initialValue={item.rating}
                  size={15}
                />
                <Text fontFamily={"poppins"} fontSize={2} px={1}>
                  {new Date(item.createdAt).toDateString()}
                </Text>
              </Flex>
              <P fontFamily={"poppins"} fontSize={2}>
                {item.feedback}
              </P>
            </Flex>
          </Flex>
        ))}
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
export default ReviewsComponent;
