import { Button, Flex, Input } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchBarProps {
  placeholder: string;
  value: string;
  setValue: (e: any) => void;
  action: () => void;
}

function SearchBar({ placeholder, value, setValue, action }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    action();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="2">
        <Input
          id="searchBar"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          // onKeyDown={(e) => e.key === "Enter" && action()}
          variant="subtle"
          outline="none"
          rounded="xl"
          height="3rem"
        />
        <Button
          type="submit"
          bg="customOrange"
          rounded="xl"
          p="0"
          width="3rem"
          height="3rem"
        >
          <MagnifyingGlass size={32} />
        </Button>
      </Flex>
    </form>
  );
}

export default SearchBar;
