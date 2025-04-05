import { useNavigate } from "react-router";
import ActionButton from "../../action-button";
import { useState } from "react";
import RatingEventCard from "@/components/cards/RatingEventCard";

type EventStatus = "nao_iniciado" | "em_andamento" | "finalizado";
type EventPrivacity = "PUBLIC" | "PRIVATE";
type UserStatus =
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
  const navigate = useNavigate();
  const agora = new Date();
  const inicio = new Date(begin);
  const fim = new Date(end);
  const isEvaluated = false;

  let status: EventStatus;

  if (agora < inicio) {
    status = "nao_iniciado";
  } else if (agora >= inicio && agora <= fim) {
    status = "em_andamento";
  } else {
    status = "finalizado";
  }

  const buttonInfo: PartialStatusActionsMap = {
    nao_iniciado: {
      PUBLIC: {
        NAO_PARTICIPANTE: {
          label: "Participar",
          action: () => console.log("PARTICIPAR"),
          buttonStyle: "default",
        },
        PARTICIPANTE_CONFIRMADO: {
          label: "Cancelar Participação",
          action: () => console.log("CANCELAR PARTICIPAÇÃO"),
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
          />
        </>
      )}
      {config && (
        <ActionButton
          type="button"
          label={config.label}
          action={config.action}
          buttonStyle={config.buttonStyle}
        />
      )}
      {userStatus.includes("PARTICIPANTE_NAO_CONFIRMADO") && (
        <ActionButton
          type="button"
          label={"Cancelar Presença"}
          action={() => console.log("CANCELAR PRESENÇA")}
          buttonStyle={"alert"}
        />
      )}
    </>
  );
}

export default EventViewButtonAsParticipant;

// <>
//   {status.includes("finalizado") && !isEvaluated && (
//     <>
//       <RatingEventCard eventId={eventId} display={ratingCardDisplay} closeClick={() => setRatingCardDisplay("none")}/>
//       <ActionButton
//         type="button"
//         label={"Avaliar Evento"}
//         action={() => setRatingCardDisplay("fixed")}
//         buttonStyle={"default"}
//       />
//     </>
//   )}
//   {config && (
//     <ActionButton
//       type="button"
//       label={config.label}
//       action={config.action}
//       buttonStyle={config.buttonStyle}
//     />
//   )}
//   {userStatus.includes("PARTICIPANTE_NAO_CONFIRMADO") && (
//       <ActionButton
//       type="button"
//       label={"Cancelar Presença"}
//       action={() => console.log("CANCELAR PRESENÇA")}
//       buttonStyle={"alert"}
//     />
//     )}
// </>
