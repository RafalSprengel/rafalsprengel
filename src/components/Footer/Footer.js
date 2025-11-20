import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const tContact = useTranslations('ContactSection'); // Użycie kluczy z ContactSection

    // Tablica linków do łatwej iteracji
    const quickLinks = ['home', 'about', 'skills', 'portfolio', 'services', 'contact'];

    // Statyczne dane kontaktowe z ContactSection
    const email = tContact('email.value');
    const phone = tContact('phone.value');
    const address = tContact('address.value');

    return (
        <div className={styles.container}>
            <div className={styles.footerContent}>
                <div className={styles.footerMain}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogoWrapper}>
                            <div className={styles.footerLogo}>RS</div>
                        </div>

                        <p className={styles.footerDesc}>
                            {t('description')}
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerLinksTitle}>{t('quick_links.title')}</h4>
                        {quickLinks.map(link => (
                            <a key={link} href={`#${link}`} className={styles.footerLink}>
                                {t(`quick_links.${link}`)}
                            </a>
                        ))}
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 className={styles.footerLinksTitle}>{t('contact_info.title')}</h4>
                        <a href={`mailto:${email}`} className={styles.footerLink}>
                            {email}
                        </a>
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.footerLink}>
                            {phone}
                        </a>
                        <span className={styles.footerLink}>{address}</span>
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
                    <a href={`mailto:${email}`} className={styles.footerSocialLink}>
                        <FaEnvelope />
                    </a>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        {/* Wstawienie zmiennej roku za pomocą next-intl */}
                        <p>{t.rich('copyright', { year: new Date().getFullYear(), sitename: (chunks) => <strong className={styles.sitename}>{chunks}</strong> })}</p>
                    </div>
                    <div className={styles.credits}>
                        {t.rich('credits', { link: (chunks) => <a href="https://rafalsprengel.com/">{chunks}</a> })}
                    </div>
                </div>
            </div>
        </div>
    );
}