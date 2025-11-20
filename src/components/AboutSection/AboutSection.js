import styles from './About.module.css';
import {useTranslations} from 'next-intl';

export default function AboutSection() {
    const t = useTranslations('AboutSection');
    return (
        <section id="about" className={styles.about__section}>
            <h2 className={styles.about__title}>{t('title')}</h2>
            <p className={styles.about__desc}>
                {t('main_description_p1')}
            </p>

            <div className={styles.about__content}>
                <div className={styles.about__col1}>
                    <img src="/assets/home-page/about.webp" alt="Rafał Sprengel - Web Developer" />
                </div>

                <div className={styles.about__col2}>
                    <h3 className={styles.about__col2__title}>{t('col2_title')}</h3>
                    <p className={styles.about__desc}>
                        {t('col2_description_p2')}
                    </p>

                </div>
            </div>
        </section>
    );
}