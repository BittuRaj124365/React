import { useState } from "react";
export default function Form() {
//   const [username, setUsername] = useState("Bittu");
//   let handleSubmit = (event) => {
//     setUsername(event.target.value);
// }
    const [formData,setFormData]=useState({
        username:"",
        fullname:"",
    })

  let handleInputChange=(event)=>{
    // let fieldInput=event.target.name;
    // setFormData(fieldInput)
    let fieldInput=event.target.value;
    console.log(fieldInput);
  }
  return (
    <form>
        <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Enter name"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />
      <br />
        <label htmlFor="fullName">Fullname</label>
      <input
        type="text"
        placeholder="Enter fullname"
        value={formData.fullname}
        id="fullName"
        name="fullname"
        onChange={handleInputChange}
      />
      <br />
      <button>Submit</button>
    </form>
  );
  };
