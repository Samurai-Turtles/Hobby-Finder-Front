import Tag from "@/components/buttons/tag/tag";
import AddNewTagCard from "@/components/cards/AddNewTagCard";
import { eventService } from "@/service/eventService";
import { Box, Flex } from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface TagSelectorProps {
  currentTags: string[];
  setCurrentTags: (e: string[]) => void;
}

function TagSelector({ currentTags, setCurrentTags }: TagSelectorProps) {
  const [possibleTags, setPossibleTags] = useState<string[]>([]);
  const [addTagCardDisplay, setAddTagCardDisplay] = useState("none");

  useEffect(() => {
    const fetchPossibleTags = async () => {
      try {
        const response = await eventService.getPossibleTags();
        setPossibleTags(response || []);
      } catch (error) {
        console.error("Erro ao buscar possibleTags", error);
      }
    };
    fetchPossibleTags();
  }, []);

  const addTag = (newTag: string) => {
    handleTagCardDisplay();
    setCurrentTags([...currentTags, newTag]);
  };

  const removeTag = (tag: string) => {
    setCurrentTags(currentTags.filter((t) => t !== tag));
    setPossibleTags((prev) => [...prev, tag]);
  };

  const handleTagCardDisplay = () => {
    setAddTagCardDisplay((e) => (e.includes("fixed") ? "none" : "fixed"));
  };

  useEffect(() => {
    if (possibleTags.length > 0 && currentTags.length > 0) {
      const tags = possibleTags.filter((tag) => !currentTags.includes(tag));
      setPossibleTags(tags);
    }
  }, [currentTags]);

  return (
    <Flex alignItems="center" gap={2} wrap="wrap" maxW="1200px">
      <AddNewTagCard
        possibleTags={possibleTags}
        display={addTagCardDisplay}
        closeClick={handleTagCardDisplay}
        action={addTag}
      />
      {currentTags.map((e, index) => {
        return (
          <Tag key={index} label={e} style="solid" editClick={removeTag} />
        );
      })}
      <button
        style={{
          cursor: "pointer",
          display: `${possibleTags.length == 0 ? "none" : "block"}`,
        }}
        onClick={handleTagCardDisplay}
        disabled={possibleTags.length == 0}
      >
        <Box border="1px solid" color="customOrange" p={1} rounded="full">
          <Plus size={15} />
        </Box>
      </button>
    </Flex>
  );
}

export default TagSelector;
