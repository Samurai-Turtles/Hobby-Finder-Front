import {
  Box,
  VStack,
  Button,
  Stack,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import { Image as ChakraImage } from "@chakra-ui/react";

function CancelEventViewScreen() {
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

      <HStack gap={4}>
        <Button
          variant="outline"
          borderColor="orange.400"
          color="orange.400"
          _hover={{ bg: "orange.100" }}
          fontWeight="bold"
          px="9"
        >
          Participantes
        </Button>

        <Button
          variant="outline"
          borderColor="orange.400"
          color="orange.400"
          _hover={{ bg: "orange.100" }}
          fontWeight="bold"
          px="9"
        >
          Solicitações
        </Button>
      </HStack>

      <Stack gap={4} width="100%" maxW="600px">
        <HStack width="100%" gap={2}>
          <Input
            placeholder="Nome"
            bg="#EFEFEF"
            flex={2}
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
            flex="1"
          />
        </HStack>
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
          bg="red.500"
          color="white"
          fontWeight="bold"
          rounded="md"
          _hover={{ bg: "red.600" }}
          w="fit-content"
          minW="150px"
          mx="auto"
          px="24"
        >
          Encerrar Evento
        </Button>
      </Stack>
    </VStack>
  );
}

export default CancelEventViewScreen;
