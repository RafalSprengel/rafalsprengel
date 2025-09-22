import styles from './SkillsSection.module.css';
import { FaReact, FaNodeJs, FaGithub, FaCss3Alt, FaServer, FaUbuntu, FaWordpress } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiNginx, 
  SiWebmin, 
  SiStripe, 
  SiNpm, 
  SiJsonwebtokens, 
  SiPassport, 
  SiMantine 
} from "react-icons/si";

export default function SkillsSection() {
    const frontendSkills = [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <FaReact />, name: 'React.js' },
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <FaCss3Alt />, name: 'CSS' },
        { icon: <SiMantine />, name: 'Mantine' }
    ];

    const backendSkills = [
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiJsonwebtokens />, name: 'JWT' },
        { icon: <SiPassport />, name: 'Passport' },
        { icon: <SiStripe />, name: 'Stripe' }
    ];

    const devopsSkills = [
        { icon: <FaServer />, name: 'VPS' },
        { icon: <SiNginx />, name: 'NGINX' },
        { icon: <SiWebmin />, name: 'Webmin' },
        { icon: <FaUbuntu />, name: 'Ubuntu' },
        { icon: <FaGithub />, name: 'GitHub' },
        { icon: <SiNpm />, name: 'NPM' }
    ];

    return (
        <section id="skills" className={styles.skills__section}>
            <h2 className={styles.skills__title}>Skills</h2>
            <p className={styles.skills__desc}>
                I work with both <strong>frontend</strong> and <strong>backend</strong> technologies, 
                which allows me to build complete and scalable solutions — from interactive user 
                interfaces to secure server-side applications, database management, and 
                infrastructure deployment.
            </p>

            <div className={styles.skills__categories}>
                <div className={styles.skills__category}>
                    <h3 className={styles.skills__categoryTitle}>Frontend</h3>
                    <div className={styles.skills__categoryGrid}>
                        {frontendSkills.map((skill, index) => (
                            <div key={index} className={styles.skills__item}>
                                {skill.icon}
                                <span className={styles.skills__text}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skills__category}>
                    <h3 className={styles.skills__categoryTitle}>Backend</h3>
                    <div className={styles.skills__categoryGrid}>
                        {backendSkills.map((skill, index) => (
                            <div key={index} className={styles.skills__item}>
                                {skill.icon}
                                <span className={styles.skills__text}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skills__category}>
                    <h3 className={styles.skills__categoryTitle}>DevOps & Tools</h3>
                    <div className={styles.skills__categoryGrid}>
                        {devopsSkills.map((skill, index) => (
                            <div key={index} className={styles.skills__item}>
                                {skill.icon}
                                <span className={styles.skills__text}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}