import Link from "next/link";
import React from "react";
import styled from "styled-components";
const Content = styled.div`
  position: absolute;
  top: 40%;
  max-width: 800px;
  left: 0;
  right: 0;
  margin: auto;
  p {
    font-size: 1.5rem;
  }
`;
const Button = styled.button`
  color: white;
  background-color: red;
  padding: 1rem 2rem;
  font-size: 1rem;
  display: block;
  margin: auto;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 3rem;
`;
const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  cursor: pointer;
`;

function index() {
  return (
    <Content>
      <Title>This is about</Title>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        voluptates, ut nisi omnis ad earum iste, saepe cumque, perferendis
        maiores sequi praesentium accusantium eligendi expedita.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quia
        aliquid minus perspiciatis neque ullam distinctio cupiditate ipsam
        perferendis magni. Optio odit, cum quo praesentium modi provident nobis
        quidem qui!
      </p>
      <Link href="about/aboutSubpage">
        <Button>Subpage</Button>
      </Link>
    </Content>
  );
}

export default index;
