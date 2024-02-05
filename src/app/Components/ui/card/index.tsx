import { Box, Text } from "../Blocks"
import { cardProps } from "./types";

const Card = (props: cardProps) => {
  return (
    <Box width={12} height={12}>
      <Text>{props.title}</Text>
    </Box>
  );
};
 export default Card;

