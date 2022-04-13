import styled from "styled-components";

const Main = styled.main`
  position: absolute;
  top: 40%;
  text-align: center;
  left: 0;
  right: 0;
  width: 60%;
  margin: auto;

  h1 {
    font-size: 3.2rem;
  }
  p {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;
export default function Home() {
  return (
    <>
      <Main>
        <h1>Welcome to my NextJS website!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit perferendis praesentium voluptatum aspernatur numquam.
          Placeat officia deleniti laboriosam labore exercitationem, quisquam
          nihil sunt est culpa ratione iste mollitia eveniet nam doloribus eum
          eaque reprehenderit totam tenetur nemo quam ab neque nostrum hic! Nemo
          deserunt in repellendus quisquam amet. Odit, quod!
        </p>
      </Main>
    </>
  );
}
