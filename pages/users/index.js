import styled from "styled-components";

const Container = styled.div`
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

function index({ users }) {
  return (
    <Container>
      <h1>Users</h1>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </Container>
  );
}

export default index;
