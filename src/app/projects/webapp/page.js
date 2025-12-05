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
  FaUserPlus,
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
  FaCog,
  FaCreditCard,
  FaMobileAlt,
  FaRocket,
  FaUser,
  FaHandshake,
  FaDatabase,
  FaShieldAlt,
} from 'react-icons/fa';


export default function WebappProjectPage() {
  const t = useTranslations('WebAppProject');

  const heroData = {
    title: t('hero.title'),
    description: t('hero.description'),
    pcImage: '/assets/projects/webapp/hero/pc.webp',
    tabletImage: '/assets/projects/webapp/hero/tablet.webp',
    phoneImage: '/assets/projects/webapp/hero/phone.webp',
    liveUrl: 'https://restaurant.rafalsprengel.com/management/login',
    githubUrl: 'https://github.com/RafalSprengel/restaurant-pos-backend',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OAuth', 'Admin Panel', 'POS System', 'User Management', 'Stripe'],
  };

  const lightboxImages = [
    { full: '/assets/projects/webapp/gallery/office.webp', thumb: '/assets/projects/webapp/gallery/office-thumb.webp', description: 'Admin Dashboard' },
    { full: '/assets/projects/webapp/gallery/kitchen.webp', thumb: '/assets/projects/webapp/gallery/kitchen-thumb.webp', description: 'Product Management' },
    { full: '/assets/projects/webapp/gallery/mobile.webp', thumb: '/assets/projects/webapp/gallery/mobile-thumb.webp', description: 'Order Management' },
  ];

  // LISTY KLUCZY do mapowania, zastępujące returnObjects: true
  const achievementsKeys = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'];
  const businessValueKeys = ['f1', 'f2', 'f3', 'f4', 'f5'];


  // DANE DLA FeaturesGallery POBIERANE BEZPOŚREDNIO Z KLUCZY f1, f2, f3...
  const customerPanelFeaturesData = [
    { image: { full: '/assets/projects/webapp/features/customer-login.webp', thumb: '/assets/projects/webapp/features/customer-login-thumb.webp', desc: 'Customer Dashboard' }, description: t('customerPanel.features.f1'), icon: <FaUserPlus /> },
    { image: { full: '/assets/projects/webapp/features/customer-recent-orders.webp', thumb: '/assets/projects/webapp/features/customer-recent-orders-thumb.webp', desc: 'Recent Orders' }, description: t('customerPanel.features.f2'), icon: <FaClipboardList /> },
    { image: { full: '/assets/projects/webapp/features/customer-personal-details.webp', thumb: '/assets/projects/webapp/features/customer-personal-details-thumb.webp', desc: 'Personal Details' }, description: t('customerPanel.features.f3'), icon: <FaUserEdit /> },
    { image: { full: '/assets/projects/webapp/features/customer-password-change.webp', thumb: '/assets/projects/webapp/features/customer-password-change-thumb.webp', desc: 'Password Change' }, description: t('customerPanel.features.f4'), icon: <FaKey /> },
    { image: { full: '/assets/projects/webapp/features/customer-deleting-account.webp', thumb: '/assets/projects/webapp/features/customer-deleting-account-thumb.webp', desc: 'Account Deletion' }, description: t('customerPanel.features.f5'), icon: <FaTrashAlt /> },
  ];

  const adminPanelFeaturesData = [
    { image: { full: '/assets/projects/webapp/features/admin-dashboard.webp', thumb: '/assets/projects/webapp/features/admin-dashboard-thumb.webp', desc: 'Dashboard Overview' }, description: t('adminPanel.features.f1'), icon: <FaChartLine /> },
    { image: { full: '/assets/projects/webapp/features/admin-products.webp', thumb: '/assets/projects/webapp/features/admin-products-thumb.webp', desc: 'Product Management' }, description: t('adminPanel.features.f2'), icon: <FaBox /> },
    { image: { full: '/assets/projects/webapp/features/admin-update-products.webp', thumb: '/assets/projects/webapp/features/admin-update-products-thumb.webp', desc: 'Product Management' }, description: t('adminPanel.features.f3'), icon: <FaBox /> },
    { image: { full: '/assets/projects/webapp/features/admin-categories.webp', thumb: '/assets/projects/webapp/features/admin-categories-thumb.webp', desc: 'Category Management' }, description: t('adminPanel.features.f4'), icon: <FaTags /> },
    { image: { full: '/assets/projects/webapp/features/admin-customers.webp', thumb: '/assets/projects/webapp/features/admin-customers-thumb.webp', desc: 'Customers Management' }, description: t('adminPanel.features.f5'), icon: <FaUserShield /> },
    { image: { full: '/assets/projects/webapp/features/admin-orders.webp', thumb: '/assets/projects/webapp/features/admin-orders-thumb.webp', desc: 'Order Management' }, description: t('adminPanel.features.f6'), icon: <FaClipboardList /> },
    { image: { full: '/assets/projects/webapp/features/admin-messages.webp', thumb: '/assets/projects/webapp/features/admin-messages-thumb.webp', desc: 'Customer Messages' }, description: t('adminPanel.features.f7'), icon: <FaEnvelope /> },
    { image: { full: '/assets/projects/webapp/features/admin-tables-reservations.webp', thumb: '/assets/projects/webapp/features/admin-tables-reservations-thumb.webp', desc: 'Table Reservations Management' }, description: t('adminPanel.features.f8'), icon: <FaCalendarAlt /> },
    { image: { full: '/assets/projects/webapp/features/admin-users.webp', thumb: '/assets/projects/webapp/features/admin-users-thumb.webp', desc: 'Staff Management' }, description: t('adminPanel.features.f9'), icon: <FaUsers /> },
    { image: { full: '/assets/projects/webapp/features/admin-settings.webp', thumb: '/assets/projects/webapp/features/admin-settings-thumb.webp', desc: 'Application Settings' }, description: t('adminPanel.features.f10'), icon: <FaCog /> },
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
              <FaUser className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>{t('customerPanel.title')}</h3>
            </div>
            <p className={styles.sectionText}>{t('customerPanel.description')}</p>
            <div className={styles.featuresListWrap}>
              <FeaturesGallery data={customerPanelFeaturesData} galleryId="customer-panel-gallery" />
            </div>

            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaUserShield className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>{t('adminPanel.title')}</h3>
            </div>
            <p className={styles.sectionText}>{t('adminPanel.description')}</p>
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
              <FaCogs className={styles.featureIcon} />
              {t('achievements.items.f3')}
            </li>
            <li key="f4">
              <FaCreditCard className={styles.featureIcon} />
              {t('achievements.items.f4')}
            </li>
            <li key="f5">
              <FaChartLine className={styles.featureIcon} />
              {t('achievements.items.f5')}
            </li>
            <li key="f6">
              <FaMobileAlt className={styles.featureIcon} />
              {t('achievements.items.f6')}
            </li>
            <li key="f7">
              <FaCode className={styles.featureIcon} />
              {t('achievements.items.f7')}
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
              <strong>{t('businessValue.items.f1.title')}:</strong> {t('businessValue.items.f1.description')}
            </li>
            <li key="f2">
              <span className={styles.checkmark}>✓</span>
              <strong>{t('businessValue.items.f2.title')}:</strong> {t('businessValue.items.f2.description')}
            </li>
            <li key="f3">
              <span className={styles.checkmark}>✓</span>
              <strong>{t('businessValue.items.f3.title')}:</strong> {t('businessValue.items.f3.description')}
            </li>
            <li key="f4">
              <span className={styles.checkmark}>✓</span>
              <strong>{t('businessValue.items.f4.title')}:</strong> {t('businessValue.items.f4.description')}
            </li>
            <li key="f5">
              <span className={styles.checkmark}>✓</span>
              <strong>{t('businessValue.items.f5.title')}:</strong> {t('businessValue.items.f5.description')}
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