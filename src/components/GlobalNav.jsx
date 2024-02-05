import "./../css/GlobalNav.css";
import menu from "../menu";

function GlobalNav({ overlay, setOverlay, setPage }) {
  const openHamburgerMenu = () => {
    if (overlay) {
      setOverlay("");
    }
  };

  const navigate = (e, name) => {
    e.preventDefault();
    setPage(name);
  };

  const navList = menu.map((item) => {
    return (
      <li className="nav__item" key={item.name}>
        <a
          className="nav__link"
          href=""
          onClick={(e) => navigate(e, item.name)}
        >
          {item.name}
        </a>
      </li>
    );
  });
  return (
    <nav className="nav">
      <button
        className="nav__main"
        type="button"
        aria-label="hamburger menu"
        onClick={() => openHamburgerMenu()}
      >
        <i className="gg-menu"></i>
      </button>
      <ul className="nav__list">{navList}</ul>
    </nav>
  );
}

export default GlobalNav;
