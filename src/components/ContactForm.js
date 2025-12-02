'use client'

import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';
import { useTranslations } from 'next-intl';

const ContactSection = () => {
  const t = useTranslations('ContactSection');
  const [state, handleSubmit] = useForm("mvgwgrvo");

  const hasError = (field) => state.errors?.fieldErrors?.has(field);

  if (state.succeeded) {
    return (
      <p className={styles.sentMessage}>
        {t('form.success')}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.col2Input}>
          <label htmlFor="name" className={styles.label}>{t('form.name')}</label>
          <input type="text" name="name" id="name" className={styles.input} />
          <ValidationError
            prefix={t('form.name')}
            field="name"
            errors={state.errors}
            className={hasError("name") ? styles.errorMessage : ""}
          />
        </div>

        <div className={styles.col2Input}>
          <label htmlFor="email" className={styles.label}>{t('form.email')}</label>
          <input type="email" name="email" id="email" className={styles.input} />
          <ValidationError
            prefix={t('form.email')}
            field="email"
            errors={state.errors}
            className={hasError("email") ? styles.errorMessage : ""}
          />
        </div>
      </div>

      <div className={styles.col2Input}>
        <label htmlFor="subject" className={styles.label}>{t('form.subject')}</label>
        <input type="text" name="subject" id="subject" className={styles.input} />
        <ValidationError
          prefix={t('form.subject')}
          field="subject"
          errors={state.errors}
          className={hasError("subject") ? styles.errorMessage : ""}
        />
      </div>

      <div className={styles.col2Input}>
        <label htmlFor="message" className={styles.label}>{t('form.message')}</label>
        <textarea name="message" rows="10" id="message" className={styles.textarea}></textarea>
        <ValidationError
          prefix={t('form.message')}
          field="message"
          errors={state.errors}
          className={hasError("message") ? styles.errorMessage : ""}
        />
      </div>

      <div className={styles.col2Actions}>
        <button type="submit" className={styles.button} disabled={state.submitting}>
          {state.submitting ? t('form.sending') : t('form.send')}
        </button>
      </div>
    </form>
  );
};

export default ContactSection;
