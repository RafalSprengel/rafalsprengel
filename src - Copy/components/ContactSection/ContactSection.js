import styles from './ContactSection.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from '../ContactForm';

export default function ContactSection() {
    return (
        <section id="contact" className={styles.contact__section}>
            <h2 className={styles.contact__title}>Contact</h2>
            <p className={styles.contact__desc}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

            <div className={styles.contact__container}>
                <div className={styles.contact__row}>
                    <div className={styles.contact__col1}>
                        <div className={styles.contact__info}>
                            <div className={styles.contact__infoItem}>
                                <FaMapMarkerAlt className={styles.contact__icon} />
                                <div>
                                    <h3>Address</h3>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>

                            <div className={styles.contact__infoItem}>
                                <FaPhone className={styles.contact__icon} />
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div>

                            <div className={styles.contact__infoItem}>
                                <FaEnvelope className={styles.contact__icon} />
                                <div>
                                    <h3>Email Us</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.636939437179!2d-0.2899856366136919!3d53.760347572297285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878bdc22f1ad895%3A0x8f30f105485b0745!2sFitling%20Grove%2C%20Hull%20HU9%203DJ!5e0!3m2!1spl!2suk!4v1757894610318!5m2!1spl!2suk"
                                width="400"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    <div className={styles.contact__col2}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
