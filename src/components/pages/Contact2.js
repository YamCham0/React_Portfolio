import React, { useRef } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import "./Contact.css";



export default function ContactUs() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_6g8wfgb', 'template_ykdqh8n', e.target, 'user_cSEnOpDD0VZkfSvOLER2F')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (

        <form id="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label name="name">Name</label>
            <input type="text" className="form-control" nam/>
          </div>
          <div className="form-group">
            <label name="email">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp"/>
          </div>
          <div className="form-group">
            <label name="subject">subject</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label name="message">Message</label>
            <textarea className="form-control" rows="5"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  );
};