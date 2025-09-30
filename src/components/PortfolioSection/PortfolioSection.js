import styles from './Portfolio.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function PortfolioSection() {
    const portfolioItems = [
        {
            title: 'Responsive Restaurant Website',
            image: '/assets/homePage/www.jpg',
            description: 'Modern, fully responsive website for a restaurant featuring online ordering, menu, gallery, table reservation system, and contact form..',
            tags: ['React', 'CSS', 'Node.js'],
            category: 'Custom Website',
            liveUrl: 'https://demo1.rafalsprengel.com/',
            githubUrl: 'https://github.com/RafalSprengel/restaurant-pos-frontend',
            seeMoreLink: 'https://rafalsprengel.com/restaurant'
        },
        {
            title: 'Restaurant POS Management System',
            image: '/assets/homePage/server.jpg',
            description: 'Advanced web application for managing a restaurant: admin panel, customer accounts, orders, menu items, categories, and staff workflows..',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'Web Application',
            liveUrl: '#',
            githubUrl: 'https://github.com/RafalSprengel/restaurant-pos-backend',
            seeMoreLink: '#' // Tymczasowy link dla 'See more'
        },
        {
            title: 'Holiday Resort Booking Website',
            image: '/assets/homePage/wordpress.jpg',
            description: 'Custom WordPress site for a holiday resort with online booking, gallery, and easy content management for quick updates..',
            tags: ['WordPress', 'PHP', 'JavaScript'],
            category: 'WordPress',
            liveUrl: 'https://lesniczowkawiezyca.pl/',
            seeMoreLink: 'https://lesniczowkawiezyca.pl/' // Użycie liveUrl jako 'See more'
        }
    ];

    return (
        <section id="portfolio" className={styles.portfolio__section}>
            <div className={styles.container}>
                <h2 className={styles.portfolio__title}>Portfolio</h2>
                <p className={styles.portfolio__desc}>
                    Recent projects showcasing my expertise in web development
                </p>

                {/* Projects Grid */}
                <div className={styles.portfolio__grid}>
                    {portfolioItems.map((item, index) => (
                        <div key={index} className={styles.portfolio__item}>
                            <div className={styles.portfolio__imageWrapper}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.portfolio__image}
                                />
                                {item.seeMoreLink && (
                                    <div className={styles.portfolio__overlay}>
                                        <a href={item.seeMoreLink} className={`${styles.portfolio__action} ${styles.portfolio__actionOverlay}`}>
                                            See more
                                        </a>
                                    </div>
                                )}
                                <div className={styles.portfolio__badge}>
                                    {item.category}
                                </div>
                            </div>

                            <div className={styles.portfolio__content}>
                                <div className={styles.portfolio__header}>
                                    <h3 className={styles.portfolio__item__title}>{item.title}</h3>
                                    <p className={styles.portfolio__item__desc}>{item.description}</p>
                                </div>

                                <div className={styles.portfolio__footer}>
                                    <div className={styles.portfolio__tags}>
                                        {item.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className={styles.portfolio__tag}>{tag}</span>
                                        ))}
                                    </div>

                                    <div className={styles.portfolio__actions}>
                                        <a href={item.liveUrl} className={`${styles.portfolio__action} ${styles.portfolio__actionPrimary}`}>
                                            <FaExternalLinkAlt className={styles.actionIcon} />
                                            Live Demo
                                        </a>
                                        {item.githubUrl &&
                                            <a href={item.githubUrl} className={`${styles.portfolio__action} ${styles.portfolio__actionSecondary}`}>
                                                <FaGithub className={styles.actionIcon} />
                                                Code
                                            </a>
                                        }
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