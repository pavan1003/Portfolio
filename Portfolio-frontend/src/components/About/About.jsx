import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Experience from "./Experience";

function About() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/careers`)
      .then((response) => response.json())
      .then((data) => {
        const sortedCareers = data.sort(
          (a, b) => new Date(b.jobStartDate) - new Date(a.jobStartDate)
        );
        setCareers(sortedCareers);
      })
      .catch((error) => console.error("Error fetching careers:", error));
  }, []);

  return (
    <Container fluid id="about" className="section">
      <Particle />
      <Container>
        <Row className="justify-content-center py-3">
          <Col md={7} className="d-flex flex-column justify-content-center pt-4 pb-5">
            <h1 className="display-4 pb-3">
              About <strong className="txt-color">Me</strong>
            </h1>
            <Aboutcard careers={careers} />
          </Col>
          <Col md={5} className="pt-5 pb-5 d-flex justify-content-center">
            <img src="/programmer-working.png" alt="about" className="img-fluid about-img" />
            {/* Image taken from https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm#fromView=search&page=1&position=0&uuid=0d997524-bd8e-4749-bf48-23364fcc3515 */}
          </Col>
        </Row>
        <Experience careers={careers} />
      </Container>
    </Container>
  );
}

export default About;
