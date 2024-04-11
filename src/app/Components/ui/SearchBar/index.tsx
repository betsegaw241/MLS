import { Button, Flex } from "../Blocks";
import {Input} from "../Blocks/Input";
import { CiSearch } from "react-icons/ci";

interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const Search: React.FC<SearchProps> = ({ onChange, onClick }) => {
  return (
    <Flex>
      <Flex backgroundColor={"#ffff"} p={1} borderRadius={"8px"}>
        <Input
          name={"search"}
          fontFamily={'poppins'}
          type={""}
          placeholder="Search..."
          border={"none"}
          onChange={onChange}
          onClick={onClick}
        />
        <CiSearch />
      </Flex>
      <Button  p={1} ml={1} borderRadius={"8px"} fontSize={4} color={'#485C75'} fontFamily={'poppins'}>
        search
      </Button>
    </Flex>
  );
};







export default Search;