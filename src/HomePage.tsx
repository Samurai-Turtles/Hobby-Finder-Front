import { Container } from "@chakra-ui/react";
import InputSearch from "./components/InputSearch";

function HomePage() {
  return (
    <Container maxWidth="90vw" py={5}>
      <InputSearch placeHolder="Buscar evento" />
    </Container>
  );
}

export default HomePage;
