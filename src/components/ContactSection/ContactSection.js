import styles from './ContactSection.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from '../ContactForm';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
    const t = useTranslations('ContactSection');

    return (
        <section id="contact" className={styles.contact__section}>
            <div className={styles.container}>
                <h2 className={styles.contact__title}>{t('main_title')}</h2>
                <p className={styles.contact__desc}>
                    {t('main_description')}
                </p>

                <div className={styles.contact__content}>
                    <div className={styles.contact__info}>
                        
                        <div className={styles.contact__infoItem}>
                            <div className={styles.contact__iconWrapper}>
                                <FaPhone className={styles.contact__icon} />
                            </div>
                            <div className={styles.contact__infoContent}>
                                <h3>{t('phone.title')}</h3>
                                <p>{t('phone.value')}</p>
                            </div>
                        </div>

                        <div className={styles.contact__infoItem}>
                            <div className={styles.contact__iconWrapper}>
                                <FaEnvelope className={styles.contact__icon} />
                            </div>
                            <div className={styles.contact__infoContent}>
                                <h3>{t('email.title')}</h3>
                                <p>{t('email.value')}</p>
                            </div>
                        </div>

                        <div className={styles.contact__infoItem}>
                            <div className={styles.contact__iconWrapper}>
                                <FaMapMarkerAlt className={styles.contact__icon} />
                            </div>
                            <div className={styles.contact__infoContent}>
                                <h3>{t('address.title')}</h3>
                                <p>{t('address.value')}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contact__formContent}>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}