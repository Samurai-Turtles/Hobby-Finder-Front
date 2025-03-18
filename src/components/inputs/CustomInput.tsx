import { Input } from "@chakra-ui/react";

interface CustomInputProps {
  type?: string;
  name: string;
  placeHolder: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute | undefined;
}

function CustomInput({
  type,
  name,
  placeHolder,
  autoComplete,
}: CustomInputProps) {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeHolder}
      fontSize="1rem"
      variant="subtle"
      outline="none"
      autoComplete={autoComplete}
    />
  );
}

export default CustomInput;
