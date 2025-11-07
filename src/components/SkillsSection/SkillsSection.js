'use client';

import styles from './SkillsSection.module.css';
import { FaCode, FaServer, FaShieldAlt, FaCloud, FaWordpress, FaCogs } from 'react-icons/fa';

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            Comprehensive expertise across the full web development stack.
          </p>
        </div>

        <div className={styles.skillsContent}>
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaCode className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Frontend Development</h3>
            </div>
            <p className={styles.categoryDescription}>
  Build responsive and interactive interfaces using <strong>Next.js</strong> and <strong>React.js</strong>. Work with <strong>CSS</strong> frameworks and component libraries like <strong>Mantine UI</strong> and <strong>Material UI</strong>.
</p>

          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaServer className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Backend Development</h3>
            </div>
            <p className={styles.categoryDescription}>
              Build Node.js + Express.js backends and REST APIs with secure authentication using <strong>JWT</strong> and <strong>OAuth2</strong>.
              Utilize modern NoSQL databases like <strong>MongoDB</strong>.
            </p>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaShieldAlt className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Security & Payment</h3>
            </div>
            <p className={styles.categoryDescription}>
              Implement security and authentication systems following <strong>JWT</strong> and <strong>OAuth</strong> standards.
              Manage roles and permissions in admin and client panels.
              Integrate applications with payment systems such as <strong>Stripe</strong> and <strong>Przelewy24</strong>, including secure payment confirmations via webhooks.
            </p>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaCloud className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>Infrastructure & Deployment</h3>
            </div>
            <p className={styles.categoryDescription}>
              Deploy full-stack applications on <strong>VPS</strong> with <strong>NGINX</strong> setup, configure domains, and install <strong>SSL certificates</strong>. Apply CI/CD with <strong>GitHub</strong> for automated deployments.
            </p>

          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaCogs className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>UI/UX, Performance & SEO</h3>
            </div>
            <p className={styles.categoryDescription}>
              Design responsive and accessible interfaces with attention to user experience.
              Optimize performance using lazy loading, caching, and image optimization.
              Implement SEO strategies and analytics integration for better visibility and engagement.
            </p>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <FaWordpress className={styles.categoryIcon} />
              <h3 className={styles.categoryTitle}>CMS & WordPress</h3>
            </div>
            <p className={styles.categoryDescription}>
              Integrate CMS platforms including <strong>WordPress</strong>.
              Customize themes and plugins, optimize SEO, enhance performance, and set up SSL for secure access.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
