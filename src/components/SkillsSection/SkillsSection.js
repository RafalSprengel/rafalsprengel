'use client';

import styles from './SkillsSection.module.css';
import { useTranslations } from 'next-intl';
import { FaCode, FaServer, FaShieldAlt, FaCloud, FaWordpress, FaCogs } from 'react-icons/fa';

export default function SkillsSection() {
    const t = useTranslations('SkillsSection');
    
  const strongTag = (chunks) => <strong>{chunks}</strong>;

    const richTextComponents = {
        strong: strongTag
    };

    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('main_title')}</h2>
                    <p className={styles.subtitle}>
                        {t('main_subtitle')}
                    </p>
                </div>

                <div className={styles.skillsContent}>
                    <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}>
                            <FaCode className={styles.categoryIcon} />
                            <h3 className={styles.categoryTitle}>{t('frontend.title')}</h3>
                        </div>
                        <p className={styles.categoryDescription}>
                            {t.rich('frontend.description', richTextComponents)}
                        </p>
                    </div>

                    <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}>
                            <FaServer className={styles.categoryIcon} />
                            <h3 className={styles.categoryTitle}>{t('backend.title')}</h3>
                        </div>
                        <p className={styles.categoryDescription}>
                            {t.rich('backend.description', richTextComponents)}
                        </p>
                    </div>

                    <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}>
                            <FaShieldAlt className={styles.categoryIcon} />
                            <h3 className={styles.categoryTitle}>{t('security.title')}</h3>
                        </div>
                        <p className={styles.categoryDescription}>
                            {t.rich('security.description', richTextComponents)}
                        </p>
                    </div>

                    <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}>
                            <FaCloud className={styles.categoryIcon} />
                            <h3 className={styles.categoryTitle}>{t('infrastructure.title')}</h3>
                        </div>
                        <p className={styles.categoryDescription}>
                            {t.rich('infrastructure.description', richTextComponents)}
                        </p>
                    </div>

                    <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}>
                            <FaCogs className={styles.categoryIcon} />
                            <h3 className={styles.categoryTitle}>{t('uiux.title')}</h3>
                        </div>
                        <p className={styles.categoryDescription}>
                            {t('uiux.description')}
                        </p>
                    </div>

                    <div className={styles.skillCategory}>
                        <div className={styles.categoryHeader}>
                            <FaWordpress className={styles.categoryIcon} />
                            <h3 className={styles.categoryTitle}>{t('cms.title')}</h3>
                        </div>
                        <p className={styles.categoryDescription}>
                            {t.rich('cms.description', richTextComponents)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}