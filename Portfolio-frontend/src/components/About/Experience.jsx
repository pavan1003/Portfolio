import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

function AboutCard() {
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
    <section className="bsb-timeline-1 py-5 py-xl-8">
      <div className="container">
        <Row className="justify-content-center">
          <h1 className="project-heading pb-4">
            Professional <strong className="txt-color">Experiences</strong>
          </h1>
          <Col md={8} xl={6} className="col-10">
            <ul className="timeline">
              {careers.map((career, index) => (
                <li className="timeline-item" key={index}>
                  <div className="timeline-body">
                    <div className="timeline-content">
                      <div className="card border-0">
                        <div className="card-body p-0 my-2">
                          <h5 className="card-subtitle text-secondary">
                            {career.jobStartDate.split("T")[0]} -
                            {career.jobEndDate ? " " + career.jobEndDate.split("T")[0] : " Present"}
                          </h5>
                          <h4 className="card-title text-start ms-3 mb-3">
                            <Row className="text-start">
                              <Col sm={1} md={1}>
                                <img
                                  src={career.careerImage}
                                  alt={"Logo of " + career.companyName}
                                  width="50px"
                                  className="company-image"
                                ></img>
                              </Col>
                              <Col className="ms-2">
                                {career.jobTitle} at {career.companyName}
                              </Col>
                            </Row>
                            <figcaption class="blockquote-footer">{career.jobLocation}</figcaption>
                          </h4>
                          <ul className="ms-3">
                            {career.jobDescription.map((description) => (
                              <li className=" text-start card-text m-0">{description}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default AboutCard;
