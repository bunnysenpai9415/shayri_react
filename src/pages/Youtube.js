import React from "react";
import { Container } from "react-bootstrap";

function Youtube() {
  return (
    <Container>
        <h3>Mirza Ghalib Shayari | Urdu Poetry </h3>
        <hr></hr>
      <div class="ratio ratio-21x9">
        <iframe
          src="https://www.youtube.com/embed/VRyb93k1lRc" 
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Youtube;
