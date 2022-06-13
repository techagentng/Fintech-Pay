import Button from "../components/button";
import { useState } from "react";
import "../css/modal.css";
import InfoSucess from "./infoSucess";
import SheetDB from "sheetdb-js";
// import name from "./icons/name.svg";
// import label from "./icons/label.svg";
// import name2 from "./icons/name2.svg";

const Modal = ({ setIsOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState({
    text: "",
    info: "",
  });
  const [inputMessage, setInputMessage] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const removeName = () => {
    setName((c) => (c = ""));
  };
  const removeEmail = () => {
    setEmail((c) => (c = ""));
  };
  const removePhone = () => {
    setPhone((c) => (c = ""));
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.trim().length === 0) {
      setInputMessage({ ...inputMessage, name: "Name field is required" });
    } else {
      setInputMessage({ ...inputMessage, name: "" });
    }
  };

  const handleChangeEmail = (e) => {
    const regexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setEmail(e.target.value);
    if (e.target.value.trim().length === 0) {
      setInputMessage({ ...inputMessage, email: "Email field is required" });
    } else if (!regexp.test(e.target.value)) {
      setInputMessage({ ...inputMessage, email: "Invalid email" });
    } else {
      setInputMessage({ ...inputMessage, email: "" });
    }
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    if (e.target.value.trim().length === 0) {
      setInputMessage({ ...inputMessage, phone: "Phone field is required" });
    } else {
      setInputMessage({ ...inputMessage, phone: "" });
    }
  };
// Submit to sheetdb
  const submit = (name, phone, email) => { //data
    SheetDB.write("https://sheetdb.io/api/v1/2ie30scu02gaw", {
      data: {
        name: name,
        phone: phone,
        email: email,
      },
    }).then(
      function (result) {
        console.log(result);
        displayMessage("Information sent successfully", "success");
      },
      function (error) {
        console.log(error);
        displayErrorMessage("An error occurred, Please try again", "danger");
      }
    );
  };
  const displayMessage = (text, info) => {
    setAlert(true);
    setMessage({ text: text, info: info });
    setTimeout(() => {
      setAlert(false);
      setMessage({ text: "", info: "" });
      setIsOpen(); //open n hold parsed for 3.5s
    }, 3500);
  };
  const displayErrorMessage = (text, info) => {
    setAlert(true);
    setMessage({ text: text, info: info });
    setTimeout(() => {
      setAlert(false);
      setMessage({ text: "", info: "" });
    }, 5000);
  };
  const exists = (email) => {
    SheetDB.read("https://sheetdb.io/api/v1/2ie30scu02gaw", {
      search: { email: email },
    }).then(
      function (res) {
        if (res.length === 0) {
          submit(name, phone, email);
          removeEmail();
          removeName();
          removePhone();
        } else {
          displayErrorMessage(`Email already in the wait list `, "danger");
        }
      },
      function (err) {
        console.log(err);
      }
    );
  };
  // submit to application state
  const onSubmit = (e) => {
    console.log(name, email, phone);
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      setInputMessage({
        name: name === "" ? "Name field is required" : "",  
        phone: phone === "" ? "Phone field is required" : "",
        email: email === "" ? "Email field is required" : "",
      });
    } else {
      // check if email exist before submitting
      exists(email);
    }
  };

  return (
    <div className=" modal-general-container">
      <InfoSucess alert={alert} message={message} />
      <div className="modal-container">
        <div className="modal-wrapper">
          <div className="modal-header">
            <div className="modal-title">
              <p>Join Waitlist</p>
              <i>
                <Cancel handleClick={setIsOpen} />
              </i>
            </div>
            <p className="modal-description">
              This allows us to sign you up as a ZojaPay agent to provide cash fulfilment services when the product goes live.
            </p>
          </div>
          <div className="modal-input-container">
            <label>Name</label>
            <div className="modal-input-section">
              <div>
                <i>
                  <Person />
                </i>
                <input
                  onChange={handleChangeName}
                  value={name}
                  name="full_name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <i>
                <Cancel handleClick={removeName} />
              </i>
            </div>
            {inputMessage.name ? (
              <p className="error-message">{inputMessage.name}</p>
            ) : null}
          </div>

          <div className="modal-input-container">
            <label>Phone Number</label>
            <div className="modal-input-section">
              <div>
                <i>
                  <Phone />
                </i>
                <input
                  onChange={handleChangePhone}
                  value={phone}
                  name="phone"
                  type="text"
                  placeholder="09151256789"
                  maxLength="11"
                  required
                />
              </div>
              <i>
                <Cancel handleClick={removePhone} />
              </i>
            </div>
            {inputMessage.phone ? (
              <p className="error-message">{inputMessage.phone}</p>
            ) : null}
          </div>
          <div className="bottom modal-input">
            <label>Email</label>
            <div className="modal-input-section">
              <div>
                <i>
                  <Email />
                </i>
                <input
                  name="email"
                  onChange={handleChangeEmail}
                  value={email}
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <i>
                <Cancel handleClick={removeEmail} />
              </i>
            </div>
            {inputMessage.email ? (
              <p className="error-message">{inputMessage.email}</p>
            ) : null}
          </div>
          <div onClick={onSubmit} className="feature-btn">
            <Button content="Join Waitlist" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

function Cancel({ handleClick }) {
  return (
    <svg
      onClick={handleClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.35"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.382812 11.75C0.382812 5.26065 5.64347 0 12.1328 0C18.6222 0 23.8828 5.26065 23.8828 11.75C23.8828 18.2393 18.6222 23.5 12.1328 23.5C5.64347 23.5 0.382812 18.2393 0.382812 11.75Z"
        fill="#CCCCCC"
      />
      <path
        d="M17.7647 7.65638L17.2265 7.11823C17.077 6.96873 16.8347 6.96873 16.6852 7.11823L12.6328 11.1706L8.58042 7.11823C8.43092 6.96873 8.18854 6.96873 8.03904 7.11823L7.50089 7.65638C7.35139 7.80588 7.35139 8.04826 7.50089 8.19776L11.5533 12.2501L7.50089 16.3025C7.3514 16.452 7.3514 16.6944 7.50089 16.8439L8.03905 17.382C8.18854 17.5315 8.43093 17.5315 8.58043 17.382L12.6328 13.3296L16.6852 17.382C16.8347 17.5315 17.077 17.5315 17.2265 17.382L17.7647 16.8439C17.9142 16.6944 17.9142 16.452 17.7647 16.3025L13.7123 12.2501L17.7647 8.19776C17.9142 8.04826 17.9142 7.80588 17.7647 7.65638Z"
        fill="black"
        fill-opacity="0.65"
      />
    </svg>
  );
}

function Person() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9848 15.3462C8.11719 15.3462 4.81433 15.931 4.81433 18.2729C4.81433 20.6148 8.09624 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8734 15.3462 11.9848 15.3462Z"
        stroke="#494B83"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38858 4.8716 7.38858 7.40969C7.38001 9.93922 9.42382 11.9973 11.9524 12.0059H11.9848Z"
        stroke="#494B83"
        stroke-width="1.42857"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
function Email() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9026 10.8511L13.4593 14.4642C12.6198 15.1302 11.4387 15.1302 10.5992 14.4642L6.11841 10.8511"
        stroke="#494B83"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9089 23C19.9502 23.0084 22 20.5095 22 17.4384V10.57C22 7.49883 19.9502 5 16.9089 5H7.09114C4.04979 5 2 7.49883 2 10.57V17.4384C2 20.5095 4.04979 23.0084 7.09114 23H16.9089Z"
        stroke="#494B83"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
function Phone() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z"
        stroke="#494B83"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}
