'use client';

import React from 'react';
import styles from './page.module.css';
import ProjectHeroSection from '@/app/projects/_components/ProjectHeroSection/ProjectHeroSection';
import dynamic from 'next/dynamic';

const MyLightbox = dynamic(
  () => import('@/components/MyLightbox/MyLightbox'),
  { ssr: false }
);

const FeaturesGallery = dynamic(
  () => import('@/app/projects/_components/featuresGallery/FeaturesGallery.js'),
  { ssr: false }
)

import {
  FaLightbulb,
  FaCogs,
  FaCode,
  FaUserPlus,
  FaSignInAlt,
  FaClipboardList,
  FaUserEdit,
  FaKey,
  FaTrashAlt,
  FaChartLine,
  FaBox,
  FaEnvelope,
  FaUserShield,
  FaCalendarAlt,
  FaTags,
  FaUsers,
  FaChartBar,
  FaCog,
  FaCreditCard,
  FaMobileAlt,
  FaRocket,
  FaUser,
  FaHandshake,
  FaDatabase,
  FaShieldAlt,
  FaServer
} from 'react-icons/fa';


export default function WebappProjectPage() {
  const heroData = {
    title: 'Restaurant POS & Management System',
    description: 'A comprehensive Point of Sale (POS) and management system for restaurants, featuring an intuitive customer interface and a robust administrative panel for full control over operations. Built with React.js, Node.js, Express.js, and MongoDB.',
    pcImage: '/assets/projects/webapp/hero/pc.webp',
    tabletImage: '/assets/projects/webapp/hero/tablet.webp',
    phoneImage: '/assets/projects/webapp/hero/phone.webp',
    liveUrl: 'https://demo1.rafalsprengel.com/',
    githubUrl: 'https://github.com/RafalSprengel/restaurant-pos-backend',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OAuth', 'Admin Panel', 'POS System', 'User Management', 'Stripe'],
  };

  const lightboxImages = [
    { full: '/assets/projects/webapp/gallery/office.webp', thumb: '/assets/projects/webapp/gallery/office-thumb.webp', description: 'Admin Dashboard' },
    { full: '/assets/projects/webapp/gallery/kitchen.webp', thumb: '/assets/projects/webapp/gallery/kitchen-thumb.webp', description: 'Product Management' },
    { full: '/assets/projects/webapp/gallery/mobile.webp', thumb: '/assets/projects/webapp/gallery/mobile-thumb.webp', description: 'Order Management' },
  ];

  const customerPanelFeaturesData = [
    {
      image: { full: '/assets/projects/webapp/features/customer-login.webp', thumb: '/assets/projects/webapp/features/customer-login-thumb.webp', desc: 'Customer Dashboard' },
      description: 'Registration and Login: Ability to register and log in using email/password, Google, or Facebook.',
      icon: <FaUserPlus />
    },
    {
      image: { full: '/assets/projects/webapp/features/customer-recent-orders.webp', thumb: '/assets/projects/webapp/features/customer-recent-orders-thumb.webp', desc: 'Recent Orders' },
      description: 'Recent Orders: List of all placed orders with the option to "delete" them (mark as not visible to the customer).',
      icon: <FaClipboardList />
    },
    {
      image: { full: '/assets/projects/webapp/features/customer-personal-details.webp', thumb: '/assets/projects/webapp/features/customer-personal-details-thumb.webp', desc: 'Personal Details' },
      description: 'Personal Details: View and edit personal information (first name, surname, email, phone, address).',
      icon: <FaUserEdit />
    },
    {
      image: { full: '/assets/projects/webapp/features/customer-password-change.webp', thumb: '/assets/projects/webapp/features/customer-password-change-thumb.webp', desc: 'Password Change' },
      description: 'Password Change: Secure password update functionality.',
      icon: <FaKey />
    },
    {
      image: { full: '/assets/projects/webapp/features/customer-deleting-account.webp', thumb: '/assets/projects/webapp/features/customer-deleting-account-thumb.webp', desc: 'Account Deletion' },
      description: 'Option to permanently delete the user account.',
      icon: <FaTrashAlt />
    },
  ];

  const adminPanelFeaturesData = [
    {
      image: { full: '/assets/projects/webapp/features/admin-dashboard.webp', thumb: '/assets/projects/webapp/features/admin-dashboard-thumb.webp', desc: 'Dashboard Overview' },
      description: 'Dashboard: Provides a clear and intuitive overview of key business metrics for informed decision-making.',
      icon: <FaChartLine />
    },
    {
      image: { full: '/assets/projects/webapp/features/admin-products.webp', thumb: '/assets/projects/webapp/features/admin-products-thumb.webp', desc: 'Product Management' },
      description: 'Product Management: Easily add, edit, and organize menu items to keep the restaurant offerings up to date.',
      icon: <FaBox />
    },
    {
      image: { full: '/assets/projects/webapp/features/admin-update-products.webp', thumb: '/assets/projects/webapp/features/admin-update-products-thumb.webp', desc: 'Product Management' },
      description: 'Product Management: Update products.',
      icon: <FaBox />
    },
    {
      image: { full: '/assets/projects/webapp/features/admin-categories.webp', thumb: '/assets/projects/webapp/features/admin-categories-thumb.webp', desc: 'Category Management' },
      description: 'Category Management: Full create, read, update, and delete operations for product categories.',
      icon: <FaTags />
    },
    {
      image: { full: '/assets/projects/webapp/features/admin-customers.webp', thumb: '/assets/projects/webapp/features/admin-customers-thumb.webp', desc: 'Customers Management' },
      description: 'Customers Management: Easily add, amend, and delete customer accounts while managing their details and access preferences.',
      icon: <FaUserShield />
    },
    {
      image: { full: '/assets/projects/webapp/features/admin-orders.webp', thumb: '/assets/projects/webapp/features/admin-orders-thumb.webp', desc: 'Order Management' },
      description: 'Order Management: Track, monitor, and update order statuses in real-time to ensure smooth operations.',
      icon: <FaClipboardList />
    },
    {
      image: { full: '/assets/projects/webapp/features/admin-messages.webp', thumb: '/assets/projects/webapp/features/admin-messages-thumb.webp', desc: 'Customer Messages' },
      description: 'Messages: Receive and respond to customer messages efficiently for better communication.',
      icon: <FaEnvelope />
    },


    {
      image: { full: '/assets/projects/webapp/features/admin-tables-reservations.webp', thumb: '/assets/projects/webapp/features/admin-tables-reservations-thumb.webp', desc: 'Table Reservations Management' },
      description: 'Table Reservations Management: View, manage, and update table reservations seamlessly.',
      icon: <FaCalendarAlt />
    },
    {
      image: { full: '/assets/projects/webapp/features/admin-users.webp', thumb: '/assets/projects/webapp/features/admin-users-thumb.webp', desc: 'Staff Management' },
      description: 'Staff Management: Full create, read, update, and delete operations for staff accounts with role assignment.',
      icon: <FaUsers />
    },
    {
      image: { full: '/assets/projects/webapp/features/admin-settings.webp', thumb: '/assets/projects/webapp/features/admin-settings-thumb.webp', desc: 'Application Settings' },
      description: 'Application Settings: Manage global reservation settings, SMTP configuration, and other app-wide parameters.',
      icon: <FaCog />
    },
  ];


  return (
    <section className={styles.projectSection}>
      <ProjectHeroSection {...heroData} />

      <div className={styles.container}>
        <div className={styles.sectionImages}>
          <MyLightbox images={lightboxImages} />
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaLightbulb className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>The Challenge: Comprehensive Restaurant Operations Management</h2>
          </div>
          <p className={styles.sectionText}>
            Managing a modern restaurant involves a multitude of complex tasks, from handling customer orders and reservations to managing inventory, staff, and finances. The challenge was to create a unified, robust, and intuitive system that streamlines these operations, enhances efficiency, and provides powerful tools for both customers and administrators.
          </p>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaCogs className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>My Solution: Full-Stack Application Architecture</h2>
          </div>
          <p className={styles.sectionText}>
            I designed and implemented a comprehensive full-stack application, focusing on modularity, security, and scalability. The solution provides distinct interfaces for customers and a powerful administrative panel for staff.
          </p>

          <div className={styles.contentGrid}>
            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaUser className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Customer Panel: Empowering Users</h3>
            </div>
            <p className={styles.sectionText}>
              The customer panel is designed to give users full control over their interactions with the restaurant, from managing their profile to tracking past orders and making reservations.
            </p>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={customerPanelFeaturesData} galleryId="customer-panel-gallery" />
            </div>

            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaServer className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Admin Panel: Centralized Control & Management</h3>
            </div>
            <p className={styles.sectionText}>
              The administrative panel is the backbone of the system, providing staff with a centralized hub to manage every aspect of the restaurant's operations, ensuring smooth workflows and data-driven decision-making.
            </p>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={adminPanelFeaturesData} galleryId="admin-panel-gallery" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaRocket className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Key Achievements and Technologies Utilized:</h2>
          </div>
          <ul className={styles.featureList}>
            <li><FaShieldAlt className={styles.featureIcon} /> Robust Authentication & Authorization: Implemented JWT tokens, OAuth2 (Google/Facebook), and role-based access control for secure user and staff management.</li>
            <li><FaDatabase className={styles.featureIcon} /> Efficient Data Management: Utilized MongoDB with Mongoose for flexible and scalable database interactions, supporting complex data structures for products, orders, and users.</li>
            <li><FaCogs className={styles.featureIcon} /> Comprehensive API Development: Built a RESTful API with Node.js/Express.js, covering CRUD operations for all core entities (products, orders, users, reservations, messages, staff, categories).</li>
            <li><FaCreditCard className={styles.featureIcon} /> Secure Payment Integration: Seamlessly integrated Stripe for secure online payments, including webhook handling for automatic order status updates.</li>
            <li><FaChartLine className={styles.featureIcon} /> Real-time Statistics & Reporting: Developed endpoints for sales statistics, visitor tracking, and dashboard overviews to support informed business decisions.</li>
            <li><FaMobileAlt className={styles.featureIcon} /> Responsive & Intuitive UI: Designed with React.js and Mantine UI, ensuring a consistent and user-friendly experience across all devices.</li>
            <li><FaCode className={styles.featureIcon} /> Clean Code & Best Practices: Adhered to industry standards for clean, modular, and maintainable code, including global error handling and structured logging.</li>
          </ul>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaHandshake className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Business Value & Impact:</h2>
          </div>
          <p className={styles.sectionText}>
            This project showcases my ability to develop complex, full-stack applications that deliver significant business value by:
          </p>
          <ul className={styles.featureList}>
            <li> <span className={styles.checkmark}>✓</span><strong>Streamlining Operations:</strong> Automating order, reservation, and inventory management, reducing manual workload.</li>
            <li> <span className={styles.checkmark}>✓</span><strong>Enhancing Customer Engagement:</strong> Providing a seamless online experience for ordering, reservations, and account management.</li>
            <li> <span className={styles.checkmark}>✓</span><strong>Improving Decision-Making:</strong> Offering real-time data and statistics through the admin dashboard.</li>
            <li> <span className={styles.checkmark}>✓</span><strong>Ensuring Security:</strong> Implementing robust authentication, authorization, and payment processing mechanisms.</li>
            <li> <span className={styles.checkmark}>✓</span><strong>Scalability:</strong> Building a system capable of growing with the restaurant's needs.</li>
          </ul>
          <p className={styles.sectionText}>
            This application is a testament to my expertise in building robust, user-centric web solutions that drive efficiency and growth for businesses.
          </p>
        </div>
      </div>
    </section>
  );
}