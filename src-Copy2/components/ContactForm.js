'use client'

import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';


const ContactSection = () => {
  const [state, handleSubmit] = useForm("mvgwgrvo");

  const hasError = (field) => state.errors?.fieldErrors?.has(field);


  if (state.succeeded) {
    return <p className={styles.sentMessage} >Thank you for contacting us! We’ll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.col2Input}>
          <label htmlFor="name" className={styles.label}>Your Name</label>
          <input type="text" name="name" id="name" className={styles.input} />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className={hasError("name") ? styles.errorMessage : ""}
          />

        </div>
        <div className={styles.col2Input}>
          <label htmlFor="email" className={styles.label}>Your Email</label>
          <input type="email" name="email" id="email" className={styles.input} />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className={hasError("email") ? styles.errorMessage : ""}
          />
        </div>
      </div>

      <div className={styles.col2Input}>
        <label htmlFor="subject" className={styles.label}>Subject</label>
        <input type="text" name="subject" id="subject" className={styles.input} />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className={hasError("subject") ? styles.errorMessage : ""}
        />
      </div>

      <div className={styles.col2Input}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea name="message" rows="10" id="message" className={styles.textarea} ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className={hasError("message") ? styles.errorMessage : ""}
        />
      </div>

      <div className={styles.col2Actions}>
        <button type="submit" className={styles.button} disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}</button>
      </div>
    </form>
  );
};

export default ContactSection;


