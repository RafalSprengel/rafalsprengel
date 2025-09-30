import styles from './ServicesSection.module.css';
import { FaCode, FaServer, FaWordpress, FaMobile, FaShieldAlt, FaSearch } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className={styles.serviceIcon} />,
    title: 'Custom Development',
    description: 'Custom high-quality websites and web applications using modern technologies like Next.js, React.js, Node.js, and Express.js',
    features: [
      'Online payments integration (Stripe, Przelewy24)',
      'Booking & payment systems',
      'Admin panels with user management',
      'Custom authentication systems',
      'API integrations'
    ]
  },
  {
    icon: <FaServer className={styles.serviceIcon} />,
    title: 'Server & Infrastructure',
    description: 'Complete server setup and infrastructure management for optimal performance and security',
    features: [
      'Domain & hosting setup',
      'VPS server configuration (Ubuntu, NGINX)',
      'Security hardening (Firewall, Fail2ban)',
      'SSL certificates installation',
      'Database management (MongoDB)'
    ]
  },
  {
    icon: <FaWordpress className={styles.serviceIcon} />,
    title: 'WordPress Development',
    description: 'Professional WordPress websites with custom functionality and modern design',
    features: [
      'Custom theme development',
      'Plugin customization',
      'E-commerce solutions',
      'Performance optimization',
      'Security enhancements'
    ]
  },
  {
    icon: <FaMobile className={styles.serviceIcon} />,
    title: 'Responsive Design',
    description: 'Mobile-first responsive designs that work perfectly on all devices',
    features: [
      'Mobile-optimized interfaces',
      'Cross-browser compatibility',
      'Fast loading times',
      'User experience optimization',
      'Progressive Web Apps'
    ]
  },
  {
    icon: <FaShieldAlt className={styles.serviceIcon} />,
    title: 'Security & Maintenance',
    description: 'Comprehensive security solutions and ongoing maintenance services',
    features: [
      'Security audits',
      'Regular updates',
      'Backup solutions',
      'Performance monitoring',
      '24/7 support availability'
    ]
  },
  {
    icon: <FaSearch className={styles.serviceIcon} />,
    title: 'SEO Optimization',
    description: 'Search engine optimization to improve visibility and ranking',
    features: [
      'On-page SEO',
      'Technical SEO',
      'Speed optimization',
      'Content strategy',
      'Analytics integration'
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
            Comprehensive web development solutions from concept to deployment
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