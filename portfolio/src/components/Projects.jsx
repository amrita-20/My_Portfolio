import Card from "./Card";
import projects from "../projects";

function Projects({ setPage }) {
  const viewProject = (e) => {
    e.preventDefault();
    setPage("About Project");
  };
  const projectList = projects.map((projectDetail) => {
    return (
      <Card
        title={projectDetail.title}
        pic={projectDetail.img}
        alt={projectDetail.alt}
        description={projectDetail.description}
        onClick={viewProject}
        linkText={projectDetail.linkText}
        techLable={projectDetail.techLabel}
        techDesc={projectDetail.techDesc}
        key={projectDetail.id}
      ></Card>
    );
  });

  return (
    <div className="cards-container">
      <div className="cards">{projectList}</div>
    </div>
  );
}

export default Projects;
