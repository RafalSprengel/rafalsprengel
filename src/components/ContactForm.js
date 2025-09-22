import React from "react";
import styles from './ContactForm.module.css';

const ContactSection = () => {
  return (
    <form action="forms/contact.php" method="post" className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.col2Input}>
          <label htmlFor="name-field" className={styles.label}>Your Name</label>
          <input type="text" name="name" id="name-field" className={styles.input} required />
        </div>
        <div className={styles.col2Input}>
          <label htmlFor="email-field" className={styles.label}>Your Email</label>
          <input type="email" name="email" id="email-field" className={styles.input} required />
        </div>
      </div>

      <div className={styles.col2Input}>
        <label htmlFor="subject-field" className={styles.label}>Subject</label>
        <input type="text" name="subject" id="subject-field" className={styles.input} required />
      </div>

      <div className={styles.col2Input}>
        <label htmlFor="message-field" className={styles.label}>Message</label>
        <textarea name="message" rows="10" id="message-field" className={styles.textarea} required></textarea>
      </div>

      <div className={styles.col2Actions}>
        <div className={styles.loading}>Loading</div>
        <div className={styles.errorMessage}></div>
        <div className={styles.sentMessage}>Your message has been sent. Thank you!</div>
        <button type="submit" className={styles.button}>Send Message</button>
      </div>
    </form>
  );
};

export default ContactSection;
