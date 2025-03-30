import NavigationButton from "@/components/buttons/navigation-button";
import PrimaryCustomButton from "@/components/buttons/PrimaryCustomButton/PrimaryCustomButton";
import Tag from "@/components/buttons/tag/tag";
import Frame from "@/components/layout/frame";
import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";

function EventView() {
  return (
    <Frame>
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <VStack mt={6}>
        {/* Event image section */}
        <VStack gap={4}>
          <Image
            src="https://picsum.photos/seed/picsum/400/300"
            borderRadius={6}
          />
          <Flex w={"100%"} wrap={"wrap"} gap={2}>
            <PrimaryCustomButton value="Var solicitações" variant="primary" />
            <PrimaryCustomButton value="Ver participantes" variant="primary" />
          </Flex>
        </VStack>
        {/* Event data section */}
        <VStack w={"100%"} alignItems={"stretch"}>
          <Heading>Título do evento</Heading>
          <Text>Local do evento</Text>
          <Text>Data e horário</Text>
          <Text>Descrição do evento</Text>
          <HStack>
            <Tag label="tag" style="solid" />
            <Tag label="tag" style="solid" />
            <Tag label="tag" style="solid" />
            <Tag label="tag" style="solid" />
          </HStack>
          <PrimaryCustomButton value="Editar evento" variant="primary" />
        </VStack>
      </VStack>
    </Frame>
  );
}

export default EventView;
