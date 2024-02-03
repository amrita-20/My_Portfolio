import panelImg from "./../assets/panel-img.jpeg";
import "./../css/Home.css";
import Accordion from "./Accordion";
import accordionData from "../skills";
import Button from "./Button";
import resume from "./../assets/Amrita_Resume.pdf";

function Home() {
  const handleDownload = (e) => {
    e.preventDefault();
    window.open(resume);
  };
  return (
    <>
      <div className="panel">
        <div className="panel__container">
          <img src={panelImg} alt="picture of amrita"></img>
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
                to deployment. Expertise includes crafting scalable web
                applications using ReactJS, VueJS, NodeJS, and Java. Proficiency
                in JavaScript, HTML, JSON, and CSS is applied to build intuitive
                and responsive user interfaces for a widespread consumer base.
                Experience at JP Morgan, Deloitte, and Infosys has honed skills
                in debugging and collaborating with cross-functional teams.
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
