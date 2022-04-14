import Image from "next/image";
import styled from "styled-components";
import { images } from "../assets/Images";

const Section = styled.section`
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
`;

function gallery() {
  return (
    <Section>
      <h1>Gallery</h1>
      {images.map((image) => {
        return (
          <div key={image.id}>
            <Image
              alt={image.id}
              src={`${image.src}`}
              width="280"
              height="420"
            />
          </div>
        );
      })}
    </Section>
  );
}

export default gallery;
