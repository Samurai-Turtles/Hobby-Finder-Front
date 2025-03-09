import { Button, Flex, Input } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchBarProps {
  placeHolder: string;
}

function SearchBar({ placeHolder }: SearchBarProps) {
  return (
    <Flex gap="2">
      <Input
        id="searchBar"
        placeholder={placeHolder}
        variant="subtle"
        outline="none"
        rounded="xl"
        height="3rem"
      />
      <Button bg="customOrange" rounded="xl" p="0" width="3rem" height="3rem">
        <MagnifyingGlass size={32} />
      </Button>
    </Flex>
  );
}

export default SearchBar;
