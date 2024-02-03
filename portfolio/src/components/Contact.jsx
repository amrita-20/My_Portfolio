import Form from "./Form";
import "./../css/Contact.css";
import emailSvg from "./../assets/email.svg";
import locationSvg from "./../assets/location.svg";

function Contact({ mainRef }) {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-wraper">
        <Form mainRef={mainRef}></Form>
        <div className="contact-details">
          <div className="email-detail">
            <img className="contact-icon" src={emailSvg} alt="icon of email" />
            <span className="text">dubey.am@northeastern.edu</span>
          </div>
          <div className="location-detail">
            <img
              className="contact-icon"
              src={locationSvg}
              alt="icon of location"
            />
            <span className="text">San Jose, California</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
