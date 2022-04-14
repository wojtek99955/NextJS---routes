import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  background-color: black;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledNav = styled.nav``;
const StyledLink = styled.a`
  font-size: 1.5rem;
  color: white;
  margin-left: 1.5rem;
  cursor: pointer;
`;

const Logo = styled.div`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

function Layout({ children }) {
  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <Logo>WojtekK</Logo>
        </Link>
        <StyledNav>
          <Link href="/">
            <StyledLink>Home</StyledLink>
          </Link>
          <Link href="/about">
            <StyledLink>About</StyledLink>
          </Link>
          <Link href="/gallery">
            <StyledLink>Gallery</StyledLink>
          </Link>
          <Link href="/contact">
            <StyledLink>Contact</StyledLink>
          </Link>
        </StyledNav>
      </HeaderContainer>
      {children}
    </>
  );
}

export default Layout;
