import "./../css/Form.css";
import Button from "./Button";
import { useRef, useState } from "react";

function Form({ mainRef }) {
  const emailPattern = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const formContainerRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isValidForm()) {
      return;
    }
    setSuccessMsg("Form validated successfully");
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  };

  const isValidForm = () => {
    let isValid = true;
    setNameError("");
    setEmailError("");
    setConfirmEmailError("");
    if (!name) {
      setNameError("name is required");
      isValid = false;
    }
    if (!email) {
      setEmailError("email is required");
      isValid = false;
    } else if (!new RegExp(emailPattern).test(email)) {
      setEmailError("Email should be a valid email address");
      isValid = false;
    }
    if (!confirmEmail) {
      setConfirmEmailError("confirm email is required");
      isValid = false;
    } else if (email !== confirmEmail) {
      setConfirmEmailError("Confirm email should match email");
      isValid = false;
    }
    return isValid;
  };

  return (
    <div className="form-wrapper" ref={formContainerRef}>
      <div className="success-msg">{successMsg}</div>
      <p>Mandatory fields are marked with *</p>
      <form className="form">
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name: <span>*</span>
          </label>
          <input
            className="input name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="name-error hidden error">{nameError}</p>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email: <span>*</span>
          </label>
          <input
            className="input email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="email-error hidden error">{emailError}</p>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="confirm-email">
            Confirm Email: <span>*</span>
          </label>
          <input
            className="input confirm-email"
            id="confirm-email"
            name="confirm-email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
          <p className="confirm-email-error hidden error">
            {confirmEmailError}
          </p>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="textarea confirm-email"
            id="message"
            name="message"
          />
          <p className="message-error hidden error"></p>
        </div>
        <div className="button-container">
          <Button
            type="button"
            className="button send"
            onClick={(e) => handleFormSubmit(e)}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
