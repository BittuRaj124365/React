import "../ComponentsStyles/ContactForm.css";
import { FaRegMessage } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
function ContactForm() {
  return (
    <form className="formContainer">
      <div className="mainContainer">
        <div className="buttonIcons1">
          <button>
            <FaRegMessage /> Via Support Chat
          </button>
          <button>
            <BiSolidPhoneCall />
            Via Call
          </button>
        </div>
        <div className="button3">
          <button>
            <AiOutlineMail />
            Via Email Form
          </button>
        </div>
        <div className="imageBox">
          <img src="/src/assets/Service 24_7-pana 1.png" alt="img" />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
