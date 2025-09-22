import styles from './About.module.css';

export default function AboutSection() {
    return (
        <section id="about" className={styles.about__section}>
            <h2 className={styles.about__title}>About</h2>
            <p className={styles.about__desc}>
                I am a full stack web developer specializing in building modern websites and web applications. My portfolio is aimed at both potential employers and clients looking for affordable, professional solutions — from simple business websites, to booking and payment systems, to VPS server configuration and security.
                My expertise covers frontend, backend, server setup, online payment integration, and WordPress development. In short, I can deliver a complete solution — starting from server installation and configuration, through backend and frontend development, to a fully secured website with SSL certificates.
            </p>
            <div className={styles.about__content}>
                <div className={styles.about__col1}>
                    <img src="/images/homepage/profile.jpg" alt="profile"></img>
                </div>

                <div className={styles.about__col2}>
                    <div className={styles.about__col2__title}>UI/UX Designer & Web Developer.</div>
                    <div className={styles.about__col2__desc}>I work with both frontend and backend technologies, delivering scalable applications deployed on VPS servers with a focus on performance and security.</div>
                </div>
            </div>
        </section>
    );
}
