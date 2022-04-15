import styled from "styled-components";

const Container = styled.div`
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const UsersWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
`;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const UserContainer = styled.div`
  border: 1px solid #d8d4dc;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-grow: 0;
  align-items: center;

  button {
    border: none;
    background-color: #5099f4;
    color: white;
    height: 2.5rem;
    font-size: 1.2rem;
    border-radius: 5%;
    padding: 0 1rem;
    cursor: pointer;
    &:hover {
      background-color: #2871cc;
    }
  }
`;

function index({ users }) {
  return (
    <Container>
      <UsersWrapper>
        <h1>Users</h1>
        {users.map((user) => {
          return (
            <UserContainer key={user.id}>
              <h3>{user.name}</h3>
              <button>More</button>
            </UserContainer>
          );
        })}
      </UsersWrapper>
    </Container>
  );
}

export default index;
