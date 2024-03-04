import { theme } from "../../../styles/theme";
import { Button, Flex, Text } from "../ui/Blocks";
import { Select } from "../ui/Blocks/Select";
import MultipleSelectChip from "../ui/Blocks/Select/MSelect";

const AddDrugComponent = () => {
    return (
        <Flex m={1} backgroundColor={theme.colors.light.white[0]} width={'100%'} flexDirection={'column'}>
            <Flex width={'100%'} p={1} justifyContent={'space-between'}>
                <Text fontSize={6} fontFamily={'poppins'}>Add Drug</Text>
                <Button p={1} fontSize={5} borderRadius={'8px'} variant="secondary">Add New Drug</Button>
            </Flex>
            <Flex  p={1} width={'50%'}>
                <MultipleSelectChip></MultipleSelectChip>
            </Flex>
        </Flex>
    )
}


export default AddDrugComponent;