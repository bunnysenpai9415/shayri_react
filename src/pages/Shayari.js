import React from 'react'
import { Container } from 'react-bootstrap';
import Sher from '../images/Sher.png'

function Shayari() {
    const data = [
        {"id":1, "link":"https://www.youtube.com/embed/yzKWSTPwwKs"},
        {"id":2, "link":"https://www.youtube.com/embed/mHHq79tNiGw"},
        {"id":3, "link":"https://www.youtube.com/embed/--PuNBY7Ftc"},
        {"id":4, "link":"https://www.youtube.com/embed/yGV-MhuTqZE"},
        {"id":5, "link":"https://www.youtube.com/embed/JlwzTk9aypE"},
        {"id":6, "link":"https://www.youtube.com/embed/zkSbHgIFsEQ"},
        {"id":7, "link":"https://www.youtube.com/embed/VRyb93k1lRc"},
        {"id":8, "link":"https://www.youtube.com/embed/87iqiRxb-sc"}       
    ]
  return (
    <div>
      <img className="d-block w-100" src={Sher} alt="Coke Studio" />
      <br />
      <Container>
        <h3>Sher O Shayari </h3>
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

export default Shayari