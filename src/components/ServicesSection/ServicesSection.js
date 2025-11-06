import styles from './ServicesSection.module.css';
import { FaCode, FaServer, FaWordpress, FaShieldAlt, FaSearch } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className={styles.serviceIcon} />,
    title: 'Websites & Applications',
    description: 'High-quality, fully customized websites and web applications.',
    features: [
      'Fully personalized visual design',
      'Full responsive web design',
      'Single Page Applications (SPA)',
      'Multilingual websites',
      'GA, GTM, Pixel analytics',
      'GDPR / Consent Mode'
    ]
  },
  {
    icon: <FaShieldAlt className={styles.serviceIcon} />,
    title: 'Custom Web Applications',
    description: 'Tailored web applications and backend solutions.',
    features: [
      'Microservices',
      'Online payments integration (Stripe, Przelewy24)',
      'Booking & payment systems',
      'Dedicated CMS (Content Management System)',
      'Client & Admin panels with user management',
      'Custom authentication systems',
      'Integration with other systems',
      'API integrations'
    ]
  },
  {
    icon: <FaServer className={styles.serviceIcon} />,
    title: 'Servers & Hosting',
    description: 'Support in server setup and hosting for optimal performance and reliability.',
    features: [
      'Domain & hosting setup',
      'Troubleshooting and problem-solving',
      'VPS server configuration (Ubuntu, NGINX)',
      'Security hardening (Firewall, Fail2ban)',
      'Database management'
    ]
  },
  {
    icon: <FaSearch className={styles.serviceIcon} />,
    title: 'SEO & Analytics',
    description: 'Improve website visibility, performance, and real-time monitoring.',
    features: [
      'Google Analytics (GA)',
      'Speed optimization',
      'Google Search optimization',
      'Real-Time Traffic Monitoring'
    ]
  },
  {
    icon: <FaWordpress className={styles.serviceIcon} />,
    title: 'WordPress & CMS',
    description: 'Professional WordPress websites with modern design and custom functionality.',
    features: [
      'Installation and configuration',
      'Build from scratch',
      'Plugin customization',
      'Performance optimization',
      'Security enhancements',
      'SSL certificates installation'
    ]
  },
  {
    icon: <FaShieldAlt className={styles.serviceIcon} />,
    title: 'Payments',
    description: 'Integration with popular payment methods and systems.',
    features: [
      'Apple & Google Pay, Visa, Mastercard, BLIK, etc.',
      'Payment carts',
      'Payment confirmations'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>
            Comprehensive web development solutions from concept to deployment.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <ul className={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
