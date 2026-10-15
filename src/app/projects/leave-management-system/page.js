import React from 'react'
import styles from './page.module.css'
import ProjectHeroSection from '@/app/projects/_components/ProjectHeroSection/ProjectHeroSection'
import { MyLightboxClient as MyLightbox, FeaturesGalleryClient as FeaturesGallery } from './ClientDynamic'
import BottomButtonsBlock from '../_components/BottomButtonsBlock/BottomButtonsBlock'
import { useTranslations } from 'next-intl'

export const metadata = {
  alternates: {
    canonical: '/projects/leave-management-system/',
  },
}

import {
  FaLightbulb,
  FaTrophy,
  FaHandshake,
  FaCalendarAlt,
  FaCalendarCheck,
  FaClipboardList,
  FaCalendarPlus,
  FaChartPie,
  FaChartLine,
  FaChartBar,
  FaUsers,
  FaUserShield,
  FaCheckCircle,
  FaShieldAlt,
  FaDatabase,
  FaLayerGroup,
  FaCode,
  FaBell,
  FaMobileAlt,
  FaFileContract,
  FaCalendarMinus,
  FaFlag,
  FaUserPlus,
} from 'react-icons/fa'

export default function LeaveManagementSystemProjectPage() {

  const t = useTranslations('LeaveManagementSystemProject')
  const tButtons = useTranslations('BottomButtonsBlock')

  const heroData = {
    title: t('hero.title'),
    description: t('hero.description'),
    pcImage: '/assets/projects/leave-management-system/hero/pc.webp',
    tabletImage: '/assets/projects/leave-management-system/hero/tablet.webp',
    phoneImage: '/assets/projects/leave-management-system/hero/phone.webp',
    liveUrl: 'https://off-work.rafalsprengel.com/',
    githubUrl: 'https://github.com/RafalSprengel/off-work',
    tags: ['Next.js', 'TypeScript', 'Mantine UI', 'MongoDB', 'Better Auth', 'Resend', 'Recharts'],
  }

  const lightboxImages = [
    { src: '/assets/projects/leave-management-system/gallery/1a.webp' },
    { src: '/assets/projects/leave-management-system/gallery/2a.webp' },
    { src: '/assets/projects/leave-management-system/gallery/3a.webp' },
  ]

  const employeeFeaturesData = [
    {
      image: { src: '/assets/projects/leave-management-system/features/1a.webp', desc: t('employeeArea.f1.desc') },
      description: t('employeeArea.f1.description'),
      icon: <FaChartPie />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/2a.webp', desc: t('employeeArea.f2.desc') },
      description: t('employeeArea.f2.description'),
      icon: <FaCalendarAlt />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/3a.webp', desc: t('employeeArea.f3.desc') },
      description: t('employeeArea.f3.description'),
      icon: <FaCalendarPlus />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/4a.webp', desc: t('employeeArea.f4.desc') },
      description: t('employeeArea.f4.description'),
      icon: <FaClipboardList />,
    },
  ]

  const managerFeaturesData = [
    {
      image: { src: '/assets/projects/leave-management-system/features/1b.webp', desc: t('managerArea.f1.desc') },
      description: t('managerArea.f1.description'),
      icon: <FaChartLine />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/2b.webp', desc: t('managerArea.f2.desc') },
      description: t('managerArea.f2.description'),
      icon: <FaCalendarCheck />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/3b.webp', desc: t('managerArea.f3.desc') },
      description: t('managerArea.f3.description'),
      icon: <FaCheckCircle />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/4b.webp', desc: t('managerArea.f4.desc') },
      description: t('managerArea.f4.description'),
      icon: <FaClipboardList />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/5b.webp', desc: t('managerArea.f5.desc') },
      description: t('managerArea.f5.description'),
      icon: <FaUserShield />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/6b.webp', desc: t('managerArea.f6.desc') },
      description: t('managerArea.f6.description'),
      icon: <FaUserPlus />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/7b.webp', desc: t('managerArea.f7.desc') },
      description: t('managerArea.f7.description'),
      icon: <FaFileContract />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/8b.webp', desc: t('managerArea.f8.desc') },
      description: t('managerArea.f8.description'),
      icon: <FaBell />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/9b.webp', desc: t('managerArea.f9.desc') },
      description: t('managerArea.f9.description'),
      icon: <FaCalendarMinus />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/10b.webp', desc: t('managerArea.f10.desc') },
      description: t('managerArea.f10.description'),
      icon: <FaFlag />,
    },
    {
      image: { src: '/assets/projects/leave-management-system/features/11b.webp', desc: t('managerArea.f11.desc') },
      description: t('managerArea.f11.description'),
      icon: <FaChartBar />,
    },
  ]

  return (
    <section className={styles.projectSection}>
      <ProjectHeroSection {...heroData} />

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionImages}>
            <MyLightbox images={lightboxImages} />
          </div>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FaLightbulb className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>{t('solution.title')}</h2>
          </div>
          <p className={styles.sectionText}>{t('solution.text')}</p>

          <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
            <FaUserShield className={styles.sectionIcon} />
            <h3 className={styles.subSectionTitle}>{t('employeeArea.title')}</h3>
          </div>
          <div className={styles.featuresListWrap}>
            <FeaturesGallery data={employeeFeaturesData} galleryId="employee-area-gallery" />
          </div>

          <div className={`${styles.sectionHeader} ${styles.subSectionHeader}`}>
            <FaUsers className={styles.sectionIcon} />
            <h3 className={styles.subSectionTitle}>{t('managerArea.title')}</h3>
          </div>
          <div className={styles.featuresListWrap}>
            <FeaturesGallery data={managerFeaturesData} galleryId="manager-area-gallery" />
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
            <li key="f1">
              <FaShieldAlt className={styles.featureIcon} />{t('achievements.f1')}
            </li>
            <li key="f2">
              <FaDatabase className={styles.featureIcon} />{t('achievements.f2')}
            </li>
            <li key="f3">
              <FaLayerGroup className={styles.featureIcon} />{t('achievements.f3')}
            </li>
            <li key="f4">
              <FaCode className={styles.featureIcon} />{t('achievements.f4')}
            </li>
            <li key="f5">
              <FaBell className={styles.featureIcon} />{t('achievements.f5')}
            </li>
            <li key="f6">
              <FaCalendarAlt className={styles.featureIcon} />{t('achievements.f6')}
            </li>
            <li key="f7">
              <FaMobileAlt className={styles.featureIcon} />{t('achievements.f7')}
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
          <ul className={styles.featureList__2}>
            <li key="f1">
              <span className={styles.checkmark}>✓</span><strong>{t('businessValue.f1.title')}</strong> {t('businessValue.f1.description')}
            </li>
            <li key="f2">
              <span className={styles.checkmark}>✓</span><strong>{t('businessValue.f2.title')}</strong> {t('businessValue.f2.description')}
            </li>
            <li key="f3">
              <span className={styles.checkmark}>✓</span><strong>{t('businessValue.f3.title')}</strong> {t('businessValue.f3.description')}
            </li>
            <li key="f4">
              <span className={styles.checkmark}>✓</span><strong>{t('businessValue.f4.title')}</strong> {t('businessValue.f4.description')}
            </li>
            <li key="f5">
              <span className={styles.checkmark}>✓</span><strong>{t('businessValue.f5.title')}</strong> {t('businessValue.f5.description')}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.container}>
          <BottomButtonsBlock backText={tButtons('backToProjects')} contactText={tButtons('contactMe')} />
        </div>
      </div>
    </section>
  )
}
