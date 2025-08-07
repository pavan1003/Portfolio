import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard({ careers }) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0 text-start">
          <p>
            Hello, everyone! My name is <span className="txt-color">Pavan Mistry </span>, and I'm
            from the vibrant city of <span className="txt-color">Vadodara in Gujarat, India.</span>
            Currently, I'm working as a {careers[0]?.jobTitle || ""} at{" "}
            {careers[0]?.companyName || ""}
          </p>
          <p>
            Apart from coding, I love travelling to new destinations as well as gliding around on my
            skates. These interests keep me inspired and balanced, both in my professional and
            personal life.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
