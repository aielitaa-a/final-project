import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./dataCont.css";
import fruit from "../../../assets/contim.png";

function DataCont() {
  const [active, setActive] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    account: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6qj3e2v",     
        "template_knp2bfs",   
        {
          name: formData.name,
          email: formData.account,
          message: formData.message,
        },
        "B4SKKEWnt29Bjz5c0"  
      )
      .then(() => {
        alert("Сообщение успешно отправлено!");
        setFormData({ name: "", account: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Ошибка при отправке!");
      });
  };

  return (
    <div className="data-container">
      <div className="all-data">
        <div className="cont-fruit">
          <img className="fruit-cont" src={fruit} alt="" />
        </div>

        <div className="text-data">
          <h1 className="we-love">We'd love to talk...</h1>
          <p className="simply-cont">Simply dummy text...</p>

          <div className="contact-block" onClick={() => setActive("gmail")}>
            <h3 className="phone-mail">Gmail</h3>
            <p className="conts-data">aielitaalmaz@gmail.com</p>
          </div>

          <div className="contact-block" onClick={() => setActive("phone")}>
            <h3 className="phone-mail">Phone</h3>
            <p className="conts-data">+996 0702 60 4660</p>
          </div>
        </div>
      </div>

      {active && (
        <form className="form-box" onSubmit={sendEmail}>
          <h2>{active === "gmail" ? "Write to Gmail" : "Write to Phone"}</h2>

          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Your Email"
            name="account"
            value={formData.account}
            onChange={handleChange}
            required
          />

          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export default DataCont;
