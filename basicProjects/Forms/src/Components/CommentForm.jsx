import { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: [event.target.value] };
    });
  };
  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: "",
    });
  };
  return (
    <div>
      <h4>comment form</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="Username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
          id="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          placeholder="add remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          name="remarks"
          id="remarks"
        >
          Remarks
        </textarea>
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="Rate"
          type="number"
          value={formData.rating}
          min={0}
          max={5}
          onChange={handleInputChange}
          name="rating"
          id="rating"
        />
        <br />
        <button>Add comments</button>
      </form>
    </div>
  );
}
