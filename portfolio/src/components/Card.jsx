import Button from "./Button";
import "./../css/Card.css";

function Card({ title, pic, alt, onClick, linkText, description }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={pic} alt={alt} />
      </div>
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p>{description}</p>
        <p>
          <span>Tech and Tools: </span>{" "}
          <span>Java, NumPy, JavaFX, TensorFlow, MNIST, Maven</span>
        </p>
        <Button
          type="button"
          visual="link"
          className="card__link"
          onClick={(e) => onClick(e)}
        >
          {linkText}
        </Button>
      </div>
    </div>
  );
}

export default Card;
