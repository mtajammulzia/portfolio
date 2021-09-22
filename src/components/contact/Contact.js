import React from "react";
import "./Contact.css";
import { socialMediaLinks } from "../../data";

function Contact() {
  return (
    <>
      <section className="contact-page" id="scroll-to-contact">
        <div className="social-media-section">
          <div className="upper">
            <h2 className="social-media-section-heading">Reach me at</h2>
            <h3>mtajammulzia@gmail.com</h3>
          </div>
          <div className="lower">
            <h2 className="social-media-section-heading">Find me on</h2>
            <div className="icons">
              {socialMediaLinks.map((media) => {
                return (
                  <a
                    key={media.id}
                    href={media.url}
                    target="_blank"
                    rel="noreferrer"
                    className={media.cName}
                  >
                    {media.logo}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h1 className="contact-form-title">Contact Me</h1>
          <input
            type="text"
            name="name"
            id=""
            className="input"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            id=""
            className="input"
            placeholder="Your Email Address"
          />
          <input
            type="message"
            name="message"
            id=""
            className="input input-message"
            placeholder="Your Message"
          />
          <button className="btn">Submit</button>
        </div>
      </section>
    </>
  );
}

export default Contact;
