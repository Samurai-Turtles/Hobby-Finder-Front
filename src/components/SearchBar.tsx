import { Button, Flex, Input } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

interface SearchBarProps {
  placeHolder: string;
  setTermoBusca: (termo: string) => void;
}

function SearchBar({ placeHolder, setTermoBusca }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim().length > 0) setTermoBusca(inputValue);
    setInputValue(inputValue.trim());
  };

  return (
    <Flex gap="2">
      <Input
        id="searchBar"
        placeholder={placeHolder}
        variant="subtle"
        outline="none"
        rounded="xl"
        height="3rem"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <Button
        bg="customOrange"
        rounded="xl"
        p="0"
        width="3rem"
        height="3rem"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={32} />
      </Button>
    </Flex>
  );
}

export default SearchBar;
