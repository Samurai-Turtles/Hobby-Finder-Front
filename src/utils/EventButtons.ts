type ButtonConfig = {
  action: string;
  method: "post" | "get"; // Apenas os métodos que seu Form aceita
  label: string;
  color: string;
};

type ButtonsConfig = {
  primary: ButtonConfig;
  secondary?: ButtonConfig;
};

export const getEventButtons = (status: string): ButtonsConfig => {
  const buttons = {
    not_participating: {
      primary: {
        action: "/solicitarParticipacao",
        method: "post" as const, // 'as const' para garantir o tipo literal
        label: "Solicitar Participação",
        color: "orange",
      },
    },
    solicitation_pending: {
      primary: {
        action: "/cancelarSolicitacao",
        method: "post" as const,
        label: "Cancelar Solicitação",
        color: "red",
      },
    },
    solicitation_accepted: {
      primary: {
        action: "/confirmarPresenca",
        method: "post" as const,
        label: "Confirmar Presença",
        color: "orange",
      },
      secondary: {
        action: "/cancelarPresenca",
        method: "post" as const,
        label: "Cancelar Presença",
        color: "red",
      },
    },
    cancel_participating: {
      primary: {
        action: "/cancelarParticipacao",
        method: "post" as const,
        label: "Cancelar Participação",
        color: "red",
      },
    },
    participar: {
      primary: {
        action: "/solicitarParticipacao",
        method: "post" as const,
        label: "Participar",
        color: "orange",
      },
    },
  };

  return buttons[status as keyof typeof buttons] || {};
};
