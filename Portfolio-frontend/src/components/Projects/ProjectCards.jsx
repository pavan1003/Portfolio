import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view pt-3">
      <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
        <img
          src="/project/ProjectFrame.png"
          alt="Project frame"
          style={{
            width: "100%",
            display: "block",
            position: "relative",
            zIndex: 1,
          }}
        />
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={`Preview image of ${props.title}`}
          onError={(e) => {
            e.currentTarget.src = "/project/Placeholder.png";
          }}
          style={{
            position: "absolute",
            top: "8%",
            left: "12%",
            width: "76%",
            height: "80%",
            objectFit: "inherit",
            zIndex: 2,
            borderRadius: "8px",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-start">{props.description}</Card.Text>
        <div className="d-flex justify-content-center align-items-center">
          {props.githubLink && (
            <Button variant="primary" href={props.githubLink} target="_blank">
              <BsGithub size={20} /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button className="m-2" variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite size={20} /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
