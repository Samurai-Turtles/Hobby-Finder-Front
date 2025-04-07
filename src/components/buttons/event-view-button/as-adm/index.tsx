import ActionButton from "../../action-button";

interface EventViewButtonAsAdmProps {
  eventId: string;
  begin: string;
}

function EventViewButtonAsAdm({ eventId, begin }: EventViewButtonAsAdmProps) {
  const agora = new Date();
  const inicio = new Date(begin);

  return (
    <>
      {agora < inicio && (
        <ActionButton
          type="button"
          label={"Cancelar Participação"}
          action={() => console.log("CANCELAR PARTICIPAÇÃO")}
          buttonStyle={"default"}
          minW="full"
          sm={{ minW: "280px" }}
        />
      )}
    </>
  );
}

export default EventViewButtonAsAdm;
