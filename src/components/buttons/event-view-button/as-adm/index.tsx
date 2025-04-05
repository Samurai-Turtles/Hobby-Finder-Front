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
        />
      )}
    </>
  );
}

export default EventViewButtonAsAdm;
