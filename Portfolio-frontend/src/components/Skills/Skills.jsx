import { useState, useEffect } from "react";
import Particle from "../Particle";

import { Container, Col, Row } from "react-bootstrap";

function Skills() {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/skills`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const sortedSkills = data.sort((a, b) => a.skillName.localeCompare(b.skillName));
      setSkills(sortedSkills);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <Container fluid id="skills" className="section">
      <Particle />
      <Container>
        <h1 className="display-4 pb-3">
          Professional <strong className="txt-color">Skills</strong>
        </h1>
        <Row className="justify-content-evenly align-items-start">
          {skills.map((skill, index) => (
            <Col key={index} xs={4} md={2} className="mb-3 skill-width">
              <div className="skill-img">
                <img
                  src={skill.skillImage}
                  alt={`Logo of ${skill.skillName}`}
                  className="img-fluid rounded rounded-3 mb-1"
                />
              </div>
              <p>{skill.skillName}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;
