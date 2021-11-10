import React, { useState } from "react";
const Form = () => {
  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialValue)
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <input type="text" name="name" placeholder='Your name' onChange={handleChange} />
      </label>
      <label htmlFor="">
        Email
        <input type="email" name="email" placeholder='Your email' onChange={handleChange} />
      </label>
      <label htmlFor="">
        Subject
        <input type="text" name="subject" placeholder='Your purpose' onChange={handleChange} />
      </label>
      <label htmlFor="">
        Message
        <input type="text" name="message" placeholder='Your message' onChange={handleChange} />
      </label>
      <input type="submit" value="Send Message" />
    </form>
  );
};

export default Form;
