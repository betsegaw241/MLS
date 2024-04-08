import { Flex } from "app/Components/ui/Blocks";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoadingPage = () => {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ScaleLoader color="#065AD8"   height={50} width={6} />
    </Flex>
  );
};

export default LoadingPage;
