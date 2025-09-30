'use client';

import styles from './SkillsSection.module.css';
import { FaCode, FaServer, FaDatabase, FaCloud, FaWordpress, FaMobile, FaShieldAlt, FaSearch } from 'react-icons/fa';

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            Comprehensive expertise across the full web development stack
          </p>
        </div>

        <div className={styles.skillsContent}>
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaCode className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Frontend Development</h3>
            </div>
            <p className={styles.categoryDescription}>
              Specializing in modern frontend technologies like <strong>Next.js</strong>, <strong>React.js</strong>,
              and <strong>JavaScript</strong> to build responsive and interactive interfaces.
              Experienced with <strong>CSS</strong> frameworks and component libraries such as <strong>Mantine UI</strong>
              <span> </span>and <strong>Material UI</strong> to deliver polished, professional, and user-friendly designs.
            </p>

          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaServer className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Backend Development</h3>
            </div>
            <p className={styles.categoryDescription}>
              Building robust backend systems with <strong>Node.js</strong> and <strong>Express.js</strong>,
              creating <strong>REST APIs</strong> with secure authentication using <strong>JWT</strong> and <strong>OAuth2</strong>.
              Focus on scalable architecture and efficient data handling for optimal performance.
            </p>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaDatabase className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Database & Payments</h3>
            </div>
            <p className={styles.categoryDescription}>
              Expertise in <strong>MongoDB</strong> for flexible database management and <strong>Stripe API</strong>
              integration for secure payment processing. Ensuring data integrity and seamless transaction flows
              in all applications.
            </p>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaCloud className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Infrastructure & Deployment</h3>
            </div>
            <p className={styles.categoryDescription}>
              Full-stack deployment expertise including <strong>VPS server</strong> configuration, <strong>NGINX</strong> setup,
              and <strong>Ubuntu</strong> server management. Focus on security hardening, performance optimization,
              and reliable infrastructure maintenance.
            </p>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaWordpress className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>WordPress & CMS</h3>
            </div>
            <p className={styles.categoryDescription}>
              Custom <strong>WordPress</strong> development with tailored themes and plugins.
              Specializing in <strong>SEO optimization</strong> and performance enhancements
              to ensure maximum visibility and user engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}