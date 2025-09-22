import styles from './ContactSection.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from '../ContactForm';

export default function ContactSection() {
    return (
        <section id="contact" className={styles.contact__section}>
            <h2 className={styles.contact__title}>Contact</h2>
            <p className={styles.contact__desc}>
                Let's build something great together!<br/>
                Whether you need a custom web application, a modern business website, or help with server setup and security – feel free to reach out.
                I'll be happy to discuss your project and find the best solution for your needs.
            </p>

            <div className={styles.contact__container}>
                <div className={styles.contact__row}>
                    <div className={styles.contact__info}>
                        <div className={styles.contact__infoItem}>
                            <FaMapMarkerAlt className={styles.contact__icon} />
                            <div className={styles.contact__infoContent}>
                                <h3>Address</h3>
                                <p>Hull, United Kingdom</p>
                            </div>
                        </div>

                        <div className={styles.contact__infoItem}>
                            <FaPhone className={styles.contact__icon} />
                            <div className={styles.contact__infoContent}>
                                <h3>Call Me</h3>
                                <p>+44 7518 577503</p>
                            </div>
                        </div>

                        <div className={styles.contact__infoItem}>
                            <FaEnvelope className={styles.contact__icon} />
                            <div className={styles.contact__infoContent}>
                                <h3>Email Me</h3>
                                <p>sprengel.rafal@gmail.com</p>
                            </div>
                        </div>

                        <iframe
                            className={styles.contact__map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.636939437179!2d-0.2899856366136919!3d53.760347572297285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878bdc22f1ad895%3A0x8f30f105485b0745!2sFitling%20Grove%2C%20Hull%20HU9%203DJ!5e0!3m2!1spl!2suk!4v1757894610318!5m2!1spl!2suk"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
}