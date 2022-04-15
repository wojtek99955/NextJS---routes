import styled from "styled-components";

const Container = styled.div`
  h1 {
    text-align: center;
    padding: 2rem;
    font-size: 2.5rem;
  }
`;
const DetailsContainer = styled.div`
  max-width: 800px;
  margin: auto;
  border: 1px solid #d8d4dc;
  padding: 1rem;
  h3 {
    text-align: center;
    font-size: 2rem;
  }
`;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

function Details({ user }) {
  return (
    <Container>
      <h1>User Details</h1>
      <DetailsContainer>
        <h3>{user.name}</h3>
        <p>username: {user.username}</p>
        <p>email: {user.email}</p>
        <p>phone: {user.phone}</p>
        <p></p>
      </DetailsContainer>
    </Container>
  );
}

export default Details;
