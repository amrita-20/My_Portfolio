import Card from "./Card";
import projects from "../projects";

function Projects() {
  const viewProject = (url="/") => {
    window.location.href= url;
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
        linkUrl={projectDetail.linkUrl}
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
