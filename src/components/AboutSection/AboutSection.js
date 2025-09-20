import styles from './About.module.css';

export default function AboutSection() {
    return (
        <section id="about" className={styles.about__section}>
            <h2 className={styles.about__title}>About</h2>
            <p className={styles.about__desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com</p>
            <div className={styles.about__content}>
                <div className={styles.about__col1}>
                    <img src="/homepage/profile.jpg" alt="profile"></img>
                </div>

                <div className={styles.about__col2}>
                    <div className={styles.about__col2__title}>UI/UX Designer & Web Developer.</div>
                    <div className={styles.about__col2__desc}>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</div>
                </div>
            </div>
        </section>
    );
}
