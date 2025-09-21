import styles from './SkillsSection.module.css';
import { FaReact, FaNodeJs, FaGithub, FaCss3Alt, FaServer, FaUbuntu, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiJavascript, SiNginx, SiWebmin, SiStripe, SiNpm, SiJsonwebtokens, SiPassport, SiMantine } from "react-icons/si";

export default function SkillsSection() {
    return (
        <section id="skills" className={styles.skills__section}>
            <h2 className={styles.skills__title}>Skills</h2>
            <p className={styles.skills__desc}>Tytaj napisać że zajmuje sie technologinami zarówno Frontendowymi jak i Backendowymi.
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className={styles.skills_desc}>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</div>

            <div className={styles.skills__grid}>

                <div className={styles.skills__grid}>
                    <div className={styles.skills__item}><SiNextdotjs className={styles.skills__icon} /><span>Next.js</span></div>
                    <div className={styles.skills__item}><FaReact className={styles.skills__icon} /><span>React.js</span></div>
                    <div className={styles.skills__item}><SiJavascript className={styles.skills__icon} /><span>JavaScript</span></div>
                    <div className={styles.skills__item}><FaCss3Alt className={styles.skills__icon} /><span>CSS</span></div>
                    <div className={styles.skills__item}><SiMantine className={styles.skills__icon} /><span>Mantine (components)</span></div>
                    <div className={styles.skills__item}><FaNodeJs className={styles.skills__icon} /><span>Node.js</span></div>
                    <div className={styles.skills__item}><SiExpress className={styles.skills__icon} /><span>Express.js</span></div>
                    <div className={styles.skills__item}><FaServer className={styles.skills__icon} /><span>REST API</span></div>
                    <div className={styles.skills__item}><SiJsonwebtokens className={styles.skills__icon} /><span>JWT Authorization</span></div>
                    <div className={styles.skills__item}><SiPassport className={styles.skills__icon} /><span>Passport OAuth2</span></div>
                    <div className={styles.skills__item}><SiStripe className={styles.skills__icon} /><span>Stripe API payments</span></div>
                    <div className={styles.skills__item}><SiMongodb className={styles.skills__icon} /><span>MongoDB</span></div>
                    <div className={styles.skills__item}><FaServer className={styles.skills__icon} /><span>VPS servers (config & security)</span></div>
                    <div className={styles.skills__item}><SiNginx className={styles.skills__icon} /><span>NGINX</span></div>
                    <div className={styles.skills__item}><SiWebmin className={styles.skills__icon} /><span>Webmin</span></div>
                    <div className={styles.skills__item}><FaUbuntu className={styles.skills__icon} /><span>Ubuntu</span></div>
                    <div className={styles.skills__item}><FaGithub className={styles.skills__icon} /><span>GitHub</span></div>
                    <div className={styles.skills__item}><SiNpm className={styles.skills__icon} /><span>NPM</span></div>
                    <div className={styles.skills__item}><FaWordpress className={styles.skills__icon} /><span>WordPress</span></div>
                </div>
            </div>
        </section>
    );
}
