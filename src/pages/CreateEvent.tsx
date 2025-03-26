import CustomTag from "@/components/buttons/CustomTag/CustomTag";
import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import Form from "@/components/layout/Form/Form";
import {
  Box,
  Container,
  Field,
  HStack,
  IconButton,
  Image,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Pen } from "@phosphor-icons/react";

function CreateEvent() {
  return (
    <Container maxWidth={"90vw"} py={5}>
      <FlowButton />
      <VStack mt={6}>
        <Box position={"relative"}>
          <Image
            src="https://picsum.photos/seed/picsum/400/300"
            borderRadius={6}
          />
          <IconButton
            position={"absolute"}
            bottom={2.5}
            right={2.5}
            bgColor={"customOrange"}
          >
            <Pen />
          </IconButton>
        </Box>
        <Form action="" btnActionLabel="Criar evento" method="post">
          <Field.Root required>
            <Input
              placeholder="Título do evento"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              required
            />
          </Field.Root>
          <Field.Root required>
            <Input
              placeholder="Local do evento"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              required
            />
          </Field.Root>
          <Field.Root required>
            <Input
              placeholder="Data"
              type="datetime-local"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              required
            />
          </Field.Root>
          <Field.Root>
            <Textarea
              placeholder="Descreva seu evento..."
              rows={6}
              backgroundColor={"#f4f4f4"}
              border={"0px"}
            />
          </Field.Root>
          <HStack>
            <CustomTag texto="tag" visual="solid" />
            <CustomTag texto="tag" visual="solid" />
            <CustomTag texto="tag" visual="solid" />
            <CustomTag texto="tag" visual="solid" />
          </HStack>
        </Form>
      </VStack>
    </Container>
  );
}

export default CreateEvent;
