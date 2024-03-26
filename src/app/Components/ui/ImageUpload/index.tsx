import { useDropzone } from "react-dropzone";
import { Flex } from "../Blocks";
import { useCallback, useState, ReactNode } from "react";

interface UploadImageProps {
  image: (files: File[]) => void;
  children?: ReactNode;
}

const UploadImage = ({ image, children }: UploadImageProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      image(acceptedFiles);
    },
    [setFiles, image]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  return (
    <Flex>
      <Flex
        {...getRootProps({
          onDrop: (event: React.DragEvent<HTMLDivElement>) =>
            event.stopPropagation(),
        })}
      >
        <input {...getInputProps()} />
        {children}
      </Flex>
    </Flex>
  );
};

export default UploadImage;
