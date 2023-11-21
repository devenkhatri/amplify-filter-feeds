import React from "react";
import {
  Button,
  Card,
  DropZone,
  Flex,
  Heading,
  Text,
  View,
  VisuallyHidden,
} from "@aws-amplify/ui-react";

const Layout = () => {
  const acceptedFileTypes = ["text/*"];
  const [files, setFiles] = React.useState([]);
  const hiddenInput = React.useRef(null);
  const onFilePickerChange = (event) => {
    const { files } = event.target;
    if (!files || files.length === 0) {
      return;
    }
    setFiles(Array.from(files));
  };

  return (
    <View width="100%" maxWidth="50rem" padding={{ base: 0, large: "2rem" }}>
      <Card variation="elevated">
        <Flex direction={"column"} gap={"1rem"}>
          <Heading level={5}>Input Section</Heading>
          <DropZone
            acceptedFileTypes={acceptedFileTypes}
            onDropComplete={({ acceptedFiles, rejectedFiles }) => {
              setFiles(acceptedFiles);
            }}
          >
            <Flex direction="column" alignItems="center">
              <Text>Drag csv file here or</Text>
              <Button size="small" onClick={() => hiddenInput.current.click()}>
                Browse
              </Button>
            </Flex>
            <VisuallyHidden>
              <input
                type="file"
                tabIndex={-1}
                ref={hiddenInput}
                onChange={onFilePickerChange}
                multiple={true}
                accept={acceptedFileTypes.join(",")}
              />
            </VisuallyHidden>
          </DropZone>
          {files.map((file) => (
            <Text key={file.name}>{file.name}</Text>
          ))}
        </Flex>
      </Card>
    </View>
  );
};

export default Layout;
