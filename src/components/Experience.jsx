import Timeline from "./Timeline";
import experince from "../experince";

function Experience() {
  const experinceList = experince.map((exp) => {
    return (
      <Timeline
        position={exp.position}
        instituteName={exp.companyName}
        date={exp.date}
        status={exp.designation}
        work={exp.work}
        key={exp.id}
      />
    );
  });

  return <div className="timeline">{experinceList}</div>;
}

export default Experience;
