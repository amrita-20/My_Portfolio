import "./../css/Home.css";
import Accordion from "./Accordion";
import accordionData from "../skills";
import Button from "./Button";
import resume from "./../assets/amrita.dubey.pdf";
import video from "./../assets/main-img.mp4";

function Home() {
  const handleDownload = (e) => {
    e.preventDefault();
    window.open(resume);
  };
  return (
    <>
      <div className="panel">
        <div className="panel__container">
          {/* <img src={panelImg} alt="picture of amrita"></img> */}
          <video
             playsInline
             autoPlay
             muted
             loop
             preload="auto"
             className="video"
          >
           <source src={video} type="video/mp4" />
          </video>
          <div className="panel__content">
            <h1>Amrita Dubey</h1>
            <h2>Software Engineer</h2>
            <div className="panel__description">
              <p>
                Hello, Amrita Dubey here — an experienced software engineer
                currently pursuing a master's degree in information systems at
                Northeastern University. Demonstrating a proven track record of
                adaptability, diverse projects have been successfully navigated
                across the entire software development lifecycle, from ideation
                to deployment.
              </p>
              <p>
                My experience includes building intuitive and responsive user
                interfaces for a widespread consumer base. Experience at JP
                Morgan, Deloitte, and Infosys has honed skills in debugging and
                collaborating with cross-functional teams.
              </p>
              <p>
                Proficient in utilizing project execution tools, including the
                Agile methodology, Git, SVN, Figma, Bitbucket, Jira, Confluence,
                and Jenkins.
              </p>
            </div>
            <Button type="button" className="download" onClick={handleDownload}>
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skills__content">
          <h2 className="skills__title">Skills Overview</h2>
          <div className="accordion">
            {accordionData.map((data) => (
              <Accordion
                title={data.title}
                content={data.content}
                key={data.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
