import Tag from "@/components/buttons/tag/tag";
import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import PrivacityButton from "@/components/buttons/PrivacityButton/PrivacityButton";
import Form from "@/components/layout/form";
import Frame from "@/components/layout/frame";
import {
  Box,
  Field,
  HStack,
  IconButton,
  Image,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Pen } from "@phosphor-icons/react";

function EditEvent() {
  return (
    <Frame>
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
        <Form action="" btnActionLabel="Editar evento" method="post">
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
            <Tag label="tag" style="solid" />
            <Tag label="tag" style="solid" />
            <Tag label="tag" style="solid" />
            <Tag label="tag" style="solid" />
          </HStack>
          <PrivacityButton privacidade="Público" />
        </Form>
      </VStack>
    </Frame>
  );
}

export default EditEvent;
