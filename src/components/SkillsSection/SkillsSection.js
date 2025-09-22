import styles from './SkillsSection.module.css';
import { FaCode, FaServer, FaDatabase, FaCloud, FaWordpress } from 'react-icons/fa';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["Next.js", "React.js", "JavaScript (ES6+)", "CSS", "Mantine UI"],
      icon: <FaCode className={styles.icon} />,
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST API", "JWT Authorization", "Passport OAuth2"],
      icon: <FaServer className={styles.icon} />,
    },
    {
      title: "Database & Payments",
      skills: ["MongoDB with Mongoose", "Stripe API payments", "Database Management"],
      icon: <FaDatabase className={styles.icon} />,
    },
    {
      title: "DevOps & Infrastructure",
      skills: ["VPS servers", "NGINX", "Ubuntu", "Webmin", "GitHub", "NPM"],
      icon: <FaCloud className={styles.icon} />,
    },
    {
      title: "CMS & Other",
      skills: ["WordPress", "Custom builds", "SEO optimization", "SSL certificates"],
      icon: <FaWordpress className={styles.icon} />,
    },
  ];

  return (
    <section id="skills" className={styles.skills__section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            I work with both frontend and backend technologies, delivering complete and scalable solutions
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                {category.icon}
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillBadge}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}