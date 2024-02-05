import Button from "./Button";
import "./../css/Card.css";

function Card({ title, pic, alt, onClick, linkText,linkUrl, description, techDesc }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={pic} alt={alt} />
      </div>
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p>{description}</p>
        <p
         className="card__desc">{techDesc}
        </p>
        {/* <Button
          type="button"
          visual="link"
          className="card__link"
          onClick={() => onClick(linkUrl)}
        >
          {linkText}
        </Button> */}
      </div>
    </div>
  );
}

export default Card;
