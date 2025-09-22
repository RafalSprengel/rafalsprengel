import styles from './Portfolio.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function PortfolioSection() {
    const portfolioItems = [
        {
            title: 'E-commerce Platform',
            image: '/images/homePage/www.jpg',
            description: 'Full-stack e-commerce solution with payment integration and admin panel',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'Web Application',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Business Website',
            image: '/images/homePage/server.jpg',
            description: 'Responsive business website with custom CMS and contact forms',
            tags: ['React', 'CSS', 'Node.js'],
            category: 'Bespoke Website',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'WordPress Blog',
            image: '/images/homePage/wordpress.jpg',
            description: 'Custom WordPress theme with SEO optimization and performance enhancements',
            tags: ['WordPress', 'PHP', 'JavaScript'],
            category: 'WordPress',
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Booking System',
            image: '/images/homePage/www.jpg',
            description: 'Complete booking and reservation system with real-time availability',
            tags: ['Next.js', 'MongoDB', 'Stripe', 'JWT'],
            category: 'Web Application',
            liveUrl: '#',
            githubUrl: '#'
        }
    ];

    const categories = ["ALL", "WEB APPLICATIONS", "BESPOKE WEBSITE", "WORDPRESS"];

    return (
        <section id="portfolio" className={styles.portfolio__section}>
            <div className={styles.container}>
                <h2 className={styles.portfolio__title}>Portfolio</h2>
                <p className={styles.portfolio__desc}>
                    Recent projects showcasing my expertise in web development
                </p>

                {/* Category Filter */}
                <div className={styles.portfolio__tabs}>
                    {categories.map((category) => (
                        <div key={category} className={`${styles.portfolio__tab} ${category === "ALL" ? styles.active : ''}`}>
                            {category}
                        </div>
                    ))}
                </div>

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
                                <div className={styles.portfolio__badge}>
                                    {item.category}
                                </div>
                            </div>
                            
                            <div className={styles.portfolio__content}>
                                <h3 className={styles.portfolio__item__title}>{item.title}</h3>
                                <p className={styles.portfolio__item__desc}>{item.description}</p>
                                
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
                                    <a href={item.githubUrl} className={`${styles.portfolio__action} ${styles.portfolio__actionSecondary}`}>
                                        <FaGithub className={styles.actionIcon} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}