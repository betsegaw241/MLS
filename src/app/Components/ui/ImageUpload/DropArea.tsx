import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Flex, P } from "../Blocks";

interface StyledDropzoneProps {
  images: (files: File[]) => void;
}

const baseStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle: React.CSSProperties = {
  borderColor: "#2196f3",
};

const acceptStyle: React.CSSProperties = {
  borderColor: "#00e676",
};

const rejectStyle: React.CSSProperties = {
  borderColor: "#ff1744",
};

const StyledDropzone: React.FC<StyledDropzoneProps> = ({ images }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      images(acceptedFiles);
    },
    [setFiles, images]
  );

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] }, onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <Flex width={"100%"}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <P fontFamily={"poppins"}>
          Drag 'n' drop images here, or click to select image
        </P>
      </div>
    </Flex>
  );
};

export default StyledDropzone;
