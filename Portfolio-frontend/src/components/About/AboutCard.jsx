import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard({ careers }) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0 text-start">
          <p>
            Hi, I'm <span className="txt-color">Pavan Mistry</span> from
            <span className="txt-color"> Vadodara, Gujarat</span>. I work as a{" "}
            {careers[0]?.jobTitle || ""} at {careers[0]?.companyName || ""}, where I turn ideas into
            clean, functional, and user-friendly software.
          </p>
          <p>
            When I'm not coding, you'll probably find me exploring new places or skating around the
            city— both keep me curious, creative, and balanced.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
