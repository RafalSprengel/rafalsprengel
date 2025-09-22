'use client';

import styles from './SkillsSection.module.css';
import { FaCode, FaServer, FaDatabase, FaCloud, FaWordpress, FaMobile, FaShieldAlt, FaSearch } from 'react-icons/fa';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className={styles.categoryIcon} />,
      skills: ["Next.js", "React.js", "JavaScript", "CSS", "Mantine UI"],
      color: "#3498db"
    },
    {
      title: "Backend Development",
      icon: <FaServer className={styles.categoryIcon} />,
      skills: ["Node.js", "Express.js", "REST API", "JWT Auth", "OAuth2"],
      color: "#e74c3c"
    },
    {
      title: "Database & Payments",
      icon: <FaDatabase className={styles.categoryIcon} />,
      skills: ["MongoDB", "Stripe API", "Database Management"],
      color: "#9b59b6"
    },
    {
      title: "Infrastructure",
      icon: <FaCloud className={styles.categoryIcon} />,
      skills: ["VPS Servers", "NGINX", "Ubuntu", "Security"],
      color: "#f39c12"
    },
    {
      title: "WordPress & CMS",
      icon: <FaWordpress className={styles.categoryIcon} />,
      skills: ["WordPress", "Custom Themes", "SEO Optimization"],
      color: "#27ae60"
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            Comprehensive expertise across the full web development stack
          </p>
        </div>

        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                <div 
                  className={styles.iconWrapper}
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  {category.icon}
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className={styles.skillItem}
                    style={{ borderLeftColor: category.color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <FaMobile className={styles.infoIcon} />
            <h4>Responsive Design</h4>
            <p>Mobile-first approach with cross-browser compatibility</p>
          </div>
          <div className={styles.infoCard}>
            <FaShieldAlt className={styles.infoIcon} />
            <h4>Security Focused</h4>
            <p>SSL certificates, firewalls, and secure authentication</p>
          </div>
          <div className={styles.infoCard}>
            <FaSearch className={styles.infoIcon} />
            <h4>SEO Optimized</h4>
            <p>Search engine friendly code and performance optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
}