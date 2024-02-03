import menu from "../menu";
import Button from "./Button";

function Overlay({ overlay, setOverlay, setPage }) {
  const handleOverlayClose = () => {
    if (!overlay) {
      setOverlay("hide");
    }
  };

  const navigate = (e, name) => {
    e.preventDefault();
    setPage(name);
  };
  const menuList = menu.map((item) => {
    return (
      <li className="overlay-nav__item" key={item.name}>
        <a
          className="overlay-nav__link"
          href=""
          onClick={(e) => navigate(e, item.name)}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <div className={`overlay ${overlay}`}>
      <ul className="overlay-nav__list">{menuList}</ul>
      <button
        type="button"
        aria-label="close overlay"
        className="overlay-close"
        onClick={() => handleOverlayClose()}
      >
        <i className="gg-close"></i>
      </button>
    </div>
  );
}

export default Overlay;
