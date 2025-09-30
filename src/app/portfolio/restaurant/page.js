'use client';

import React from 'react';
import styles from './page.module.css';
import ProjectHeroSection from '@/components/ProjectHeroSection/ProjectHeroSection';
import {
  FaLightbulb,
  FaCogs,
  FaCode,
  FaUtensils,
  FaShoppingCart,
  FaCreditCard,
  FaCalendarAlt,
  FaServer,
  FaDatabase,
  FaUserShield,
  FaChartLine,
  FaBox,
  FaClipboardList,
  FaTrophy,
  FaMobileAlt,
  FaRocket,
  FaHandshake,
} from 'react-icons/fa';

export default function RestaurantProjectPage() {
  const projectData = {
    title: 'Restaurant POS & Online Ordering System',
    description: 'As a developer, I had the pleasure of working on a comprehensive Point of Sale (POS) system for a restaurant, which combines advanced online ordering features with an intuitive management panel. This project was an excellent opportunity for me to showcase my skills in building scalable, responsive, and secure web applications that genuinely address business needs.',
    mainImage: '/assets/homepage/restaurant-pos-main.jpg', // Placeholder for a specific project image
    liveUrl: '#', // This project might not have a live demo, so keeping '#' or a relevant link
    githubUrl: 'https://github.com/RafalSprengel/restaurant-pos-backend',
    tags: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Mantine UI', 'SCSS', 'Tailwind CSS', 'JWT', 'OAuth'],
  };

  return (
    <section className={styles.projectSection}>
      <ProjectHeroSection {...projectData} />

      <div className={styles.container}>
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaLightbulb className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>The Challenge: Digital Transformation in the Gastronomy Industry</h2>
          </div>
          <p className={styles.sectionText}>
            Modern restaurants need more than just delicious food. In the era of digitalization, efficient management of orders, reservations, and customer relationships, as well as providing a seamless online experience, is crucial. My goal was to create a solution that would automate these processes, expand the restaurant's reach, and enhance customer satisfaction, while simultaneously empowering staff with powerful management tools.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaCogs className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>My Solution: Architecture and Implementation</h2>
          </div>
          <p className={styles.sectionText}>
            I designed and implemented the application based on a modern technology stack, prioritizing modularity, performance, and ease of maintenance.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <FaCode className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Frontend – User Interface and Customer Experience:</h3>
            </div>
            <p className={styles.sectionText}>
              On the frontend, I opted for React.js combined with Mantine UI, which allowed me to rapidly build rich and accessible components. This provides customers with an intuitive interface for browsing the menu, customizing orders, and reserving tables. I paid particular attention to responsiveness, ensuring the website functions flawlessly on every device – from desktops to smartphones. The use of SCSS for global styles and Tailwind CSS for a utility-first approach in new components provided flexibility and visual consistency.
            </p>
            <ul className={styles.featureList}>
              <li><FaUtensils className={styles.featureIcon} /> Dynamic Menu: Customers can easily browse the menu, filter products, and add them to their cart.</li>
            </ul>
            <div className={styles.imagePlaceholder}>
              <span>[SCREENSHOT: Homepage with menu]</span>
            </div>
            <ul className={styles.featureList}>
              <li><FaShoppingCart className={styles.featureIcon} /> Smooth Ordering Process: From product selection and customization to secure Stripe payment.</li>
            </ul>
            <div className={styles.imagePlaceholder}>
              <span>[SCREENSHOT: Shopping cart]</span>
            </div>
            <div className={styles.imagePlaceholder}>
              <span>[SCREENSHOT: Checkout page]</span>
            </div>
            <ul className={styles.featureList}>
              <li><FaCalendarAlt className={styles.featureIcon} /> Table Reservations: A simple reservation form with real-time availability validation.</li>
            </ul>
            <div className={styles.imagePlaceholder}>
              <span>[SCREENSHOT: Table reservation form]</span>
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <FaServer className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Backend – The Heart of the System:</h3>
            </div>
            <p className={styles.sectionText}>
              The backend, built with Node.js using Express.js and a MongoDB database, forms a solid foundation for all operations. I developed a RESTful API that handles product, order, user, and reservation management. Key considerations included ensuring security (JWT for authorization, OAuth for social logins) and scalability, so the system can grow with the restaurant.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <FaUserShield className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Admin Panel – Control in the Hands of the Staff:</h3>
            </div>
            <p className={styles.sectionText}>
              The management panel is a comprehensive tool that gives staff full control over the restaurant's operations. From monitoring sales on the dashboard, to managing products and categories, and handling orders, customers, and reservations. The implementation of user roles (admin, moderator, member) ensures precise access control.
            </p>
            <ul className={styles.featureList}>
              <li><FaChartLine className={styles.featureIcon} /> Intuitive Dashboard: A quick overview of key business statistics.</li>
            </ul>
            <div className={styles.imagePlaceholder}>
              <span>[SCREENSHOT: Admin panel dashboard]</span>
            </div>
            <ul className={styles.featureList}>
              <li><FaBox className={styles.featureIcon} /> Product Management: Easy addition and editing of menu items.</li>
            </ul>
            <div className={styles.imagePlaceholder}>
              <span>[SCREENSHOT: Product list in admin panel]</span>
            </div>
            <ul className={styles.featureList}>
              <li><FaClipboardList className={styles.featureIcon} /> Order Management: Real-time monitoring and updating of order statuses.</li>
            </ul>
            <div className={styles.imagePlaceholder}>
              <span>[SCREENSHOT: Order details in admin panel]</span>
            </div>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaTrophy className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Key Achievements and Skills Utilized:</h2>
          </div>
          <ul className={styles.featureList}>
            <li><FaCogs className={styles.featureIcon} /> Comprehensive Integration: I seamlessly connected the frontend with the backend, Stripe payment system, and authorization mechanisms (JWT, Google/Facebook OAuth), creating a cohesive and functional environment.</li>
            <li><FaMobileAlt className={styles.featureIcon} /> Responsive Design: I ensured an excellent user experience across all devices, which is crucial in today's mobile-first world.</li>
            <li><FaRocket className={styles.featureIcon} /> Performance Optimization: I utilized react-lazy-load-image-component for lazy loading images and optimized API queries to ensure fast and smooth website operation.</li>
            <li><FaDatabase className={styles.featureIcon} /> State Management: I effectively leveraged React Context API and custom hooks (useFetch, useLocalStorage) to manage complex application state.</li>
            <li><FaCode className={styles.featureIcon} /> Clean Code and Best Practices: I focused on writing clean, modular, and maintainable code, adhering to development best practices and industry standards.</li>
          </ul>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaHandshake className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Business Value:</h2>
          </div>
          <p className={styles.sectionText}>
            This project demonstrates my ability to create solutions that not only look great but, more importantly, deliver tangible business value. The restaurant benefits from:
          </p>
          <ul className={styles.featureList}>
            <li>Increased Efficiency: Automation of orders and reservations.</li>
            <li>Enhanced Customer Experience: Easy and enjoyable online ordering.</li>
            <li>Wider Reach: Online and mobile accessibility.</li>
            <li>Data-Driven Decisions: Statistics and reports to support management.</li>
          </ul>
          <p className={styles.sectionText}>
            I am proud of how this project blends aesthetics with robust engineering, creating a tool that can significantly streamline the operations of any restaurant. I would be happy to discuss more technical details and the challenges I faced, as well as how my skills can contribute to the success of your project.
          </p>
        </div>
      </div>
    </section>
  );
}