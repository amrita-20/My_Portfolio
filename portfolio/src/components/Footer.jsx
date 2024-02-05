import linkedinSvg from "./../assets/linkedin.svg";
import githubSvg from "./../assets/github.svg";
import emailSvg from "./../assets/email.svg";
import locationSvg from "./../assets/location.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2023 Amrita Dubey. All Rights Reserved. </p>
        <div className="footer__item email-detail">
            <img className="contact-icon" src={emailSvg} alt="icon of email" />
            <a href="mailto: dubey.am@northeastern.edu">
              dubey.am@northeastern.edu
            </a>
          </div>
          <div className="location-detail">
            <img
              className="contact-icon"
              src={locationSvg}
              alt="icon of location"
            />
            <a href="https://www.google.com/maps/place/San+Jose,+CA/@37.2961211,-121.9809076,11z">San Jose, California</a>
          </div>
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
