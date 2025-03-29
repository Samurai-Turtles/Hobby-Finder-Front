import Tag from "@/components/buttons/tag/tag";
import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import Frame from "@/components/layout/frame";
import {
  Avatar,
  Box,
  Field,
  Fieldset,
  Flex,
  Float,
  Textarea,
} from "@chakra-ui/react";
import { Camera, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import PrimaryCustomButton from "../components/buttons/PrimaryCustomButton/PrimaryCustomButton";
import DeleteAccountCard from "../components/cards/DeleteAccountCard";
import CustomInput from "../components/inputs/CustomInput";

function EditUserProfile() {
  const [cardDisplay, setCardDisplay] = useState("none");

  const showHideCard = () => {
    setCardDisplay((cardDisplay) =>
      cardDisplay === "none" ? "block" : "none",
    );
  };

  return (
    <Frame>
      <FlowButton />
      <Flex direction="column" minW="100%" alignItems="center" gap={5}>
        <Box position="relative">
          <Avatar.Root minW="8rem" minH="8rem">
            <Avatar.Fallback name="Username" />
            <Avatar.Image src="#" />
          </Avatar.Root>
          <Float placement="bottom-end" offset={4}>
            <button style={{ cursor: "pointer" }}>
              <Box bg="customOrange" color="customWhite" p={1} rounded="md">
                <Camera size={25} />
              </Box>
            </button>
          </Float>
        </Box>
        <Flex alignItems="center" gap={2}>
          <Tag label="tag" style="solid" />
          <Tag label="tag" style="solid" />
          <Tag label="tag" style="solid" />
          <Tag label="tag" style="solid" />
          <button style={{ cursor: "pointer" }}>
            <Box border="1px solid" color="customOrange" p={1} rounded="full">
              <Plus size={15} />
            </Box>
          </button>
        </Flex>
        <Fieldset.Root size="lg">
          <Fieldset.Content gap={3}>
            <Field.Root>
              <CustomInput name="nickname" placeHolder="Nickname" />
            </Field.Root>

            <Flex direction="column" gap={3} md={{ flexDirection: "row" }}>
              <Field.Root>
                <CustomInput name="fullName" placeHolder="Nome Completo" />
              </Field.Root>
              <Field.Root>
                <CustomInput
                  type="email"
                  name="email"
                  placeHolder="Email"
                  autoComplete="on"
                />
              </Field.Root>
            </Flex>

            <Field.Root>
              <Textarea
                name="bio"
                placeholder="Bio"
                fontSize="1rem"
                variant="subtle"
                outline="none"
              />
            </Field.Root>
          </Fieldset.Content>

          <Flex
            direction="column"
            gap={2}
            md={{ flexDirection: "row", justifyContent: "center" }}
          >
            <PrimaryCustomButton
              type="button"
              value="Excluir Conta"
              variant="secondary"
              onClick={showHideCard}
            />
            <PrimaryCustomButton
              type="submit"
              value="Salvar Alterações"
              variant="primary"
            />
          </Flex>
        </Fieldset.Root>
      </Flex>
      <DeleteAccountCard display={cardDisplay} onClick={showHideCard} />
    </Frame>
  );
}

export default EditUserProfile;
