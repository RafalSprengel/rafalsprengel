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
    return (
        <section id="skills" className={styles.skills__section}>
            <h2 className={styles.skills__title}>Skills</h2>
            <p className={styles.skills__desc}>
                I work with both <strong>frontend</strong> and <strong>backend</strong> technologies, 
                which allows me to build complete and scalable solutions — from interactive user 
                interfaces to secure server-side applications, database management, and 
                infrastructure deployment. 
            </p>
            <p className={styles.skills__desc}>
                On the <strong>frontend</strong>, I create modern, responsive interfaces using Next.js, React.js, JavaScript, CSS, 
                and Mantine UI components.  
                On the <strong>backend</strong>, I build robust APIs with Node.js, Express.js, JWT, Passport OAuth2, and integrate 
                payments with Stripe, while storing and managing data in MongoDB with Mongoose.  
                I also handle <strong>DevOps & Infrastructure</strong> by configuring and securing VPS servers, managing environments 
                with Ubuntu, NGINX, Webmin, GitHub, and NPM.  
                Additionally, I work with <strong>CMS platforms</strong> such as WordPress, creating custom builds and modifications 
                tailored to business needs.
            </p>

            <div className={styles.skills__grid}>
                <div className={styles.skills__item}><SiNextdotjs className={styles.skills__icon} /><span>Next.js</span></div>
                <div className={styles.skills__item}><FaReact className={styles.skills__icon} /><span>React.js</span></div>
                <div className={styles.skills__item}><SiJavascript className={styles.skills__icon} /><span>JavaScript (ES6+)</span></div>
                <div className={styles.skills__item}><FaCss3Alt className={styles.skills__icon} /><span>CSS</span></div>
                <div className={styles.skills__item}><SiMantine className={styles.skills__icon} /><span>Mantine (UI components)</span></div>
                <div className={styles.skills__item}><FaNodeJs className={styles.skills__icon} /><span>Node.js</span></div>
                <div className={styles.skills__item}><SiExpress className={styles.skills__icon} /><span>Express.js</span></div>
                <div className={styles.skills__item}><FaServer className={styles.skills__icon} /><span>REST API</span></div>
                <div className={styles.skills__item}><SiJsonwebtokens className={styles.skills__icon} /><span>JWT Authorization</span></div>
                <div className={styles.skills__item}><SiPassport className={styles.skills__icon} /><span>Passport OAuth2</span></div>
                <div className={styles.skills__item}><SiStripe className={styles.skills__icon} /><span>Stripe API payments</span></div>
                <div className={styles.skills__item}><SiMongodb className={styles.skills__icon} /><span>MongoDB with Mongoose</span></div>
                <div className={styles.skills__item}><FaServer className={styles.skills__icon} /><span>VPS servers (config & security)</span></div>
                <div className={styles.skills__item}><SiNginx className={styles.skills__icon} /><span>NGINX</span></div>
                <div className={styles.skills__item}><SiWebmin className={styles.skills__icon} /><span>Webmin</span></div>
                <div className={styles.skills__item}><FaUbuntu className={styles.skills__icon} /><span>Ubuntu</span></div>
                <div className={styles.skills__item}><FaGithub className={styles.skills__icon} /><span>GitHub</span></div>
                <div className={styles.skills__item}><SiNpm className={styles.skills__icon} /><span>NPM</span></div>
                <div className={styles.skills__item}><FaWordpress className={styles.skills__icon} /><span>WordPress</span></div>
            </div>
        </section>
    );
}
