import { Container, Grid } from "@chakra-ui/react";
import ParticipantsList from "./components/ParticipantsList";

function Participants() {
  const participants = [
    { srcImg: "#", nome: "Nome 1" },
    { srcImg: "#", nome: "Nome 2" },
    { srcImg: "#", nome: "Nome 3" },
  ];
  const metade = Math.ceil(participants.length / 2);
  const left = participants.slice(0, metade);
  const right = participants.slice(metade);

  return (
    <Container maxWidth="90vw" py={5}>
      <Grid
        templateColumns="1fr"
        gap={2}
        md={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <ParticipantsList participantsList={left} />
        <ParticipantsList participantsList={right} />
      </Grid>
    </Container>
  );
}

export default Participants;
