import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  padding: 2rem;
`;
const StyledNav = styled.nav``;
const StyledLink = styled.a`
  font-size: 1.5rem;
`;

function Layout({ children }) {
  return (
    <>
      <HeaderContainer>
        <StyledNav>
          <Link href="/">Home</Link>

          <Link href="/about">About</Link>
        </StyledNav>
      </HeaderContainer>
      {children}
    </>
  );
}

export default Layout;
