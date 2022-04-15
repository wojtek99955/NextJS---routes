import styled from "styled-components";

const Container = styled.div`
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
`;

function index() {
  return (
    <Container>
      <h1>Users</h1>
    </Container>
  );
}

export default index;
