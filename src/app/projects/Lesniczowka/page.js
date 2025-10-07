'use client';

import React from 'react';
import styles from '../restaurant/page.module.css'; // Reusing styles from the restaurant project
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
  FaEnvelope,
  FaImages, // Added FaImages for content showcase
  FaSearch, // Added FaSearch for availability
} from 'react-icons/fa';


export default function LesniczowkaProjectPage() {
  const heroData = {
    title: 'Leśniczówka Wieżyca: The Digital Gateway to a Kaszubian Forest Retreat',
    description: 'This website serves as the official online platform for Leśniczówka Wieżyca, a tranquil resort destination located in the picturesque Kaszuby region of Poland. The site\'s primary function is to beautifully showcase the resort\'s facilities—including cozy rooms, seasonal Dutch houses, and SPA amenities like a Jacuzzi and Sauna—while offering a seamless, end-to-end digital booking experience. The core challenge addressed by the platform is transforming user interest into confirmed stays through an efficient, self-service online system.',
    pcImage: '/assets/projects/restaurant/pc.webp', // Placeholder
    tabletImage: '/assets/projects/restaurant/tablet.webp', // Placeholder
    phoneImage: '/assets/projects/restaurant/phone.webp', // Placeholder
    liveUrl: 'https://lesniczowkawiezyca.pl/',
    githubUrl: null, // WordPress site, no public GitHub
    tags: ['WordPress', 'PHP', 'JavaScript', 'Booking System', 'Payment Integration'],
  };

  const lightboxImages = [
    { full: '/assets/projects/restaurant/gallery/Hero.webp', thumb: '/assets/projects/restaurant/gallery/Hero-thumb.webp' }, // Placeholder
    { full: '/assets/projects/restaurant/gallery/About.webp', thumb: '/assets/projects/restaurant/gallery/About-thumb.webp' }, // Placeholder
    { full: '/assets/projects/restaurant/gallery/Gallery.webp', thumb: '/assets/projects/restaurant/gallery/Gallery-thumb.webp' }, // Placeholder
  ];

  const keyFunctionalAreasData = [
    {
      image: {
        full: '/assets/projects/restaurant/features/Process.webp', // Placeholder
        thumb: '/assets/projects/restaurant/features/Process-thumb.webp', // Placeholder
        desc: 'Real-Time Availability & Search'
      },
      description: 'Real-Time Availability & Search: Guests can immediately search for available accommodations by specifying dates and number of people, ensuring instant results.',
      icon: <FaSearch />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/BookTable.webp', // Placeholder
        thumb: '/assets/projects/restaurant/features/BookTable-thumb.webp', // Placeholder
        desc: 'Secure Online Reservation'
      },
      description: 'Secure Online Reservation: Guides users through a smooth, intuitive booking process for individual, group, or package deals.',
      icon: <FaClipboardList />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Stripe.webp', // Placeholder
        thumb: '/assets/projects/restaurant/features/Stripe-thumb.webp', // Placeholder
        desc: 'Integrated Payment Processing'
      },
      description: 'Integrated Payment Processing: Guests can securely complete financial transactions directly on the platform, confirming bookings instantly.',
      icon: <FaCreditCard />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Menu.webp', // Placeholder
        thumb: '/assets/projects/restaurant/features/Menu-thumb.webp', // Placeholder
        desc: 'Content & Services Showcase'
      },
      description: 'Content & Services Showcase: Extensive information on resort offerings, accommodation types, event hosting, and local attractions.',
      icon: <FaImages />
    }
  ];

  const businessValueData = [
    {
      image: {
        full: '/assets/projects/restaurant/features/Dashboard.webp', // Placeholder
        thumb: '/assets/projects/restaurant/features/Dashboard-thumb.webp', // Placeholder
        desc: 'Automation'
      },
      description: 'Automation: Automating the entire reservation and payment cycle, significantly reducing staff workload.',
      icon: <FaCogs />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelProducts.webp', // Placeholder
        thumb: '/assets/projects/restaurant/features/PanelProducts-thumb.webp', // Placeholder
        desc: 'Direct Sales'
      },
      description: 'Direct Sales: Maximizing direct bookings and minimizing reliance on third-party channels for increased revenue.',
      icon: <FaChartLine />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Contact.webp', // Placeholder
        thumb: '/assets/projects/restaurant/features/Contact-thumb.webp', // Placeholder
        desc: 'Enhanced Customer Experience'
      },
      description: 'Enhanced Customer Experience: Offering guests a convenient, 24/7 tool to plan, book, and pay for their retreat.',
      icon: <FaHandshake />
    }
  ];

  return (
    <section className={styles.projectSection}>
      <ProjectHeroSection {...heroData} />

      <div className={styles.container}>
        <div className={styles.sectionImages}>
          <MyLightbox images={lightboxImages} />
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaLightbulb className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>The Challenge: Digital Transformation in the Gastronomy Industry</h2>
          </div>
          <p className={styles.sectionText}>
            The core challenge addressed by the platform is transforming user interest into confirmed stays through an efficient, self-service online system.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaCogs className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>The Solution: Integrated Booking and Payment System</h2>
          </div>
          <p className={styles.sectionText}>
            The website features a comprehensive reservation module that puts guests in control of planning their stay, eliminating the need for manual communication for availability checks and initial payments.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.sectionBlock}>
            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaCode className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Key Functional Areas:</h3>
            </div>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={keyFunctionalAreasData} galleryId="functional-areas-gallery" />
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaHandshake className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Business Value:</h3>
            </div>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={businessValueData} galleryId="business-value-gallery" />
            </div>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaTrophy className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Key Achievements and Skills Utilized:</h2>
          </div>
          <ul className={styles.featureList}>
            <li><FaCogs className={styles.featureIcon} /> Comprehensive Integration: Seamlessly connected the frontend with the booking and payment systems, creating a cohesive and functional environment.</li>
            <li><FaMobileAlt className={styles.featureIcon} /> Responsive Design: Ensured an excellent user experience across all devices, crucial for guests planning their retreat on the go.</li>
            <li><FaRocket className={styles.featureIcon} /> Performance Optimization: Optimized the website for fast loading times and smooth navigation, enhancing user satisfaction.</li>
            <li><FaDatabase className={styles.featureIcon} /> Content Management: Leveraged WordPress for easy content updates and management of accommodations and services.</li>
            <li><FaCode className={styles.featureIcon} /> Clean Code and Best Practices: Focused on writing clean, modular, and maintainable code, adhering to development best practices and industry standards.</li>
          </ul>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaHandshake className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Business Value:</h2>
          </div>
          <p className={styles.sectionText}>
            This digital solution significantly contributes to the resort's operational efficiency and revenue by:
          </p>
          <ul className={styles.featureList}>
            <li>Increased Efficiency: Automating the entire reservation and payment cycle, reducing staff workload.</li>
            <li>Direct Sales: Maximizing direct bookings and minimizing reliance on third-party channels.</li>
            <li>Enhanced Customer Experience: Offering guests a convenient, 24/7 tool to plan, book, and pay for their retreat in the forest.</li>
          </ul>
          <p className={styles.sectionText}>
            I am proud of how this project blends aesthetics with robust functionality, creating a tool that can significantly streamline the operations of any resort. I would be happy to discuss more technical details and the challenges I faced, as well as how my skills can contribute to the success of your project.
          </p>
        </div>
      </div>
    </section>
  );
}