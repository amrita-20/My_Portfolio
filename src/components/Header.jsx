import { useState } from "react";
import icon from "./../assets/amrita-icon.jpg";
import "./../css/Header.css";
import GlobalNav from "./GlobalNav";
import Overlay from "./Overlay";

function Header({ setPage, onThemeSelection }) {
  const [menuState, steMenuState] = useState("");
  const [overlay, setOverlay] = useState("hide");
  const [selectedTheme, setSelectedTheme] = useState("");

  const openThemeMenu = () => {
    if (!menuState) {
      steMenuState("open");
    } else {
      steMenuState("");
    }
  };

  const handleThemeSelection = (e, theme) => {
    e.preventDefault();
    setSelectedTheme(theme);
    steMenuState("");
    onThemeSelection(theme);
  };
  return (
    <>
      <a className="skiplink" href="#main">
        Skip to content
      </a>
      <header className="header">
        <img
          className="header__logo"
          src={icon}
          alt="logo image of amrita"
        ></img>
        
        <GlobalNav
          overlay={overlay}
          setOverlay={setOverlay}
          setPage={setPage}
        />
        <div className="theme-menu">
          <div className="theme-wraper">
            <button
              type="button"
              className="button has-icon theme-main"
              aria-label="theme switch menu"
              onClick={() => openThemeMenu()}
            >
              <i
                className={`gg-${selectedTheme === "dark" ? "moon" : "sun"}`}
              ></i>
              Theme
            </button>
          </div>
          <ul className={`theme-menu__list ${menuState}`}>
            <li className="theme-menu__item">
              <a
                className="theme-menu__link"
                href=""
                onClick={(e) => handleThemeSelection(e, "light")}
              >
                <i className="gg-sun"></i>Light
              </a>
            </li>
            <li className="theme-menu__item">
              <a
                className="theme-menu__link"
                href=""
                onClick={(e) => handleThemeSelection(e, "dark")}
              >
                <i className="gg-moon"></i>Dark
              </a>
            </li>
          </ul>
        </div>
        <Overlay
          overlay={overlay}
          setOverlay={setOverlay}
          setPage={setPage}
        ></Overlay>
      </header>
    </>
  );
}

export default Header;
