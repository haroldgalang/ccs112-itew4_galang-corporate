import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";
import team5 from "../assets/images/team5.jpg";
import team6 from "../assets/images/team6.jpg";
import team7 from "../assets/images/team7.jpg";
import team8 from "../assets/images/team8.jpg";

function Teams() {
  return (
    <Container fluid>
      <div className="title-holder">
        <h2>Our Teams</h2>
        <div className="subtitle">some of our experts</div>
      </div>
      <Row>
        <Col className="col-sm-3">
          <div className="image">
            <img src={team1} alt="team1"></img>
            <div className="overlay">
              <div class="socials">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>Gabriel Hart</h3>
            <span class="designation">CEO</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              facilis, totam maiores.
            </p>
          </div>
        </Col>
        <Col className="col-sm-3">
          <div className="image">
            <img src={team2} alt="team2"></img>
            <div className="overlay">
              <div class="socials">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>David Antony</h3>
            <span class="designation">Manager</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              facilis, totam maiores.
            </p>
          </div>
        </Col>
        <Col className="col-sm-3">
          <div className="image">
            <img src={team3} alt="team3"></img>
            <div className="overlay">
              <div class="socials">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>Nicholas Perry</h3>
            <span class="designation">UX Designer</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              facilis, totam maiores.
            </p>
          </div>
        </Col>
        <Col className="col-sm-3">
          <div className="image">
            <img src={team4} alt="team4"></img>
            <div className="overlay">
              <div class="socials">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>Sarah Wills</h3>
            <span class="designation">Developer</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              facilis, totam maiores.
            </p>
          </div>
        </Col>
        <Col className="col-sm-3">
          <div className="image">
            <img src={team5} alt="team5"></img>
            <div className="overlay">
              <div class="socials">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>Sophia Pitt</h3>
            <span class="designation">Developer</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              facilis, totam maiores.
            </p>
          </div>
        </Col>
        <Col className="col-sm-3">
          <div className="image">
            <img src={team6} alt="team6"></img>
            <div className="overlay">
              <div class="socials">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>Taylor Lopez</h3>
            <span class="designation">Developer</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              facilis, totam maiores.
            </p>
          </div>
        </Col>
        <Col className="col-sm-3">
          <div className="image">
            <img src={team7} alt="team7"></img>
            <div className="overlay">
              <div class="socials">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>Ryan Giggs</h3>
            <span class="designation">Content Writer</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              facilis, totam maiores.
            </p>
          </div>
        </Col>
        <Col className="col-sm-3">
          <div className="image">
            <img src={team8} alt="team8"></img>
            <div className="overlay">
              <div class="socials">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>David Smith</h3>
            <span class="designation">SEO Expert</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              facilis, totam maiores.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Teams;
