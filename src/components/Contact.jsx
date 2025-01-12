import React, { useRef } from "react";
import "./css/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ran2i64", "template_wg9npts", form.current, {
        publicKey: "BRxRy38TrzkilDwm1",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="border-black border-2" type="submit" value="Send" />
      </form>
      <h1>hehe</h1>
    </>
  );
};

export default Contact;
