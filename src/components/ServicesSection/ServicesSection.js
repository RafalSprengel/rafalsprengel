import styles from './ServicesSection.module.css';
import { FaCode, FaServer, FaWordpress, FaShieldAlt, FaSearch } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
    const t = useTranslations('ServicesSection');

    const serviceKeys = [
        { key: 'websites', icon: <FaCode className={styles.serviceIcon} /> },
        { key: 'applications', icon: <FaShieldAlt className={styles.serviceIcon} /> },
        { key: 'servers', icon: <FaServer className={styles.serviceIcon} /> },
        { key: 'seo', icon: <FaSearch className={styles.serviceIcon} /> },
        { key: 'wordpress', icon: <FaWordpress className={styles.serviceIcon} /> },
        { key: 'payments', icon: <FaShieldAlt className={styles.serviceIcon} /> },
    ];

    return (
        <section id="services" className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('main_title')}</h2>
                    <p className={styles.subtitle}>
                        {t('main_subtitle')}
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {serviceKeys.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceHeader}>
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{t(`${service.key}.title`)}</h3>
                            </div>

                            <p className={styles.serviceDescription}>{t(`${service.key}.description`)}</p>

                            <ul className={styles.featuresList}>
                                {
                                    Object.keys(t.raw(`${service.key}.features`)).map((featureKey, featureIndex) => (
                                        <li key={featureIndex} className={styles.featureItem}>
                                            <span className={styles.checkmark}>✓</span>
                                            {t(`${service.key}.features.${featureKey}`)}
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}