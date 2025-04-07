import { Input } from "@chakra-ui/react";

interface CustomInputProps {
  type?: string;
  name: string;
  placeHolder: string;
  value?: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute | undefined;
  onChange?: (e: any) => void;
}

function CustomInput({
  type,
  name,
  placeHolder,
  value,
  autoComplete,
  onChange,
}: CustomInputProps) {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      fontSize="1rem"
      variant="subtle"
      outline="none"
      autoComplete={autoComplete}
    />
  );
}

export default CustomInput;
