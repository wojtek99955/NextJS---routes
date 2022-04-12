import styled from "styled-components";

const Title = styled.h1`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 3rem;
`;

function index() {
  return <Title>Contact Me!</Title>;
}

export default index;
