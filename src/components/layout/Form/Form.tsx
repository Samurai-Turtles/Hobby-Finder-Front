import { Button, Fieldset } from "@chakra-ui/react";

import { ReactNode } from "react";

interface FormProps {
  action: string;
  method: "get" | "post";
  btnActionLabel: string;
  children: ReactNode;
}

function Form({ action, method, btnActionLabel, children }: FormProps) {
  return (
    <Fieldset.Root>
      <Fieldset.Content>{children}</Fieldset.Content>
      <Button
        type={"submit"}
        value={"Submit"}
        formAction={action}
        formMethod={method}
        w={"100%"}
        bg={"orange"}
        color={"white"}
        fontWeight={"bold"}
      >
        {btnActionLabel}
      </Button>
    </Fieldset.Root>
  );
}

export default Form;
