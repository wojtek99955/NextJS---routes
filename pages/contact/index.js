import styled from "styled-components";

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  max-width: 800px;
  margin: auto;
  p {
    font-size: 1.5rem;
  }
`;

function index() {
  return (
    <Container>
      <Title>Contact Me!</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        quibusdam quas animi illo non incidunt! Eaque sunt ratione autem
        molestiae adipisci vel cumque?
      </p>
    </Container>
  );
}

export default index;
