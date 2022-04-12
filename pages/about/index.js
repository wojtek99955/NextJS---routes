import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: red;
  padding: 1rem 2rem;
  font-size: 1rem;
`;

function index() {
  return (
    <>
      <div>This is about</div>{" "}
      <Link href="about/aboutSubpage">
        <Button>Subpage</Button>
      </Link>
    </>
  );
}

export default index;
