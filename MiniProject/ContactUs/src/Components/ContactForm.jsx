import "../ComponentsStyles/ContactForm.css";
import { FaRegMessage } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submit,setSubmit]=useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submiteed.");
    // console.log(event);
    setName(event.target[3].value);
    setText(event.target[4].value);
    setEmail(event.target[5].value);
    // setSubmit(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="mainContainer">
          {/* Left side (Form) */}
          <div className="formSection">
            <div className="buttonIcons1">
              <button>
                <FaRegMessage /> Via Support Chat
              </button>
              <button>
                <BiSolidPhoneCall /> Via Call
              </button>
            </div>
            <div className="button3">
              <button>
                <AiOutlineMail /> Via Email Form
              </button>
            </div>
            <div className="inputControl">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="inputControl">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div className="inputControl">
              <label htmlFor="text">Text</label>
              <textarea name="text" />
            </div>
            <button type="submit">Submit</button>
          </div>

          {/* Right side (Image) */}
          <div className="imageBox">
            <img src="/src/assets/Service 24_7-pana 1.png" alt="img" />
          </div>
          {/* <div>{name + " " + email + " " + text}</div> */}
        </div>
      </form>
      {(name || email || text)  && (
        <div className="submittedContent">
          <h2>Submitted Information</h2>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Message:</strong> {text}
          </p>
        </div>
      )}
    </>
  );
}

export default ContactForm;
