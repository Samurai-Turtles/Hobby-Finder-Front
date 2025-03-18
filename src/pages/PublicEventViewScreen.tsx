import {
  Box,
  VStack,
  Stack,
  HStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";

interface PublicEventViewScreenProps {
  isCancel: boolean;
}

function PublicEventViewScreen({ isCancel }: PublicEventViewScreenProps) {
  return (
    <VStack gap={4} p={5} align="center">
      <Button
        bg="customOrange"
        color="customWhite"
        rounded="md"
        gap="0"
        paddingLeft="2"
        alignSelf="start"
      >
        <CaretLeft size={32} />
        Voltar
      </Button>

      <Box border="1px solid gray" borderRadius="md" p={4} textAlign="center">
        <ChakraImage
          src="https://via.placeholder.com/100"
          alt="Imagem do Evento"
          mx="auto"
        />
      </Box>

      <Stack gap={4} width="100%" maxW="600px">
        <HStack width="100%" gap={2}>
          <Input placeholder="Nome" bg="gray.100" flex={2} />
          <Input
            placeholder="Data"
            bg="gray.100"
            type="text"
            onFocus={(e) => (e.target.type = "date")} //
            onBlur={(e) => (e.target.type = "text")}
            flex="1"
          />
        </HStack>
        <Input placeholder="Localização" bg="gray.100" />
        <Textarea placeholder="Descrição" bg="gray.100" />
        <Input placeholder="Tags" bg="gray.100" />
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
  );
}

export default PublicEventViewScreen;
