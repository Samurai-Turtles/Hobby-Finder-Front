import { Alert, Button, Fieldset } from "@chakra-ui/react";

import { ReactNode, useEffect, useState } from "react";

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
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    // Solicita localização
    navigator.geolocation.getCurrentPosition(() => {
      // Libera o botão de login
      setDisabled(false);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Fieldset.Root>
        <Fieldset.Content>{children}</Fieldset.Content>
        {disabled && (
          <Alert.Root status="warning" bg="none" p={0}>
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title fontWeight="bold">
                Permissão de localização é necessária
              </Alert.Title>
              <Alert.Description>
                Ao permitir o acesso a sua localização, recarregue a página para
                continuar.
              </Alert.Description>
            </Alert.Content>
          </Alert.Root>
        )}
        <Button
          type={"submit"}
          value={"Submit"}
          formAction={action}
          formMethod={method}
          w={"100%"}
          bg={buttonBgColor || "orange"}
          color={"white"}
          fontWeight={"bold"}
          disabled={disabled}
        >
          {btnActionLabel}
        </Button>
      </Fieldset.Root>
    </form>
  );
}

export default Form;
