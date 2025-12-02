'use client';

import React from 'react';
import styles from './page.module.css';
import ProjectHeroSection from '@/app/projects/_components/ProjectHeroSection/ProjectHeroSection';
import BottomButtonsBlock from '../_components/BottomButtonsBlock/BottomButtonsBlock';
import { projectsData } from '../data';
import { DynamicLightbox, DynamicFeaturesGallery } from '../_components/ClientComponents';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('RestaurantProject');

  const heroData = {
    title: t('hero.title'),
    description: t('hero.description'),
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
        desc: t('publicFeatures.menu.desc')
      },
      description: t('publicFeatures.menu.description'),
      icon: <FaUtensils />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Cart.webp',
        thumb: '/assets/projects/restaurant/features/Cart-thumb.webp',
        desc: t('publicFeatures.cart.desc')
      },
      description: t('publicFeatures.cart.description'),
      icon: <FaShoppingCart />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Process.webp',
        thumb: '/assets/projects/restaurant/features/Process-thumb.webp',
        desc: t('publicFeatures.process.desc')
      },
      description: t('publicFeatures.process.description'),
      icon: <FaListAlt />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Stripe.webp',
        thumb: '/assets/projects/restaurant/features/Stripe-thumb.webp',
        desc: t('publicFeatures.payments.desc')
      },
      description: t('publicFeatures.payments.description'),
      icon: <FaCreditCard />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/BookTable.webp',
        thumb: '/assets/projects/restaurant/features/BookTable-thumb.webp',
        desc: t('publicFeatures.reservations.desc')
      },
      description: t('publicFeatures.reservations.description'),
      icon: <FaCalendarAlt />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/Contact.webp',
        thumb: '/assets/projects/restaurant/features/Contact-thumb.webp',
        desc: t('publicFeatures.contact.desc')
      },
      description: t('publicFeatures.contact.description'),
      icon: <FaEnvelope />
    }
  ];


  const panelFeaturesData = [
    {
      image: {
        full: '/assets/projects/restaurant/features/Dashboard.webp',
        thumb: '/assets/projects/restaurant/features/Dashboard-thumb.webp',
        desc: t('panelFeatures.dashboard.desc')
      },
      description: t('panelFeatures.dashboard.description'),
      icon: <FaChartLine />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelProducts.webp',
        thumb: '/assets/projects/restaurant/features/PanelProducts-thumb.webp',
        desc: t('panelFeatures.products.desc')
      },
      description: t('panelFeatures.products.description'),
      icon: <FaBox />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelOrders.webp',
        thumb: '/assets/projects/restaurant/features/PanelOrders-thumb.webp',
        desc: t('panelFeatures.orders.desc')
      },
      description: t('panelFeatures.orders.description'),
      icon: <FaClipboardList />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelMessages.webp',
        thumb: '/assets/projects/restaurant/features/PanelMessages-thumb.webp',
        desc: t('panelFeatures.messages.desc')
      },
      description: t('panelFeatures.messages.description'),
      icon: <FaEnvelope />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelSystemUsers.webp',
        thumb: '/assets/projects/restaurant/features/PanelSystemUsers-thumb.webp',
        desc: t('panelFeatures.staff.desc')
      },
      description: t('panelFeatures.staff.description'),
      icon: <FaUserShield />
    },
    {
      image: {
        full: '/assets/projects/restaurant/features/PanelTableReservations.webp',
        thumb: '/assets/projects/restaurant/features/PanelTableReservations-thumb.webp',
        desc: t('panelFeatures.reservations.desc')
      },
      description: t('panelFeatures.reservations.description'),
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
            <h2 className={styles.sectionTitle}>{t('challenge.title')}</h2>
          </div>
          <p className={styles.sectionText}>
            {t('challenge.text')}
          </p>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaCogs className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>{t('solution.title')}</h2>
          </div>
          <p className={styles.sectionText}>
            {t('solution.text')}
          </p>

          <div className={styles.contentGrid}>
            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaCode className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>{t('frontend.title')}</h3>
            </div>
            <p className={styles.sectionText}>
              {t.rich('frontend.text1', {
                strong: (chunks) => <strong key="b1">{chunks}</strong>,
                a: (chunks) => <a key="a1" href="https://mantine.dev" target="_blank" rel="noopener noreferrer">{chunks}</a>
              })}
            </p>
            <div className={styles.featuresListWrap}>
              <DynamicFeaturesGallery data={publicFeaturesData} galleryId="frontend-gallery" />
            </div>

            <p className={styles.sectionText}>
              {t('frontend.text2')}
            </p>
            <div className={styles.featuresListWrap}>
              <DynamicFeaturesGallery data={panelFeaturesData} galleryId="backend-gallery" />
            </div>

            <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
              <FaServer className={styles.sectionIcon} />
              <h3 className={styles.subSectionTitle}>{t('backend.title')}</h3>
            </div>
            <p className={styles.sectionText}>
              {t('backend.text')}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaTrophy className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>{t('achievements.title')}</h2>
          </div>
          <ul className={styles.featureList__1}>
            <li><FaCogs className={styles.featureIcon} /> {t('achievements.f1')}</li>
            <li><FaMobileAlt className={styles.featureIcon} /> {t('achievements.f2')}</li>
            <li><FaRocket className={styles.featureIcon} /> {t('achievements.f3')}</li>
            <li><FaDatabase className={styles.featureIcon} /> {t('achievements.f4')}</li>
            <li><FaCode className={styles.featureIcon} /> {t('achievements.f5')}</li>

          </ul>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaHandshake className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>{t('businessValue.title')}</h2>
          </div>
          <p className={styles.sectionText}>
            {t('businessValue.text1')}
          </p>
          <ul className={styles.featureList__2}>
            <li> <span className={styles.checkmark}>✓</span> <strong>{t('businessValue.f1.title')}:</strong> {t('businessValue.f1.description')}</li>
            <li> <span className={styles.checkmark}>✓</span> <strong>{t('businessValue.f2.title')}:</strong> {t('businessValue.f2.description')}</li>
            <li> <span className={styles.checkmark}>✓</span> <strong>{t('businessValue.f3.title')}:</strong> {t('businessValue.f3.description')}</li>
            <li> <span className={styles.checkmark}>✓</span> <strong>{t('businessValue.f4.title')}:</strong> {t('businessValue.f4.description')}</li>
          </ul>
          <br />
          <p className={styles.sectionText}>
            {t('businessValue.text2')}
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