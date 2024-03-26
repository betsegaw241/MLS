import { Button, Flex } from "../Blocks";
import { InputFields } from "../Blocks/InputField";
import {Input} from "../Blocks/Input";
import { CiSearch } from "react-icons/ci";


const Search = () =>{
return (
  <Flex>
    <Flex backgroundColor={"#ffff"} p={1} borderRadius={"8px"}>
      <Input
        name={"search"}
        type={""}
        placeholder="Search..."
        border={"none"}
        
      />
      <CiSearch />
    </Flex>
    <Button backgroundColor={"#ebeff5"} p={1} ml={1} borderRadius={"8px"}>
      search
    </Button>
  </Flex>
);
}

export default Search;