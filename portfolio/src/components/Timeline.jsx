import "./../css/Timeline.css";

function Timeline({ position, instituteName, date, status, work }) {
  const workCopy = [...work];
  return (
    <div className={`timeline-container ${position}`}>
      <div className="description-box">
        <h1>{instituteName}</h1>
        <span>{date}</span>
        <h2>{status}</h2>
        {workCopy.map((desc) => {
          return <p key={desc.id}>{desc.description}</p>;
        })}
      </div>
    </div>
  );
}

export default Timeline;
