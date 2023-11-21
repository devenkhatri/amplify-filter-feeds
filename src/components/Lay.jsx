import React from "react";
import {
  Button,
  Card,
  DropZone,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  View,
  VisuallyHidden,
  useTheme,
} from "@aws-amplify/ui-react";

const Lay = () => {
  const [files, setFiles] = React.useState([]);
  const { tokens } = useTheme();
  return (
    <Card variation="elevated" style={{width: '100vh'}}>
      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="1fr 1fr 1fr"
        templateRows="1fr 3fr 1fr"
      >
        <Card backgroundColor={tokens.colors.primary[80]}
      color={tokens.colors.white} columnStart="1" columnEnd="-1">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
            gap="1rem"
          >
            <Heading level={1} color={tokens.colors.white}>Title</Heading>
          </Flex>
        </Card>
        <Card columnStart="1" columnEnd="-1">
          <View as="p" marginBottom="1rem">            
            <Heading level={3} color={tokens.colors.primary[90]}>Input Section</Heading>
          </View>

          <DropZone
            onDropComplete={({ acceptedFiles, rejectedFiles }) => {
              // setFiles(acceptedFiles);
            }}
            marginBottom="1rem"
          >
            Drag File here
          </DropZone>
          <Flex direction="column" marginBottom="1rem">
              Keywords : <Input placeholder="Add keywords" />
          </Flex>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignContent="space-between"
            wrap="nowrap"
            gap="1rem"
          >
            <Button
              variation="primary"
              loadingText=""
              onClick={() => alert("hello")}
            >
              Process
            </Button>
            <View
              as="progress"
              data-progress-bar
              // color={tokens.colors.primary[90]}
              padding="1rem"
              max="100"
              value="75"
            />
          </Flex>
        </Card>
        <Card backgroundColor={tokens.colors.primary[10]} columnStart="1" columnEnd="-1">
          <View as="p" marginBottom="1rem">
          <Heading level={3} color={tokens.colors.primary[90]}>Output Section</Heading>
          </View>
          <Button
            variation="primary"
            // colorTheme="info"
            loadingText=""
            onClick={() => alert("hello")}
          >
            Download
          </Button>
        </Card>
      </Grid>
    </Card>
  );
};

export default Lay;
