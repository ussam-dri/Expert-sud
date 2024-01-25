import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormOne = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mxdohie",
        "template_z5cioqm",
        form.current,
        "jpLEXw_LKyA6GgI_U"
      )
      .then(
        (result) => {
          console.log(result);

          setShowAlert(true);
          setIsMessageSent(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);

          setIsMessageSent(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <Input name="name" label="Name" isClear={isMessageSent} />
      <Input name="email" label="Email" type="email" isClear={isMessageSent} />
      <Input name="phone" label="phone" isClear={isMessageSent} />
      <Input name="message" label="Your message" type="textarea" isClear={isMessageSent}/> */}
      <div className="mb-3">
        <label for="name" className="form-label">Name</label>
        <input name="name" label="Name" isClear={isMessageSent} className="form-control-lg" placeholder="name" style={{ border: "solid 1px grey" }} />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">email</label>
        <input name="email" label="Email" isClear={isMessageSent} className="form-control-lg" placeholder="email" style={{ border: "solid 1px  grey" }} />
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label">phone</label>
        <input name="phone" label="phone" isClear={isMessageSent} className="form-control-lg" placeholder="phone" style={{ border: "solid 1px grey" }} />
      </div>
      <div className="mb-3">
        <label for="message" className="form-label">message</label>
        <textarea className="form-control" rows={3} name="message" placeholder="Your message" isClear={isMessageSent} style={{ border: "solid 1px grey" }} />
      </div>
      <div className="form-group">
        <button className="axil-button btn-large btn-transparent w-100">
          <span className="button-text">Get Pricing Now</span>
          {/* <span className="button-icon" /> */}
        </button>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Your message was sent successfully"
              : "Something went wrong"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormOne;
