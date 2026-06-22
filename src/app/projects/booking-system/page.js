'use client';
import React from 'react';
import styles from './page.module.css';
import ProjectHeroSection from '@/app/projects/_components/ProjectHeroSection/ProjectHeroSection';
import dynamic from 'next/dynamic';
import BottomButtonsBlock from '../_components/BottomButtonsBlock/BottomButtonsBlock';
import { useTranslations } from 'next-intl';
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
  FaDatabase,
  FaSearch,
  FaCalendarAlt,
  FaCreditCard,
  FaUserShield,
  FaChartLine,
  FaEnvelope,
  FaMobileAlt,
  FaRocket,
  FaHandshake,
  FaShieldAlt,
  FaCog,
  FaBed,
  FaTags,
  FaLock,
  FaUsers,
  FaMoneyBillWave,
} from 'react-icons/fa';

export default function BookingSystemProjectPage() {
  const t = useTranslations('BookingSystemProject');

  const heroData = {
    title: t('hero.title'),
    description: t('hero.description'),
    pcImage: '/assets/projects/booking-system/hero/pc.webp',
    tabletImage: '/assets/projects/booking-system/hero/tablet.webp',
    phoneImage: '/assets/projects/booking-system/hero/phone.webp',
    liveUrl: 'http://accommodation.rafalsprengel.com/',
    githubUrl: "https://github.com/RafalSprengel/accommodation-booking-system",
    tags: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Mongoose', 'Stripe', 'Better Auth', 'Framer Motion', 'CSS Modules', 'Resend'],
  };

  const lightboxImages = [
    { src: '/assets/projects/booking-system/gallery/landing-page.webp', description: 'Booking Search Interface' },
    { src: '/assets/projects/booking-system/gallery/admin-panel.webp', description: 'Admin Dashboard' },
    { src: '/assets/projects/booking-system/gallery/pc-calendar.webp', description: 'Admin Calendar' },
  ];

  const searchFeaturesData = [
    {
      image: { src: '/assets/projects/booking-system/features/search-availability.webp', desc: t('searchFeatures.f1.desc') },
      description: t('searchFeatures.f1.description'),
      icon: <FaSearch />
    },
    {
      image: { src: '/assets/projects/booking-system/features/real-time-pricing.webp', desc: t('searchFeatures.f2.desc') },
      description: t('searchFeatures.f2.description'),
      icon: <FaMoneyBillWave />
    },
    {
      image: { src: '/assets/projects/booking-system/features/booking-flow.webp', desc: t('searchFeatures.f3.desc') },
      description: t('searchFeatures.f3.description'),
      icon: <FaCalendarAlt />
    },
    {
      image: { src: '/assets/projects/booking-system/features/stripe-payment.webp', desc: t('searchFeatures.f4.desc') },
      description: t('searchFeatures.f4.description'),
      icon: <FaCreditCard />
    },
    {
      image: { src: '/assets/projects/booking-system/features/email-confirmation.webp', desc: t('searchFeatures.f5.desc') },
      description: t('searchFeatures.f5.description'),
      icon: <FaEnvelope />
    },
    {
      image: { src: '/assets/projects/booking-system/features/mobile-responsive.webp', desc: t('searchFeatures.f6.desc') },
      description: t('searchFeatures.f6.description'),
      icon: <FaMobileAlt />
    },
  ];

  const adminFeaturesData = [
    {
      image: { src: '/assets/projects/booking-system/features/admin-dashboard.webp', desc: t('adminFeatures.f1.desc') },
      description: t('adminFeatures.f1.description'),
      icon: <FaChartLine />
    },
    {
      image: { src: '/assets/projects/booking-system/features/admin-calendar.webp', desc: t('adminFeatures.f2.desc') },
      description: t('adminFeatures.f2.description'),
      icon: <FaCalendarAlt />
    },
    {
      image: { src: '/assets/projects/booking-system/features/admin-bookings.webp', desc: t('adminFeatures.f3.desc') },
      description: t('adminFeatures.f3.description'),
      icon: <FaBed />
    },
    {
      image: { src: '/assets/projects/booking-system/features/admin-properties.webp', desc: t('adminFeatures.f4.desc') },
      description: t('adminFeatures.f4.description'),
      icon: <FaCog />
    },
    {
      image: { src: '/assets/projects/booking-system/features/admin-pricing.webp', desc: t('adminFeatures.f5.desc') },
      description: t('adminFeatures.f5.description'),
      icon: <FaTags />
    },
    {
      image: { src: '/assets/projects/booking-system/features/Individual-prices.webp', desc: t('adminFeatures.f6.desc') },
      description: t('adminFeatures.f6.description'),
      icon: <FaCog />
    },
    {
      image: { src: '/assets/projects/booking-system/features/block-dates.webp', desc: t('adminFeatures.f7.desc') },
      description: t('adminFeatures.f7.description'),
      icon: <FaLock />
    },
    {
      image: { src: '/assets/projects/booking-system/features/seasons.webp', desc: t('adminFeatures.f8.desc') },
      description: t('adminFeatures.f8.description'),
      icon: <FaCalendarAlt />
    },
    {
      image: { src: '/assets/projects/booking-system/features/mail-conf-admin.webp', desc: t('adminFeatures.f9.desc') },
      description: t('adminFeatures.f9.description'),
      icon: <FaEnvelope />
    },
    {
      image: { src: '/assets/projects/booking-system/features/admin-settings.webp', desc: t('adminFeatures.f10.desc') },
      description: t('adminFeatures.f10.description'),
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
            <h2 className={styles.sectionTitle}>{t('challenge.title')}</h2>
          </div>
          <p className={styles.sectionText}>{t('challenge.text')}</p>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaCogs className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>{t('solution.title')}</h2>
          </div>
          <p className={styles.sectionText}>{t('solution.text')}</p>
          <div className={styles.contentGrid}>
            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaSearch className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>{t('searchFeatures.title')}</h3>
            </div>
            <p className={styles.sectionText}>{t('searchFeatures.description')}</p>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={searchFeaturesData} galleryId="search-features-gallery" />
            </div>

            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaUserShield className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>{t('adminFeatures.title')}</h3>
            </div>
            <p className={styles.sectionText}>{t('adminFeatures.description')}</p>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={adminFeaturesData} galleryId="admin-features-gallery" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaRocket className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>{t('achievements.title')}</h2>
          </div>
          <ul className={styles.featureList__1}>
            <li key="f1">
              <FaShieldAlt className={styles.featureIcon} />
              {t('achievements.items.f1')}
            </li>
            <li key="f2">
              <FaDatabase className={styles.featureIcon} />
              {t('achievements.items.f2')}
            </li>
            <li key="f3">
              <FaCode className={styles.featureIcon} />
              {t('achievements.items.f3')}
            </li>
            <li key="f4">
              <FaCreditCard className={styles.featureIcon} />
              {t('achievements.items.f4')}
            </li>
            <li key="f5">
              <FaLock className={styles.featureIcon} />
              {t('achievements.items.f5')}
            </li>
            <li key="f6">
              <FaMobileAlt className={styles.featureIcon} />
              {t('achievements.items.f6')}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaHandshake className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>{t('businessValue.title')}</h2>
          </div>
          <p className={`${styles.sectionText} ${styles['sectionText--leftPadding']}`}>{t('businessValue.introText')}</p>
          <ul className={styles.featureList__2}>
            <li key="f1">
              <span className={styles.checkmark}>✓</span>
              <strong>{t('businessValue.items.f1.title')}</strong> {t('businessValue.items.f1.description')}
            </li>
            <li key="f2">
              <span className={styles.checkmark}>✓</span>
              <strong>{t('businessValue.items.f2.title')}</strong> {t('businessValue.items.f2.description')}
            </li>
            <li key="f3">
              <span className={styles.checkmark}>✓</span>
              <strong>{t('businessValue.items.f3.title')}</strong> {t('businessValue.items.f3.description')}
            </li>
            <li key="f4">
              <span className={styles.checkmark}>✓</span>
              <strong>{t('businessValue.items.f4.title')}</strong> {t('businessValue.items.f4.description')}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <BottomButtonsBlock backText={t('bottomButtons.backToProjects')} contactText={t('bottomButtons.contactMe')} />
        </div>
      </div>
    </section>
  );
};