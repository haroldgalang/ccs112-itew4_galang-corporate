import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import slide1 from "../assets/images/img-hero1.jpg";
import slide2 from "../assets/images/img-hero2.jpg";
import slide3 from "../assets/images/img-hero3.jpg";

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="slide 1" />
        <Carousel.Caption>
          <h2>The perfect design for your website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            suscipit dicta nulla. Consequuntur obcaecati officiis, labore
            doloribus non tempore impedit consequatur ab dolor. Explicabo quam
            repellendus vero omnis, nisi odio!
          </p>
          <Button variant="primary">
            Learn More <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h2>Start Your Future Financial Plan</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            suscipit dicta nulla. Consequuntur obcaecati officiis, labore
            doloribus non tempore impedit consequatur ab dolor. Explicabo quam
            repellendus vero omnis, nisi odio!
          </p>
          <Button variant="primary">
            Learn More <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h2>Enjoy the Difference</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            suscipit dicta nulla. Consequuntur obcaecati officiis, labore
            doloribus non tempore impedit consequatur ab dolor. Explicabo quam
            repellendus vero omnis, nisi odio!
          </p>
          <Button variant="primary">
            Learn More <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
