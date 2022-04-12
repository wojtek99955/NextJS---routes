import styled from "styled-components";

const MainTitle = styled.h1`
  font-size: 3.2rem;
  position: absolute;
  top: 40%;
  text-align: center;
  left: 0;
  right: 0;
`;
export default function Home() {
  return (
    <>
      <MainTitle>Welcome to my NextJS website!</MainTitle>
    </>
  );
}
