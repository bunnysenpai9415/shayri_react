import Carousel from 'react-bootstrap/Carousel';
import Mirza from '../images/mirza.png'
import Jaun from '../images/jaun.png'
import Mohsin from '../images/mohsin.png'

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block "
          src={Jaun}
          alt="Jaun Elia"
        />
        <Carousel.Caption>
          <h3>Jaun Elia</h3>
          <p>Syed Hussain Sibt-e-Asghar Naqvi, commonly known as Jaun Elia (14 December 1931 – 8 November 2002), was an Pakistani poet, philosopher, biographer, and scholar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={Mohsin}
          alt="Mohsin Naqvi"
        />

        <Carousel.Caption>
          <h3>Mohsin Naqvi</h3>
          <p>Mohsin Naqvi (5 May 1947 − 15 January 1996) was a Pakistani poet, known for his ghazals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block "
           src={Mirza}
          alt="Mirza Galib"
        />

        <Carousel.Caption>
          <h3>Mirza Ghalib</h3>
          <p>
          Mirza Beg Asadullah Khan (27 December 1797 – 15 February 1869) also known as Mirza Ghalib was an Urdu and Persian poet of the 19th century Mughal and British era in the Indian Subcontinent.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;