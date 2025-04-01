import { Button, ButtonProps, useRecipe } from "@chakra-ui/react";
import { actionButtonRecipe } from "./action-button.recipe";
import api from "@/api/axiosConfig";

async function updateUserParticipation(
  eventId: string,
  participationId: string,
  status: "CONFIRMED_PRESENCE" | "UNCONFIRMED_PRESENCE",
) {
  try {
    const response = await api.put(
      `/api/event/${eventId}/participation/${participationId}`,
      null, // O corpo da requisição é `null`
      {
        params: { userParticipation: status }, // Parâmetro query
      },
    );

    console.log("Presença atualizada com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar presença:", error);
    throw error;
  }
}

interface ActionButtonProps extends ButtonProps {
  label: string;
  buttonStyle?: "default" | "alert" | "outline";
  eventId: string;
  participationId: string;
  status: "CONFIRMED_PRESENCE" | "UNCONFIRMED_PRESENCE";
}

function ActionButton({
  label,
  buttonStyle = "default",
  eventId,
  participationId,
  status,
  ...props
}: ActionButtonProps) {
  const recipe = useRecipe({ recipe: actionButtonRecipe });
  const variantStyle = recipe({ visual: buttonStyle });

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await updateUserParticipation(eventId, participationId, status);
      alert(
        `Presença ${status === "CONFIRMED_PRESENCE" ? "confirmada" : "cancelada"}!`,
      );
    } catch {
      alert("Erro ao atualizar presença.");
    }
  };

  return (
    <Button onClick={handleClick} css={variantStyle} rounded={"md"} {...props}>
      {label}
    </Button>
  );
}

export default ActionButton;
