import { useState, useEffect } from "react";
import Particle from "../Particle";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Container, Col, Row } from "react-bootstrap";

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  const fetchCertifications = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/certifications`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const sortedCertifications = data.sort((a, b) => a.certName.localeCompare(b.certName));
      setCertifications(sortedCertifications);
    } catch (error) {
      console.error("Error fetching certifications:", error);
    }
  };

  useEffect(() => {
    fetchCertifications();
  }, []);

  return (
    <Container fluid id="certifications" className="section">
      <Particle />
      <Container>
        <h1 className="display-4 pb-3">
          Professional <strong className="txt-color">Certifications</strong>
        </h1>
        <Row className="justify-content-center align-items-end">
          {certifications.map((cert, index) => (
            <Col key={index} xs={4} md={2} className="mb-3 cert-width">
              <div className="cert-img">
                <img
                  src={cert.certImage}
                  alt={`Logo of ${cert.certName}`}
                  className="img-fluid rounded rounded-3 mb-1 cert-img"
                />
              </div>
              <p>
                {cert.certName}
                <a className="text-white text-decoration-none" href={cert.certUrl} target="_blank">
                  <FaExternalLinkAlt
                    className="ps-2"
                    size={25}
                    aria-label={`Link to ${cert.certName}`}
                  />
                </a>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
