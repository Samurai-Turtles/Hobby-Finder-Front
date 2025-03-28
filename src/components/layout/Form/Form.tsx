import { Button, Fieldset } from "@chakra-ui/react";

import { ReactNode } from "react";

interface FormProps {
  action: string;
  method: "get" | "post";
  btnActionLabel: string;
  children: ReactNode;
  buttonBgColor?: string;
  handleSubmit?: (e: any) => Promise<void>;
}

function Form({
  action,
  method,
  btnActionLabel,
  children,
  buttonBgColor,
  handleSubmit,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Fieldset.Root>
        <Fieldset.Content>{children}</Fieldset.Content>
        <Button
          type={"submit"}
          value={"Submit"}
          formAction={action}
          formMethod={method}
          w={"100%"}
          bg={buttonBgColor || "orange"}
          color={"white"}
          fontWeight={"bold"}
        >
          {btnActionLabel}
        </Button>
      </Fieldset.Root>
    </form>
  );
}

export default Form;
