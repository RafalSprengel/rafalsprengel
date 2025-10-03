import styles from './ContactSection.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from '../ContactForm';

export default function ContactSection() {
    return (
        <section id="contact" className={styles.contact__section}>
            <div className={styles.container}>
                <h2 className={styles.contact__title}>Contact</h2>
                <p className={styles.contact__desc}>
                    Let's build something great together!<br />
                    Whether you need a custom web application, a modern business website, or help with server setup and security – feel free to reach out.
                    I'll be happy to discuss your project and find the best solution for your needs.
                </p>

                <div className={styles.contact__content}>
                    <div className={styles.contact__info}>
                      

                        <div className={styles.contact__infoItem}>
                            <div className={styles.contact__iconWrapper}>
                                <FaPhone className={styles.contact__icon} />
                            </div>
                            <div className={styles.contact__infoContent}>
                                <h3>Call Me</h3>
                                <p>+44 7518 577503</p>
                            </div>
                        </div>

                        <div className={styles.contact__infoItem}>
                            <div className={styles.contact__iconWrapper}>
                                <FaEnvelope className={styles.contact__icon} />
                            </div>
                            <div className={styles.contact__infoContent}>
                                <h3>Email Me</h3>
                                <p>sprengel.rafal@gmail.com</p>
                            </div>
                        </div>

                          <div className={styles.contact__infoItem}>
                            <div className={styles.contact__iconWrapper}>
                                <FaMapMarkerAlt className={styles.contact__icon} />
                            </div>
                            <div className={styles.contact__infoContent}>
                                <h3>Address</h3>
                                <p>Hull, United Kingdom</p>
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