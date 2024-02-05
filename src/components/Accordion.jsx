import { useState } from "react";
import "./../css/Accordion.css";

function Accordion({ title, content }) {
  const contentCopy = [...content];
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <button
        id={title}
        type="button"
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
        aria-expanded={isActive}
      >
        <h3>{title}</h3>
        <div className="accordion-icon">
          {isActive ? (
            <i className="gg-chevron-up-o"></i>
          ) : (
            <i className="gg-chevron-down-o"></i>
          )}
        </div>
      </button>
      {isActive &&
        contentCopy.map((item) => (
          <div className="accordion-content" aria-labelledby={title} key={item}>
            {item}
          </div>
        ))}
    </div>
  );
}

export default Accordion;
