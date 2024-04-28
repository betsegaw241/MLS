import Dropzone, { useDropzone } from "react-dropzone";
import { Flex, P } from "../Blocks";

const FileUpload = (props: any) => {
  const { isFocused, isDragAccept } = useDropzone({ maxFiles: 1 });

  return (
    <Flex>
      <Dropzone onDrop={(files) => props.file(files[0])}>
        {({ getRootProps, getInputProps }) => (
          <Flex
            backgroundColor={isFocused ? "green" : "#fff"}
            width={"100%"}
            height={"80px"}
            borderColor={isDragAccept ? "red" : null}
            border={"2px  dashed  #B4D4FF"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"8px"}
            style={{ cursor: "pointer" }}
            {...getRootProps({
              className: "dropzone",
              onDrop: (event) => event.stopPropagation(),
            })}
          >
            <input {...getInputProps()} />
            <P fontFamily={"poppins"} fontSize={[2, 1]}>
              Drag 'n' drop some files here, or click to select files
            </P>
          </Flex>
        )}
      </Dropzone>
      <P></P>
    </Flex>
  );
};

export default FileUpload;
