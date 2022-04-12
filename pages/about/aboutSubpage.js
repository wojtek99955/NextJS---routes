import Link from "next/link";
import React from "react";
import styled from "styled-components";

const BackBtn = styled.button`
  padding: 1rem 2rem;
  background: blue;
  color: white;
  border: none;
  margin: 2rem;
  cursor: pointer;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 4rem;
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
`;

function aboutSubpage() {
  return (
    <>
      <Link href="/about">
        <BackBtn>Back</BackBtn>
      </Link>
      <Title>About subpage</Title>
    </>
  );
}

export default aboutSubpage;
