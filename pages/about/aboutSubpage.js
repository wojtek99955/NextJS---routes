import Link from "next/link";
import React from "react";
import styled from "styled-components";

const BackBtn = styled.button`
  padding: 1rem 2rem;
  background: blue;
  color: white;
  border: none;
`;

function aboutSubpage() {
  return (
    <>
      <Link href="/about">
        <BackBtn>Back</BackBtn>
      </Link>
      <div>About subpage</div>
    </>
  );
}

export default aboutSubpage;
