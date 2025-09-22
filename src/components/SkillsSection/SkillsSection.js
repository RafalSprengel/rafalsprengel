'use client';

import styles from './SkillsSection.module.css';
import { FaCode, FaServer, FaDatabase, FaCloud, FaWordpress, FaMobile, FaShieldAlt, FaSearch } from 'react-icons/fa';

export default function SkillsSection() {
  const skills = [
    { name: "Next.js", icon: <FaCode />, category: "Frontend" },
    { name: "React.js", icon: <FaCode />, category: "Frontend" },
    { name: "JavaScript", icon: <FaCode />, category: "Frontend" },
    { name: "CSS", icon: <FaCode />, category: "Frontend" },
    { name: "Mantine UI", icon: <FaCode />, category: "Frontend" },
    { name: "Node.js", icon: <FaServer />, category: "Backend" },
    { name: "Express.js", icon: <FaServer />, category: "Backend" },
    { name: "REST API", icon: <FaServer />, category: "Backend" },
    { name: "JWT Auth", icon: <FaShieldAlt />, category: "Backend" },
    { name: "OAuth2", icon: <FaShieldAlt />, category: "Backend" },
    { name: "MongoDB", icon: <FaDatabase />, category: "Database" },
    { name: "Stripe API", icon: <FaDatabase />, category: "Payments" },
    { name: "VPS Servers", icon: <FaCloud />, category: "Infrastructure" },
    { name: "NGINX", icon: <FaCloud />, category: "Infrastructure" },
    { name: "Ubuntu", icon: <FaCloud />, category: "Infrastructure" },
    { name: "WordPress", icon: <FaWordpress />, category: "CMS" },
    { name: "SEO Optimization", icon: <FaSearch />, category: "Optimization" }
  ];

  const categories = ["Frontend", "Backend", "Database", "Payments", "Infrastructure", "CMS", "Optimization"];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            Comprehensive expertise across the full web development stack
          </p>
        </div>

        <div className={styles.skillsFlow}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.skillsRow}>
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <div className={styles.skillIcon}>{skill.icon}</div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <FaMobile className={styles.featureIcon} />
            <div className={styles.featureContent}>
              <h4>Responsive Design</h4>
              <p>Mobile-first approach with cross-browser compatibility</p>
            </div>
          </div>
          <div className={styles.feature}>
            <FaShieldAlt className={styles.featureIcon} />
            <div className={styles.featureContent}>
              <h4>Security Focused</h4>
              <p>SSL certificates, firewalls, and secure authentication</p>
            </div>
          </div>
          <div className={styles.feature}>
            <FaSearch className={styles.featureIcon} />
            <div className={styles.featureContent}>
              <h4>SEO Optimized</h4>
              <p>Search engine friendly code and performance optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}