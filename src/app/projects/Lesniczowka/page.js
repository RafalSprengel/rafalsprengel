'use client';

import React from 'react';
import styles from '../lesniczowka/page.module.css';
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
  FaCreditCard,
  FaDatabase,
  FaChartLine,
  FaClipboardList,
  FaTrophy,
  FaMobileAlt,
  FaRocket,
  FaHandshake,
  FaEnvelope,
  FaImages,
  FaSearch,
  FaConciergeBell,
  FaCalendarAlt
} from 'react-icons/fa';



export default function LesniczowkaProjectPage() {
  const heroData = {
    title: 'Leśniczówka Wieżyca: The Digital Gateway to a Kashubian Forest Retreat',
    description: 'This website serves as the official online platform for Leśniczówka Wieżyca, a tranquil resort destination located in the picturesque Kashuby region of Poland. The site\'s primary function is to beautifully showcase the resort\'s facilities - including cozy rooms, seasonal Dutch houses, and SPA amenities like a Jacuzzi and Sauna - while offering a seamless, end-to-end digital booking experience. The core challenge addressed by the platform is transforming user interest into confirmed stays through an efficient, self-service online system.',
    pcImage: '/assets/projects/lesniczowka/hero/pc.webp',
    tabletImage: '/assets/projects/lesniczowka/hero/tablet.webp',
    phoneImage: '/assets/projects/lesniczowka/hero/phone.webp',
    liveUrl: 'https://lesniczowkawiezyca.pl/',
    githubUrl: null,
    tags: ['WordPress', 'PHP', 'JavaScript', 'Booking System', 'Payment Integration'],
  };

  const lightboxImages = [
    { full: '/assets/projects/lesniczowka/gallery/Billboard.webp', thumb: '/assets/projects/lesniczowka/gallery/Billboard-thumb.webp' },
    { full: '/assets/projects/lesniczowka/gallery/Package.webp', thumb: '/assets/projects/lesniczowka/gallery/Package-thumb.webp' },
    { full: '/assets/projects/lesniczowka/gallery/Workshop.webp', thumb: '/assets/projects/lesniczowka/gallery/Workshop-thumb.webp' },
  ];


  const keyFunctionalAreasData = [
    {
      image: { full: '/assets/projects/lesniczowka/features/search-1.webp', thumb: '/assets/projects/lesniczowka/features/search-1-thumb.webp', desc: 'Real-Time Availability & Search' },
      description: 'Real-Time Availability & Search: Guests can immediately search for available accommodations by specifying dates and number of people, ensuring instant results.',
      icon: <FaSearch />
    },
    {
      image: { full: '/assets/projects/lesniczowka/features/search-2.webp', thumb: '/assets/projects/lesniczowka/features/search-2-thumb.webp', desc: 'Secure Online Reservation' },
      description: 'Secure Online Reservation: Guides users through a smooth, intuitive booking process for individual, group, or package deals.',
      icon: <FaClipboardList />
    },
    {
      image: { full: '/assets/projects/lesniczowka/features/process.webp', thumb: '/assets/projects/lesniczowka/features/process-thumb.webp', desc: 'Integrated Payment Processing' },
      description: 'Integrated Payment Processing: Guests can securely complete financial transactions directly on the platform, confirming bookings instantly.',
      icon: <FaCreditCard />
    },
    {
      image: { full: '/assets/projects/lesniczowka/features/services.webp', thumb: '/assets/projects/lesniczowka/features/services-thumb.webp', desc: 'Content & Services Showcase' },
      description: 'Content & Services Showcase: Extensive information on resort offerings, accommodation types, event hosting, and local attractions.',
      icon: <FaConciergeBell />
    },
    {
      image: { full: '/assets/projects/lesniczowka/features/gallery.webp', thumb: '/assets/projects/lesniczowka/features/gallery-thumb.webp', desc: 'Gallery' },
      description: 'Gallery: A visually rich collection of images showcasing the resort, accommodations, facilities, and events to help guests get a clear sense of the experience.',
      icon: <FaImages />
    },
    {
      image: { full: '/assets/projects/lesniczowka/features/contact.webp', thumb: '/assets/projects/lesniczowka/features/Contact-thumb.webp', desc: 'Contact Form' },
      description: 'Contact Form: Easy-to-use form allowing guests to make inquiries, request information, or get in touch with the resort for personalized assistance.',
      icon: <FaEnvelope />
    },
    {
      image: { full: '/assets/projects/lesniczowka/features/mobile.webp', thumb: '/assets/projects/lesniczowka/features/mobile-thumb.webp', desc: 'Mobile View' },
      description: 'Responsive design: Optimized for all devices, ensuring seamless user experience on mobile and tablet.',
      icon: <FaMobileAlt />
    },
    {
      image: { full: '/assets/projects/lesniczowka/features/reservations.webp', thumb: '/assets/projects/lesniczowka/features/reservations-thumb.webp', desc: 'Admin Panel - Reservations List' },
      description: 'Admin Panel: Full overview of all bookings with status management and quick modifications.',
      icon: <FaDatabase />
    },
    {
      image: { full: '/assets/projects/lesniczowka/features/calendar.webp', thumb: '/assets/projects/lesniczowka/features/calendar-thumb.webp', desc: 'Admin Panel - Calendar View' },
      description: 'Admin Calendar: Visual calendar to track reservations and manage availability efficiently.',
      icon: <FaCalendarAlt />
    }
  ];

  // const businessValueData = [
  //   {
  //     image: {
  //       full: '/assets/projects/lesniczowka/features/Dashboard.webp',
  //       thumb: '/assets/projects/lesniczowka/features/Dashboard-thumb.webp',
  //       desc: 'Automation'
  //     },
  //     description: 'Automation: Automating the entire reservation and payment cycle, significantly reducing staff workload.',
  //     icon: <FaCogs />
  //   },
  //   {
  //     image: {
  //       full: '/assets/projects/lesniczowka/features/PanelProducts.webp',
  //       thumb: '/assets/projects/lesniczowka/features/PanelProducts-thumb.webp',
  //       desc: 'Direct Sales'
  //     },
  //     description: 'Direct Sales: Maximizing direct bookings and minimizing reliance on third-party channels for increased revenue.',
  //     icon: <FaChartLine />
  //   },
  //   {
  //     image: {
  //       full: '/assets/projects/lesniczowka/features/Contact1.webp',
  //       thumb: '/assets/projects/lesniczowka/features/Contact1-thumb.webp',
  //       desc: 'Enhanced Customer Experience'
  //     },
  //     description: 'Enhanced Customer Experience: Offering guests a convenient, 24/7 tool to plan, book, and pay for their retreat.',
  //     icon: <FaHandshake />
  //   }
  // ];

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
            <h2 className={styles.sectionTitle}>The Challenge: Digital Transformation in the Accommodation Sector</h2>
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

          <div className={styles.contentGrid}>
            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaCode className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Key Functional Areas:</h3>
            </div>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={keyFunctionalAreasData} galleryId="functional-areas-gallery" />
            </div>

            {/* <div className={styles.sectionBlock}>
            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaHandshake className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>Business Value:</h3>
            </div>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={businessValueData} galleryId="business-value-gallery" />
            </div>
          </div> */}
          </div>

        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaTrophy className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Key Achievements and Skills Utilized:</h2>
          </div>
          <ul className={styles.featureList}>
            <li><FaCogs className={styles.featureIcon} /> Integration with Eagle Booking: Configured the plugin for managing reservations, room availability, and online payments.</li>
            <li><FaClipboardList className={styles.featureIcon} /> Reservation Process Optimization: Customized booking forms and payment workflow for smooth guest experience.</li>
            <li><FaCode className={styles.featureIcon} /> WordPress Theme Customization: Adapted the WordPress theme to match the visual identity of Leśniczówka Wieżyca.</li>
            <li><FaChartLine className={styles.featureIcon} /> Content Management & SEO: Used WordPress tools to manage content and optimize the site for search engines.</li>
            <li><FaHandshake className={styles.featureIcon} /> Staff Training: Guided the resort staff in using the WordPress admin panel and managing reservations.</li>
          </ul>
        </div>

        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <FaHandshake className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Business Value:</h2>
          </div>
          <p className={styles.sectionText}>
            This project demonstrates how a traditional hospitality business can transition into the digital era through smart technology integration, improving both operational efficiency and customer satisfaction.
          </p>

          <ul className={styles.featureList}>
            <li>
              <FaCogs className={styles.featureIcon} />
              <strong>Automation of Operations:</strong> The digital booking and payment system replaced manual phone or email reservations, drastically reducing administrative workload and minimizing human error.
            </li>
            <li>
              <FaChartLine className={styles.featureIcon} />
              <strong>Increased Direct Sales:</strong> The platform enables guests to book directly through the website, reducing dependency on external portals and lowering commission costs.
            </li>
            <li>
              <FaCreditCard className={styles.featureIcon} />
              <strong>Improved Cash Flow:</strong> Integrated payment processing ensures instant confirmation of bookings and immediate transfer of funds to the resort, eliminating delays and uncertainty.
            </li>
            <li>
              <FaHandshake className={styles.featureIcon} />
              <strong>Enhanced Guest Experience:</strong> The intuitive interface, real-time availability, and responsive design create a smooth and reliable journey from discovery to reservation.
            </li>
          </ul>

          <p className={styles.sectionText}>
            Beyond its technical execution, this project stands as a proof of concept for how design and technology can elevate a regional hospitality brand — delivering convenience for guests and strategic independence for the business.
          </p>

        </div>


      </div>
    </section>
  );
};