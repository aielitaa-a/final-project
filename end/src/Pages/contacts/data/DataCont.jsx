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
        setActive(null);
      })
      .catch((err) => {
        console.error(err);
        alert("Ошибка при отправке!");
      });
  };

  return (
    <div className="data-wrapper">
      <div className="data-content-row">

        <div className="fruit-image-container">
          <img className="fruit-cont-img" src={fruit} alt="Fruit" />
        </div>


        <div className="text-data-container">
          <h1 className="we-love-title">We'd love to talk...</h1>
          <p className="simply-cont-text">Simply dummy text...</p>

          <div className={`contact-info-card ${active === 'gmail' ? 'active-card' : ''}`} onClick={() => setActive("gmail")}>
            <h3 className="phone-mail-label">Gmail</h3>
            <p className="conts-data-email">aielitaalmaz@gmail.com</p>
          </div>
        </div>
      </div>


      {active && (
        <div className="form-animation-wrapper">
          <form className="form-box-styled" onSubmit={sendEmail}>
            <div className="form-header">
               <h2>{active === "gmail" ? "Write to Gmail" : "Write to Phone"}</h2>
               <button type="button" className="close-form" onClick={() => setActive(null)}>×</button>
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="account"
                value={formData.account}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button className="submit-form-btn" type="submit">Send Message</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default DataCont;