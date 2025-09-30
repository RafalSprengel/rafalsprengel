import styles from './HeroSection.module.css';
import TypedSubtitle from '../TypedSubtitle';

export default function HeroSection() {
    return (
        <section id="hero" className={styles.hero_section}>
            {/* <img src='/images/homePage/hero-bg.jpg' alt='hero'></img> */}
            <video  className={styles.videoContainer} width="640" height="360" autoPlay loop muted playsInline>
                <source src="assets/homePage/intro.mp4" type="video/mp4" />
                    Twoja przeglądarka nie wspiera wideo.
            </video>
            <div className={styles.hero__title}>Rafał Sprengel</div>
            <div className={styles.hero__subtitle}>
                I'm a <TypedSubtitle />
                <noscript>Web Developer</noscript>
            </div>
        </section>
    );
}
