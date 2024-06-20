import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClone,
  faSnowflake,
  faPlug,
  faDesktop,
  faTrophy,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <Container fluid>
      <div className="title-holder">
        <h2>Our Services</h2>
        <div className="subtitle">service we provide</div>
      </div>
      <Row>
        <Col className="holder col-sm-4">
          <div className="icon">
            <FontAwesomeIcon icon={faClone} />
          </div>
          <h3>Responsive Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam
            et mollitia eaque incidunt sed.
          </p>
        </Col>
        <Col className="holder col-sm-4">
          <div className="icon">
            <FontAwesomeIcon icon={faSnowflake} />
          </div>
          <h3>Creative Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam
            et mollitia eaque incidunt sed.
          </p>
        </Col>
        <Col className="holder col-sm-4">
          <div className="icon">
            <FontAwesomeIcon icon={faPlug} />
          </div>
          <h3>SEO Optimized</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam
            et mollitia eaque incidunt sed.
          </p>
        </Col>
        <Col className="holder col-sm-4">
          <div className="icon">
            <FontAwesomeIcon icon={faDesktop} />
          </div>
          <h3>Retina Ready</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam
            et mollitia eaque incidunt sed.
          </p>
        </Col>
        <Col className="holder col-sm-4">
          <div className="icon">
            <FontAwesomeIcon icon={faTrophy} />
          </div>
          <h3>Browser Compatibility</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam
            et mollitia eaque incidunt sed.
          </p>
        </Col>
        <Col className="holder col-sm-4">
          <div className="icon">
            <FontAwesomeIcon icon={faLifeRing} />
          </div>
          <h3>Customer Support</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam
            et mollitia eaque incidunt sed.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
