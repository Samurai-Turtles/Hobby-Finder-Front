import { Container, Flex } from "@chakra-ui/react";
import InputSearch from "./components/InputSearch";
import CustomTag from "./components/CustomTag/CustomTag";

function HomePage() {
  return (
    <Container maxWidth="90vw" py={5}>
      <Flex direction="column" gap={5}>
        <InputSearch placeHolder="Buscar evento" />
        <Flex gap={2} wrap="wrap">
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="outline" />
        </Flex>
      </Flex>
    </Container>
  );
}

export default HomePage;
