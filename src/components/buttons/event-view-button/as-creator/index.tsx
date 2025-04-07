import ActionButton from "../../action-button";

type EventStatus = "nao_iniciado" | "em_andamento" | "finalizado";

type ButtonConfig = {
  label: string;
  action: () => void;
  buttonStyle: "default" | "alert" | "outline";
};

type StatusActionsMap = {
  [K in EventStatus]: ButtonConfig;
};

interface EventViewButtonAsCreatorProps {
  begin: string;
  end: string;
}

function EventViewButtonAsCreator({
  begin,
  end,
}: EventViewButtonAsCreatorProps) {
  const agora = new Date();
  const inicio = new Date(begin);
  const fim = new Date(end);

  let status: EventStatus;

  if (agora < inicio) {
    status = "nao_iniciado";
  } else if (agora >= inicio && agora <= fim) {
    status = "em_andamento";
  } else {
    status = "finalizado";
  }

  const buttonInfo: StatusActionsMap = {
    nao_iniciado: {
      label: "Editar Evento",
      action: () => console.log("NAVEGAR PARA EDITAR EVENTO"),
      buttonStyle: "default",
    },
    em_andamento: {
      label: "Cancelar Evento",
      action: () => console.log("CANCELAR EVENTO"),
      buttonStyle: "alert",
    },
    finalizado: {
      label: "",
      action: () => {},
      buttonStyle: "default",
    },
  };

  const { label, action, buttonStyle } = buttonInfo[status];

  return (
    <>
      {!status.includes("finalizado") && (
        <ActionButton
          type="button"
          label={label}
          action={action}
          buttonStyle={buttonStyle}
          minW="full"
          sm={{ minW: "280px" }}
        />
      )}
    </>
  );
}

export default EventViewButtonAsCreator;
