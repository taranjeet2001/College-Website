import React from 'react'
import "./Contact.css"
import message_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "99b5c0b3-202a-42c0-909e-cf50ab62711f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" srcset="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below.</p>
        <ul>
            <li> <img src={mail_icon} alt="" />taran@gmail.com</li>
            <li> <img src={phone_icon} alt="" />+91 9999-284429</li>
            <li> <img src={location_icon} alt="" />Kalkaji</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label> Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter You Mobile Number' required />
            <label> Write Your Message Here </label>
            <textarea name="message" row="6" placeholder='Enter Your Message' required></textarea>
            <button className='btn dark-btn' type='Submit'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
