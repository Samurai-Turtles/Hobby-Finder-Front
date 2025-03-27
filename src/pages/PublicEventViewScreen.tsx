import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import {
  Box,
  VStack,
  Stack,
  Input,
  Textarea,
  Button,
  Container,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";

interface PublicEventViewScreenProps {
  isCancel: boolean;
}

function PublicEventViewScreen({ isCancel }: PublicEventViewScreenProps) {
  return (
    <Container maxWidth="90vw" py={5}>
      <FlowButton />
      <VStack gap={4} align="center">
        <Box
          border="1px solid gray"
          borderRadius="md"
          overflow="hidden"
          textAlign="center"
        >
          <ChakraImage
            height="200px"
            src="https://bit.ly/dan-abramov"
            alt="Imagem do Evento"
            mx="auto"
          />
        </Box>
        <Stack gap={4} width="100%">
          <Stack
            direction="column"
            md={{ flexDirection: "row" }}
            width="100%"
            gap={4}
          >
            <Input
              placeholder="Nome"
              bg="#EFEFEF"
              md={{ flex: 2 }}
              _placeholder={{ color: "#848484" }}
              color="black"
            />
            <Input
              placeholder="Data"
              _placeholder={{ color: "#848484" }}
              bg="#EFEFEF"
              color="black"
              type="text"
              onFocus={(e) => (e.target.type = "date")} //
              onBlur={(e) => (e.target.type = "text")}
              md={{ flex: 1 }}
            />
          </Stack>
          <Input
            placeholder="Localização"
            bg="#EFEFEF"
            _placeholder={{ color: "#848484" }}
            color="black"
          />
          <Textarea
            placeholder="Descrição"
            bg="#EFEFEF"
            _placeholder={{ color: "#848484" }}
            color="black"
          />
          <Input
            placeholder="Tags"
            bg="#EFEFEF"
            _placeholder={{ color: "#848484" }}
            color="black"
          />
          <Button
            bg={isCancel ? "red.500" : "customOrange"}
            color="white"
            fontWeight="bold"
            rounded="md"
            _hover={{ bg: isCancel ? "red.600" : "orange.500" }}
            w="fit-content" // 🔹 Faz o botão ter apenas o tamanho do conteúdo
            minW="150px" // 🔹 Define um tamanho mínimo para não ficar muito pequeno
            mx="auto"
            px="24"
          >
            {isCancel ? "Cancelar Participação" : "Participar"}
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
}

export default PublicEventViewScreen;
