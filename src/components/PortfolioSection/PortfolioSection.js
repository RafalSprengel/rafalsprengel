import styles from './Portfolio.module.css';

export default function PortfolioSection() {
    const portfolioItems = [
        {
            title: 'E-commerce Platform',
            image: '/images/homePage/www.jpg',
            description: 'Full-stack e-commerce solution with payment integration and admin panel',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'web-applications'
        },
        {
            title: 'Business Website',
            image: '/images/homePage/server.jpg',
            description: 'Responsive business website with custom CMS and contact forms',
            tags: ['React', 'CSS', 'Node.js'],
            category: 'bespoke-website'
        },
        {
            title: 'WordPress Blog',
            image: '/images/homePage/wordpress.jpg',
            description: 'Custom WordPress theme with SEO optimization and performance enhancements',
            tags: ['WordPress', 'PHP', 'JavaScript'],
            category: 'wordpress'
        }
    ];

    return (
        <section id="portfolio" className={styles.portfolio__section}>
            <h2 className={styles.portfolio__title}>Portfolio</h2>
            
            <div className={styles.portfolio__tabs}>
                <div className={`${styles.portfolio__tab} ${styles.active}`}>ALL</div>
                <div className={styles.portfolio__tab}>WEB APPLICATIONS</div>
                <div className={styles.portfolio__tab}>BESPOKE WEBSITE</div>
                <div className={styles.portfolio__tab}>WORDPRESS</div>
            </div>

            <div className={styles.portfolio__grid}>
                {portfolioItems.map((item, index) => (
                    <div key={index} className={styles.portfolio__item}>
                        <img 
                            src={item.image} 
                            alt={item.title}
                            className={styles.portfolio__image}
                        />
                        <div className={styles.portfolio__content}>
                            <h3 className={styles.portfolio__item__title}>{item.title}</h3>
                            <p className={styles.portfolio__item__desc}>{item.description}</p>
                            
                            <div className={styles.portfolio__tags}>
                                {item.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className={styles.portfolio__tag}>{tag}</span>
                                ))}
                            </div>
                            
                            <div className={styles.portfolio__actions}>
                                <button className={`${styles.portfolio__action} ${styles['portfolio__action--primary']}`}>
                                    View Project
                                </button>
                                <button className={`${styles.portfolio__action} ${styles['portfolio__action--secondary']}`}>
                                    Source Code
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}