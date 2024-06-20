import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

function About() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <Container fluid>
      <div className="title-holder">
        <h2>About Us</h2>
        <div className="subtitle">learn more about us</div>
      </div>
      <Row>
        <Col className="col-sm-6">
          <img src={img1} alt="img1" />
        </Col>
        <Col className="col-sm-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit dicta veritatis sint quidem asperiores magni eaque
            praesentium temporibus, magnam, eveniet consequatur possimus nihil?
            Nemo deserunt repudiandae soluta neque doloribus, quo!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            alias ex error distinctio laudantium recusandae, iure. Vel nisi
            soluta, minus consectetur reiciendis laborum, laudantium
            perspiciatis quos molestias quam eum.
          </p>
          <div className="progress-block">
            <h4>HTML/CSS/Javascript</h4>
            <ProgressBar now={html} label={`${html}%`} />
          </div>
          <div className="progress-block">
            <h4>Responsive</h4>
            <ProgressBar now={responsive} label={`${responsive}%`} />
          </div>
          <div className="progress-block">
            <h4>Photoshop</h4>
            <ProgressBar now={photoshop} label={`${photoshop}%`} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
