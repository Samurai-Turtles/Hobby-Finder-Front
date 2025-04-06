import { useNavigate } from "react-router";
import ActionButton from "../../action-button";
import { useEffect, useState } from "react";
import RatingEventCard from "@/components/cards/RatingEventCard";
import { eventService } from "@/service/eventService";
import api from "@/api/axiosConfig";
import { jwtDecode } from "jwt-decode";

type EventStatus = "nao_iniciado" | "em_andamento" | "finalizado";
type EventPrivacity = "PUBLIC" | "PRIVATE";
type UserStatus =
  | "CRIADOR"
  | "ADM"
  | "NAO_PARTICIPANTE"
  | "PARTICIPANTE_CONFIRMADO"
  | "SOLICITANTE"
  | "PARTICIPANTE_NAO_CONFIRMADO";

type ButtonConfig = {
  label: string;
  action: () => void;
  buttonStyle: "default" | "alert" | "outline";
};
type UserStatusMap = {
  [K in UserStatus]: ButtonConfig;
};
type EventPrivacityMap = Partial<{
  [K in EventPrivacity]: Partial<UserStatusMap>;
}>;
type PartialStatusActionsMap = Partial<{
  [K in EventStatus]: Partial<EventPrivacityMap>;
}>;

interface EventViewButtonAsParticipantProps {
  eventId: string;
  privacity: EventPrivacity;
  userStatus: UserStatus;
  begin: string;
  end: string;
}

function EventViewButtonAsParticipant({
  eventId,
  privacity,
  userStatus,
  begin,
  end,
}: EventViewButtonAsParticipantProps) {
  const [ratingCardDisplay, setRatingCardDisplay] = useState<"fixed" | "none">(
    "none",
  );
  // const navigate = useNavigate();
  const agora = new Date();
  const inicio = new Date(begin);
  const fim = new Date(end);
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  let status: EventStatus;

  if (agora < inicio) {
    status = "nao_iniciado";
  } else if (agora >= inicio && agora <= fim) {
    status = "em_andamento";
  } else {
    status = "finalizado";
  }

  const publicConfirmarParticipacao = async () => {
    try {
      await api.post(`/event/${eventId}/request`, null);
      console.log("Confirmação feita com sucesso.");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao realizar a confirmação:", error);
    }
  };

  const publicCancelarParticipacao = async () => {
    try {
      const response = await api.get(
        `/event/{id}/situation?idEvent=${eventId}`,
      );
      const participationId = response.data?.idParticipation;
      if (!participationId) {
        console.error("ID de participação não encontrado.");
        return;
      }

      await api.delete(
        `/event/${eventId}/participation/${participationId}/user-auth`,
      );
      console.log("Participação cancelada com sucesso.");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao cancelar participação:", error);
    }
  };

  const buttonInfo: PartialStatusActionsMap = {
    nao_iniciado: {
      PUBLIC: {
        NAO_PARTICIPANTE: {
          label: "Participar",
          action: () => publicConfirmarParticipacao(),
          buttonStyle: "default",
        },
        PARTICIPANTE_CONFIRMADO: {
          label: "Cancelar Participação",
          action: () => publicCancelarParticipacao(),
          buttonStyle: "alert",
        },
      },
      PRIVATE: {
        NAO_PARTICIPANTE: {
          label: "Solicitar Participação",
          action: () => console.log("SOLICITAR PARTICIPAÇÃO"),
          buttonStyle: "default",
        },
        SOLICITANTE: {
          label: "Cancelar Solicitação",
          action: () => console.log("CANCELAR SOLICITAÇÃO"),
          buttonStyle: "alert",
        },
        PARTICIPANTE_NAO_CONFIRMADO: {
          label: "Confirmar Presença",
          action: () => console.log("CONFIRMAR PRESENÇA"),
          buttonStyle: "default",
        },
      },
    },
  };

  const config = buttonInfo[status]?.[privacity]?.[userStatus];

  useEffect(() => {
    const loadEvaluationStatus = async () => {
      try {
        const response = await eventService.eventoJaAvaliado(eventId);
        if (response) {
          setIsEvaluated(response);
        }
      } catch (error) {
        console.error("Erro ao consultar status da avaliação", error);
      }
    };
    loadEvaluationStatus();
  }, [eventId]);

  return (
    <>
      {status.includes("finalizado") && !isEvaluated && (
        <>
          <RatingEventCard
            eventId={eventId}
            display={ratingCardDisplay}
            closeClick={() => setRatingCardDisplay("none")}
          />
          <ActionButton
            type="button"
            label={"Avaliar Evento"}
            action={() => setRatingCardDisplay("fixed")}
            buttonStyle={"default"}
            minW="full"
            sm={{ minW: "280px" }}
          />
        </>
      )}
      {config && (
        <ActionButton
          type="button"
          label={config.label}
          action={config.action}
          buttonStyle={config.buttonStyle}
          minW="full"
          sm={{ minW: "280px" }}
        />
      )}
      {userStatus.includes("PARTICIPANTE_NAO_CONFIRMADO") && (
        <ActionButton
          type="button"
          label={"Cancelar Presença"}
          action={() => console.log("CANCELAR PRESENÇA")}
          buttonStyle={"alert"}
          minW="full"
          sm={{ minW: "280px" }}
        />
      )}
    </>
  );
}

export default EventViewButtonAsParticipant;
