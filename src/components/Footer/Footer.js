import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footerContent}>
                <div className={styles.footerMain}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogo}>RS</div>
                        <p className={styles.footerDesc}>
                            Full-stack web developer specializing in modern, responsive websites 
                            and web applications. From concept to deployment, I deliver complete solutions.
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerLinksTitle}>Quick Links</h4>
                        <a href="#hero" className={styles.footerLink}>Home</a>
                        <a href="#about" className={styles.footerLink}>About</a>
                        <a href="#skills" className={styles.footerLink}>Skills</a>
                        <a href="#portfolio" className={styles.footerLink}>Portfolio</a>
                        <a href="#contact" className={styles.footerLink}>Contact</a>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerLinksTitle}>Contact Info</h4>
                        <a href="mailto:sprengel.rafal@gmail.com" className={styles.footerLink}>
                            sprengel.rafal@gmail.com
                        </a>
                        <a href="tel:+447518577503" className={styles.footerLink}>
                            +44 7518 577503
                        </a>
                        <span className={styles.footerLink}>Hull, United Kingdom</span>
                    </div>
                </div>

                <div className={styles.footerSocial}>
                    <a href="https://github.com/RafalSprengel" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
                        <FaGithub />
                    </a>
                    <a href="https://uk.linkedin.com/in/rafal-sprengel" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100075524473779" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
                        <FaFacebook />
                    </a>
                    <a href="mailto:sprengel.rafal@gmail.com" className={styles.footerSocialLink}>
                        <FaEnvelope />
                    </a>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        <p>© <span>Copyright</span> <strong className={styles.sitename}>Rafał Sprengel</strong> <span>All Rights Reserved</span></p>
                    </div>
                    <div className={styles.credits}>
                        Designed by <a href="https://rafalsprengel.com/">Rafał Sprengel</a>
                    </div>
                </div>
            </div>
        </div>
    );
}