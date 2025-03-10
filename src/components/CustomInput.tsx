import { Input } from "@chakra-ui/react";

interface CustomInputProps {
  name: string;
  placeHolder: string;
}

function CustomInput({ name, placeHolder }: CustomInputProps) {
  return (
    <Input
      name={name}
      placeholder={placeHolder}
      fontSize="1rem"
      variant="subtle"
      outline="none"
    />
  );
}

export default CustomInput;
