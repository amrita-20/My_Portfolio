import Timeline from "./Timeline";
import education from "../education";

function Education() {
  const educationList = education.map((edu) => {
    return (
      <Timeline
        position={edu.position}
        instituteName={edu.collegeName}
        date={edu.date}
        status={edu.gpa}
        work={edu.work}
        key={edu.id}
      />
    );
  });

  return <div className="timeline">{educationList}</div>;
}

export default Education;
