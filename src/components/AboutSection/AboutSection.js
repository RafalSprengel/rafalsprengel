import styles from './About.module.css';

export default function AboutSection() {
    return (
        <section id="about" className={styles.about__section}>
            <h2 className={styles.about__title}>About</h2>
            <p className={styles.about__desc}>
                I am a full stack web developer specializing in building modern websites and web applications. 
                My portfolio is aimed at both potential employers and clients looking for affordable, professional solutions — 
                from simple business websites, to booking and payment systems, to VPS server configuration and security.
            </p>
            
            <div className={styles.about__content}>
                <div className={styles.about__col1}>
                    <img src="/images/homepage/profile.jpg" alt="Rafał Sprengel - Web Developer" />
                </div>

                <div className={styles.about__col2}>
                    <h3 className={styles.about__col2__title}>UI/UX Designer & Web Developer</h3>
                    <p className={styles.about__col2__desc}>
                        I work with both frontend and backend technologies, delivering scalable applications deployed on VPS servers 
                        with a focus on performance and security. My expertise covers the entire development lifecycle — from server 
                        installation and configuration, through backend and frontend development, to fully secured websites with SSL certificates.
                    </p>
                </div>
            </div>
        </section>
    );
}