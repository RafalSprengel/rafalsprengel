import React from 'react';
import styles from './page.module.css';
import ProjectHeroSection from '@/app/projects/_components/ProjectHeroSection/ProjectHeroSection';
import BottomButtonsBlock from '../_components/BottomButtonsBlock/BottomButtonsBlock';
import { projectsData } from '../data';
import { DynamicLightbox, DynamicFeaturesGallery } from '../_components/ClientComponents';

import {
  FaLightbulb,
  FaCogs,
  FaCode,
  FaUtensils,
  FaShoppingCart,
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
  FaEnvelope,
  FaCreditCard,
  FaListAlt
} from 'react-icons/fa';


export default function RestaurantProjectPage() {
  const heroData = {
    title: 'Restaurant POS & Online Ordering System',
    description: 'As a developer, I had the pleasure of working on a comprehensive Point of Sale (POS) system for a restaurant, which combines advanced online ordering features with an intuitive management panel. This project was an excellent opportunity for me to showcase my skills in building scalable, responsive, and secure web applications that genuinely address business needs.',
    pcImage: '/assets/projects/restaurant/hero/pc.webp',
    tabletImage: '/assets/projects/restaurant/hero/tablet.webp',
    phoneImage: '/assets/projects/restaurant/hero/phone.webp',
    liveUrl: 'https://restaurant.rafalsprengel.com/',
    githubUrl: 'https://github.com/RafalSprengel/restaurant-pos-backend',
    tags: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Mantine UI', 'SCSS', 'Tailwind CSS', 'JWT', 'OAuth'],
  };

  const lightboxImages = [
    { full: '/assets/projects/restaurant/gallery/Hero.webp', thumb: '/assets/projects/restaurant/gallery/Hero-thumb.webp' },
    { full: '/assets/projects/restaurant/gallery/About.webp', thumb: '/assets/projects/restaurant/gallery/About-thumb.webp' },
    { full: '/assets/projects/restaurant/gallery/Gallery.webp', thumb: '/assets/projects/restaurant/gallery/Gallery-thumb.webp' },
  ];

  const publicFeaturesData = [
    {
      image: {
        full: '/assets/projects/restaurant/features/Menu.webp',
        thumb: '/assets/projects/restaurant/features/Menu-thumb.webp',
        desc: 'Dynamic Menu'
      },
      description: 'Dynamic Menu: Customers can easily browse the menu, filter products, and add items to their cart.',
      icon: <FaUtensils />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Cart.webp',
        thumb: '/assets/projects/restaurant/features/Cart-thumb.webp',
        desc: 'Smart Cart'
      },
      description: 'Smart Cart: A clear and user-friendly cart allowing customers to review, update, or remove items before checkout.',
      icon: <FaShoppingCart />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Process.webp',
        thumb: '/assets/projects/restaurant/features/Process-thumb.webp',
        desc: 'Ordering Process'
      },
      description: 'Ordering Process: Smooth flow from product selection and customization to secure checkout.',
      icon: <FaListAlt />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Stripe.webp',
        thumb: '/assets/projects/restaurant/features/Stripe-thumb.webp',
        desc: 'Secure Payments'
      },
      description: 'Secure Payments with Stripe: Customers can safely complete transactions using credit cards or digital wallets with full encryption.',
      icon: <FaCreditCard />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/BookTable.webp',
        thumb: '/assets/projects/restaurant/features/BookTable-thumb.webp',
        desc: 'Table Reservations'
      },
      description: 'Table Reservations: Simple reservation form with real-time availability checks.',
      icon: <FaCalendarAlt />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Contact.webp',
        thumb: '/assets/projects/restaurant/features/Contact-thumb.webp',
        desc: 'Contact Form'
      },
      description: 'Contact Form: A fast way for customers to reach the restaurant with inquiries, feedback, or special requests.',
      icon: <FaEnvelope />
    }
  ];


  const panelFeaturesData = [
    {
      image: {
        full: '/assets/projects/restaurant/features/Dashboard.webp',
        thumb: '/assets/projects/restaurant/features/Dashboard-thumb.webp',
        desc: 'Dashboard Overview'
      },
      description: 'Dashboard: Provides a clear and intuitive overview of key business metrics for informed decision-making.',
      icon: <FaChartLine />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelProducts.webp',
        thumb: '/assets/projects/restaurant/features/PanelProducts-thumb.webp',
        desc: 'Product Management'
      },
      description: 'Product Management: Easily add, edit, and organize menu items to keep the restaurant offerings up to date.',
      icon: <FaBox />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelOrders.webp',
        thumb: '/assets/projects/restaurant/features/PanelOrders-thumb.webp',
        desc: 'Order Management'
      },
      description: 'Order Management: Track, monitor, and update order statuses in real-time to ensure smooth operations.',
      icon: <FaClipboardList />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelMessages.webp',
        thumb: '/assets/projects/restaurant/features/PanelMessages-thumb.webp',
        desc: 'Customer Messages'
      },
      description: 'Messages: Receive and respond to customer messages efficiently for better communication.',
      icon: <FaEnvelope />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelSystemUsers.webp',
        thumb: '/assets/projects/restaurant/features/PanelSystemUsers-thumb.webp',
        desc: 'User Roles Management'
      },
      description: 'Staff Management: Easily add, edit, and remove users while controlling their roles and access levels.',
      icon: <FaUserShield />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelTableReservations.webp',
        thumb: '/assets/projects/restaurant/features/PanelTableReservations-thumb.webp',
        desc: 'Table Reservations'
      },
      description: 'Table Reservations Management: View, manage, and update table reservations seamlessly.',
      icon: <FaCalendarAlt />
    }
  ]

  return (
    <section className={styles.projectSection}>
      <ProjectHeroSection {...heroData} />

      <div className={styles.container}>
        <div className={styles.sectionImages}>
          <DynamicLightbox images={lightboxImages} />
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaLightbulb className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>The Challenge: Digital Transformation in the Gastronomy Industry</h2>
          </div>
          <p className={styles.sectionText}>
            Modern restaurants need more than just delicious food. In the era of digitalization, efficient management of orders, reservations, and customer relationships, as well as providing a seamless online experience, is crucial. My goal was to create a solution that would automate these processes, expand the restaurant's reach, and enhance customer satisfaction, while simultaneously empowering staff with powerful management tools.
          </p>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaCogs className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>My Solution: Architecture and Implementation</h2>
          </div>
          <p className={styles.sectionText}>
            I designed and implemented the application based on a modern technology stack, prioritizing modularity, performance, and ease of maintenance.
          </p>

          <div className={styles.contentGrid}>
            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaCode className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Frontend – User Interface and Customer Experience:</h3>
            </div>
            <p className={styles.sectionText}>
              On the frontend, I opted for React.js combined with Mantine UI, which allowed me to rapidly build rich and accessible components. This provides customers with an intuitive interface for browsing the menu, customizing orders, and reserving tables. I paid particular attention to responsiveness, ensuring the website functions flawlessly on every device – from desktops to smartphones. The use of SCSS for global styles and Tailwind CSS for a utility-first approach in new components provided flexibility and visual consistency.
            </p>
            <div className={styles.featuresListWrap}>
              <DynamicFeaturesGallery data={publicFeaturesData} galleryId="frontend-gallery" />
            </div>

            <p className={styles.sectionText}>
              A management panel is a comprehensive tool that gives staff full control over the restaurant's operations. From monitoring sales on the dashboard, to managing products and categories, and handling orders, customers, and reservations. The implementation of user roles (admin, moderator, member) ensures precise access control.
            </p>
            <div className={styles.featuresListWrap}>
              <DynamicFeaturesGallery data={panelFeaturesData} galleryId="backend-gallery" />
            </div>

            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaServer className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Backend – The Heart of the System:</h3>
            </div>
            <p className={styles.sectionText}>
              The backend, built with Node.js using Express.js and a MongoDB database, forms a solid foundation for all operations. I developed a RESTful API that handles product, order, user, and reservation management. Key considerations included ensuring security (JWT for authorization, OAuth for social logins) and scalability, so the system can grow with the restaurant.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaTrophy className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Key Achievements and Skills Utilized:</h2>
          </div>
          <ul className={styles.featureList__1}>
            <li><FaCogs className={styles.featureIcon} /> Comprehensive Integration: I seamlessly connected the frontend with the backend, Stripe payment system, and authorization mechanisms (JWT, Google/Facebook OAuth), creating a cohesive and functional environment.</li>
            <li><FaMobileAlt className={styles.featureIcon} /> Responsive Design: I ensured an excellent user experience across all devices, which is crucial in today's mobile-first world.</li>
            <li><FaRocket className={styles.featureIcon} /> Performance Optimization: I utilized react-lazy-load-image-component for lazy loading images and optimized API queries to ensure fast and smooth website operation.</li>
            <li><FaDatabase className={styles.featureIcon} /> State Management: I effectively leveraged React Context API and custom hooks (useFetch, useLocalStorage) to manage complex application state.</li>
            <li><FaCode className={styles.featureIcon} /> Clean Code and Best Practices: I focused on writing clean, modular, and maintainable code, adhering to development best practices and industry standards.</li>
          </ul>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaHandshake className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Business Value:</h2>
          </div>
          <p className={styles.sectionText}>
            This project demonstrates my ability to create solutions that not only look great but, more importantly, deliver tangible business value. The restaurant benefits from:
          </p>
          <ul className={styles.featureList__2}>
            <li> <span className={styles.checkmark}>✓</span> <strong>Increased Efficiency:</strong> Automation of orders and reservations.</li>
            <li> <span className={styles.checkmark}>✓</span> <strong>Enhanced Customer Experience:</strong> Easy and enjoyable online ordering.</li>
            <li> <span className={styles.checkmark}>✓</span> <strong>Wider Reach:</strong> Online and mobile accessibility.</li>
            <li> <span className={styles.checkmark}>✓</span> <strong>Data-Driven Decisions:</strong> Statistics and reports to support management.</li>
          </ul>
          <br />
          <p className={styles.sectionText}>
            I am proud of how this project blends aesthetics with robust engineering, creating a tool that can significantly streamline the operations of any restaurant. I would be happy to discuss more technical details and the challenges I faced, as well as how my skills can contribute to the success of your project.
          </p>
        </div>
      </div>
      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <BottomButtonsBlock />
        </div>
      </div>
    </section>
  );
}