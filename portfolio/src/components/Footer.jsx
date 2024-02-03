import linkedinSvg from "./../assets/linkedin.svg";
import githubSvg from "./../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2023 Amrita Dubey. All Rights Reserved. </p>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/amrita-dubey-341881157/"
            >
              <img src={linkedinSvg} alt="linkedin icon" />
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://github.com/amrita-20/">
              <img src={githubSvg} alt="github icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
