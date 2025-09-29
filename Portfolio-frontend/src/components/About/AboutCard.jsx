import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard({ careers }) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0 text-start">
          <p>
            Hi, I'm <span className="txt-color">Pavan Mistry</span>. I work as a
            <span className="txt-color"> {careers[0]?.jobTitle || "Tech Lead"}</span> at
            <span className="txt-color"> {careers[0]?.companyName || "Pangeon Inc."}</span>, where I
            turn ideas into clean, functional, and user-friendly software. Over the years, I've
            built full-stack applications with React, Node.js, Laravel, ASP.NET and Python, focusing on
            making products that are reliable, scalable, and easy to use.
          </p>

          <p>
            I enjoy solving problems that sit at the intersection of code and people, whether it's
            designing a smooth user experience, streamlining backend systems, or helping a team
            bring an idea to life. Collaboration and clear communication are just as important to me
            as writing good code.
          </p>

          <p>
            When I'm not coding, you'll probably find me exploring new places or skating around the
            city. Both keep me curious, creative, and balanced, which I bring back into the work I
            do.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
