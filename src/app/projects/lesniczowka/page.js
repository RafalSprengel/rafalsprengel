
'use client'

import React from 'react'
import styles from './page.module.css'
import ProjectHeroSection from '@/app/projects/_components/ProjectHeroSection/ProjectHeroSection'
import dynamic from 'next/dynamic'
import BottomButtonsBlock from '../_components/BottomButtonsBlock/BottomButtonsBlock';
import { useTranslations } from 'next-intl'

const MyLightbox = dynamic(() => import('@/components/MyLightbox/MyLightbox'), { ssr: false })
const FeaturesGallery = dynamic(() => import('@/app/projects/_components/featuresGallery/FeaturesGallery.js'), { ssr: false })

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
    FaHandshake,
    FaEnvelope,
    FaImages,
    FaSearch,
    FaCalendarAlt,
    FaGraduationCap,
    FaKey,
    FaBed,
} from 'react-icons/fa'

export default async function LesniczowkaProjectPage() {

    const t = useTranslations('LesniczowkaProject')
    const tButtons = useTranslations('BottomButtonsBlock')

    const heroData = {
        title: t('hero.title'),
        description: t('hero.description'),
        pcImage: '/assets/projects/lesniczowka/hero/pc.webp',
        tabletImage: '/assets/projects/lesniczowka/hero/tablet.webp',
        phoneImage: '/assets/projects/lesniczowka/hero/phone.webp',
        liveUrl: 'https://lesniczowkawiezyca.pl/',
        githubUrl: null,
        tags: ['WordPress', 'PHP', 'JavaScript', 'Booking System', 'Payment Integration']
    }

    const lightboxImages = [
        { full: '/assets/projects/lesniczowka/gallery/Billboard.webp', thumb: '/assets/projects/lesniczowka/gallery/Billboard-thumb.webp' },
        { full: '/assets/projects/lesniczowka/gallery/Package.webp', thumb: '/assets/projects/lesniczowka/gallery/Package-thumb.webp' },
        { full: '/assets/projects/lesniczowka/gallery/Workshop.webp', thumb: '/assets/projects/lesniczowka/gallery/Workshop-thumb.webp' }
    ]

    const keyFunctionalAreasData = [
        {
            image: { full: '/assets/projects/lesniczowka/features/search-1.webp', thumb: '/assets/projects/lesniczowka/features/search-1-thumb.webp', desc: t('keyFunctionalAreas.f1.desc') },
            description: t('keyFunctionalAreas.f1.description'),
            icon: <FaSearch />
        },
        {
            image: { full: '/assets/projects/lesniczowka/features/search-2.webp', thumb: '/assets/projects/lesniczowka/features/search-2-thumb.webp', desc: t('keyFunctionalAreas.f2.desc') },
            description: t('keyFunctionalAreas.f2.description'),
            icon: <FaClipboardList />
        },
        {
            image: { full: '/assets/projects/lesniczowka/features/process.webp', thumb: '/assets/projects/lesniczowka/features/process-thumb.webp', desc: t('keyFunctionalAreas.f3.desc') },
            description: t('keyFunctionalAreas.f3.description'),
            icon: <FaCreditCard />
        },
        {
            image: { full: '/assets/projects/lesniczowka/features/services.webp', thumb: '/assets/projects/lesniczowka/features/services-thumb.webp', desc: t('keyFunctionalAreas.f4.desc') },
            description: t('keyFunctionalAreas.f4.description'),
            icon: <FaBed />
        },
        {
            image: { full: '/assets/projects/lesniczowka/features/gallery.webp', thumb: '/assets/projects/lesniczowka/features/gallery-thumb.webp', desc: t('keyFunctionalAreas.f5.desc') },
            description: t('keyFunctionalAreas.f5.description'),
            icon: <FaImages />
        },
        {
            image: { full: '/assets/projects/lesniczowka/features/contact.webp', thumb: '/assets/projects/lesniczowka/features/contact-thumb.webp', desc: t('keyFunctionalAreas.f6.desc') },
            description: t('keyFunctionalAreas.f6.description'),
            icon: <FaEnvelope />
        },
        {
            image: { full: '/assets/projects/lesniczowka/features/mobile.webp', thumb: '/assets/projects/lesniczowka/features/mobile-thumb.webp', desc: t('keyFunctionalAreas.f7.desc') },
            description: t('keyFunctionalAreas.f7.description'),
            icon: <FaMobileAlt />
        },
        {
            image: { full: '/assets/projects/lesniczowka/features/reservations.webp', thumb: '/assets/projects/lesniczowka/features/reservations-thumb.webp', desc: t('keyFunctionalAreas.f8.desc') },
            description: t('keyFunctionalAreas.f8.description'),
            icon: <FaDatabase />
        },
        {
            image: { full: '/assets/projects/lesniczowka/features/calendar.webp', thumb: '/assets/projects/lesniczowka/features/calendar-thumb.webp', desc: t('keyFunctionalAreas.f9.desc') },
            description: t('keyFunctionalAreas.f9.description'),
            icon: <FaCalendarAlt />
        }
    ]

    return (
        <section className={styles.projectSection}>
            <ProjectHeroSection{...heroData} />
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
                            <FaKey className={styles.sectionIcon} />
                            <h3 className={styles.subSectionTitle}>{t('keyFunctionalAreas.title')}</h3>
                        </div>
                        <div className={styles.featuresListWrap}>
                            <FeaturesGallery data={keyFunctionalAreasData} galleryId="functional-areas-gallery" />
                        </div>
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
                            <FaCogs className={styles.featureIcon} />{t('achievements.f1')}
                        </li>
                        <li key="f2">
                            <FaClipboardList className={styles.featureIcon} />{t('achievements.f2')}
                        </li>
                        <li key="f3">
                            <FaCode className={styles.featureIcon} />{t('achievements.f3')}
                        </li>
                        <li key="f4">
                            <FaChartLine className={styles.featureIcon} />{t('achievements.f4')}
                        </li>
                        <li key="f5">
                            <FaGraduationCap className={styles.featureIcon} />{t('achievements.f5')}
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
                            <span className={styles.checkmark}>✓</span><strong>{t('businessValue.items.f1.title')}</strong>: {t('businessValue.items.f1.description')}
                        </li>
                        <li key="f2">
                            <span className={styles.checkmark}>✓</span><strong>{t('businessValue.items.f2.title')}</strong>: {t('businessValue.items.f2.description')}
                        </li>
                        <li key="f3">
                            <span className={styles.checkmark}>✓</span><strong>{t('businessValue.items.f3.title')}</strong>: {t('businessValue.items.f3.description')}
                        </li>
                        <li key="f4">
                            <span className={styles.checkmark}>✓</span><strong>{t('businessValue.items.f4.title')}</strong>: {t('businessValue.items.f4.description')}
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
    );
}