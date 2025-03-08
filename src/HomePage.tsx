import { Container } from "@chakra-ui/react";
import InputSearch from "./components/InputSearch";
import CustomTag from "./components/CustomTag/CustomTag";

function HomePage() {
  return (
    <Container maxWidth="90vw" py={5}>
      <InputSearch placeHolder="Buscar evento" />
      <CustomTag texto="#tag1" visual="solid" />
      <CustomTag texto="#tag1" visual="outline" />
    </Container>
  );
}

export default HomePage;
