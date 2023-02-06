import React from "react";
import { Container } from "react-bootstrap";
import Coke from "../images/Coke.png";

function Cokestudio() {
    const data = [
        {"id":1, "link":"https://www.youtube.com/embed/5Eqb_-j3FDA"},
        {"id":2, "link":"https://www.youtube.com/embed/zQDAi8tI-cU"},
        {"id":3, "link":"https://www.youtube.com/embed/BUm_hFMlsgg"},
        {"id":4, "link":"https://www.youtube.com/embed/Ef4gGOX1F4o"},
    ]
  return (
    <div>
      <img className="d-block w-100" src={Coke} alt="Coke Studio" />
      <br />
      <Container>
        <h3>Coke Studio </h3>
        <hr></hr>
        {data.map((item) => (
           
        <div class="ratio ratio-21x9 my-4">
        <iframe
          src={item.link}
          title="YouTube video"
          allowfullscreen
        ></iframe>
         
      </div>)
        )}
     </Container>
    </div>
  );
}

export default Cokestudio;
