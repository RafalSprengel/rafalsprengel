import styles from './About.module.css';
import {useTranslations} from 'next-intl';

export default function AboutSection() {
    const t = useTranslations('AboutSection');
    return (
        <section id="about" className={styles.about__section}>
            <h2 className={styles.about__title}>{t('title')}</h2>
            <p className={styles.about__desc}>
                I am a full-stack web developer with a Computer Engineering degree, specializing in building modern websites and web applications. I offer affordable, professional solutions ranging from basic web applications to comprehensive systems that support businesses across different sectors.
            </p>

            <div className={styles.about__content}>
                <div className={styles.about__col1}>
                    <img src="/assets/home-page/about.webp" alt="Rafał Sprengel - Web Developer" />
                </div>

                <div className={styles.about__col2}>
                    <h3 className={styles.about__col2__title}>UI/UX Designer & Web Developer</h3>
                    <p className={styles.about__desc}>
                        I work with both frontend and backend technologies, delivering scalable applications with a focus on performance and security. My expertise covers the entire development lifecycle — from server setup and configuration, through backend and frontend development, to fully secured websites.
                    </p>

                </div>
            </div>
        </section>
    );
}