import styles from './Portfolio.module.css';

export default function PortfolioSection() {
    return (
        <section id="portfolio" className={styles.portfolio__section}>
            <h2 className={styles.portfolio__title}>Portfolio</h2>
            <div className={styles.portfolio__tabs}>
                <div className={styles.portfolio__tab}>ALL</div>
                <div className={styles.portfolio__tab}>WEB APPLICATIONS</div>
                <div className={styles.portfolio__tab}>BESPOKE WEBSITE</div>
                <div className={styles.portfolio__tab}>WORDPRESS</div>
            </div>
            <div className={styles.portfolio__items}>
                <div className={styles.portfolio__item}>
                    <h3 className={styles.portfolio__item__title}>Web Applications </h3>
                    <img stc='#' alt='portfolio-example'></img>
                </div>
                <div className={styles.portfolio__item}>
                    <h3 className={styles.portfolio__item__title}>Beskope Websites </h3>
                    <img stc='#' alt='portfolio-example'></img>
                </div>
                <div className={styles.portfolio__item}>
                    <h3 className={styles.portfolio__item__title}>Wordpress </h3>
                    <img stc='#' alt='portfolio-example'></img>
                </div>
            </div>
        </section>
    );
}
