import Link from 'next/link';
import styles from './Portfolio.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function PortfolioSection() {
    const t = useTranslations('PortfolioSection');
    
    // Lista kluczy projektów, która odpowiada strukturom w plikach JSON
    const portfolioKeys = [
        'restaurantWebsite',
        'restaurantPOS',
        'resortBooking'
    ];

    return (
        <section id="portfolio" className={styles.portfolio__section}>
            <div className={styles.container}>
                <h2 className={styles.portfolio__title}>{t('main_title')}</h2>
                <p className={styles.portfolio__desc}>
                    {t('main_description')}
                </p>

                <div className={styles.portfolio__grid}>
                    {portfolioKeys.map((key) => (
                        <div key={key} className={styles.portfolio__item}>
                            <div className={styles.portfolio__imageWrapper}>
                                <img
                                    src={t(`${key}.image`)}
                                    alt={t(`${key}.title`)}
                                    className={styles.portfolio__image}
                                />
                                <div className={styles.portfolio__badge}>
                                    {t(`${key}.category`)}
                                </div>
                                <div className={styles.portfolio__overlay}>
                                    <a href={t(`${key}.seeMoreLink`)} className={`${styles.portfolio__action} ${styles.portfolio__actionOverlay}`}>
                                        {t('see_more_overlay')}
                                    </a>
                                </div>
                            </div>

                            <div className={styles.portfolio__content}>
                                <div className={styles.portfolio__header}>
                                    <h3 className={styles.portfolio__item__title}>{t(`${key}.title`)}</h3>
                                    <p className={styles.portfolio__item__desc}>{t(`${key}.description`)}</p>
                                    <Link
                                        href={t(`${key}.seeMoreLink`)}
                                        className={styles.seeMoreLink}
                                    >
                                        <span className={styles.seeMoreText}>
                                            {t('see_more_link')}
                                        </span>
                                    </Link>
                                </div>

                                <div className={styles.portfolio__spacer}></div>

                                <div className={styles.portfolio__footer}>
                                    <div className={styles.portfolio__tags}>
                                        {/* Tags są pobierane jako ciąg znaków i dzielone, ponieważ nie są tłumaczone */}
                                        {t(`${key}.tags`).split(',').map((tag, tagIndex) => (
                                            <span key={tagIndex} className={styles.portfolio__tag}>{tag.trim()}</span>
                                        ))}
                                    </div>

                                    <div className={styles.portfolio__actions}>
                                        {t(`${key}.liveUrl`) !== '#' && (
                                            <a href={t(`${key}.liveUrl`)} target="_blank" rel="noopener noreferrer" className={`${styles.portfolio__action} ${styles.portfolio__actionPrimary}`}>
                                                <FaExternalLinkAlt className={styles.actionIcon} />
                                                {t('visit_website')}
                                            </a>
                                        )}
                                        {t(`${key}.githubUrl`) !== '#' && (
                                            <a href={t(`${key}.githubUrl`)} target="_blank" rel="noopener noreferrer" className={`${styles.portfolio__action} ${styles.portfolio__actionSecondary}`}>
                                                <FaGithub className={styles.actionIcon} />
                                                {t('view_code')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}