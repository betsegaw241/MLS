import { Button, Flex } from "../Blocks";
import { InputFields } from "../Blocks/InputField";
import {Input} from "../Blocks/Input";


const Search = () =>{
return (
  <Flex backgroundColor={'#ffff'} p={1} borderRadius={'8px'}>
    <Input name={"search"} type={""} placeholder="Search..." border={'none'} />
    <Button variant="primary">search</Button>
  </Flex>
);
}

export default Search;