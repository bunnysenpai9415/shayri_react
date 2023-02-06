import React from 'react'
import { Container } from "react-bootstrap";
import nusrat from '../images/Nusrat.png';

function Nusrat() {
    const data = [
        {"id":1, "link":"https://www.youtube.com/embed/lsqsggtTZfs"},
        {"id":2, "link":"https://www.youtube.com/embed/3R1eUfVxOGI"},
        {"id":3, "link":"https://www.youtube.com/embed/oIv98dVCfuM"},
        {"id":4, "link":"https://www.youtube.com/embed/bsOTYvNZhNk"},
    ]
  return (
    <div>
      <img className="d-block w-100" src={nusrat} alt="Coke Studio" />
      <br />
      <Container>
        <h3>Nusrat Fatah Ali Khan </h3>
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

export default Nusrat