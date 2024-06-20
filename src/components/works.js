import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import Pagination from "react-bootstrap/Pagination";

function Works() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container fluid>
      <div className="title-holder">
        <h2>Our Works</h2>
        <div className="subtitle">our awesome works</div>
      </div>
      <Row className="portfoliolist">
        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img2} alt="img2"></img>
              <div className="label text-center">
                <h3>Lonely Path</h3>
                <p>Web Design</p>
              </div>
            </a>
          </div>
        </Col>

        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img3} alt="img3"></img>
              <div className="label text-center">
                <h3>Photographer Girl</h3>
                <p>Branding</p>
              </div>
            </a>
          </div>
        </Col>

        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img4} alt="img4"></img>
              <div className="label text-center">
                <h3>The Difference</h3>
                <p>Web Design</p>
              </div>
            </a>
          </div>
        </Col>

        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img5} alt="img5"></img>
              <div className="label text-center">
                <h3>Nature Patterns</h3>
                <p>Branding</p>
              </div>
            </a>
          </div>
        </Col>

        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img6} alt="img6"></img>
              <div className="label text-center">
                <h3>The Difference</h3>
                <p>Photography</p>
              </div>
            </a>
          </div>
        </Col>

        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img7} alt="img7"></img>
              <div className="label text-center">
                <h3>Winter Sonata</h3>
                <p>Web Design</p>
              </div>
            </a>
          </div>
        </Col>

        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img8} alt="img8"></img>
              <div className="label text-center">
                <h3>Lonely Path</h3>
                <p>Branding</p>
              </div>
            </a>
          </div>
        </Col>

        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img9} alt="img9"></img>
              <div className="label text-center">
                <h3>Appreciation</h3>
                <p>Photography</p>
              </div>
            </a>
          </div>
        </Col>

        <Col className="col-sm-4">
          <div className="portfolio-wrapper">
            <a href="#!">
              <img src={img2} alt="img2"></img>
              <div className="label text-center">
                <h3>Happy Days</h3>
                <p>Web Design</p>
              </div>
            </a>
          </div>
        </Col>
      </Row>
      <div>
        <Pagination>{items}</Pagination>
      </div>
    </Container>
  );
}

export default Works;
