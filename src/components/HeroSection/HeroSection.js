'use client'

import styles from './HeroSection.module.css'
import dynamic from 'next/dynamic'
import LangButton from '../LangButton/LangButton.js'
import { useTranslations } from 'next-intl'

const TypedSubtitle = dynamic(() => import('../TypedSubtitle'), {
  ssr: false,
  loading: () => <span>Web Developer</span>
})

export default function HeroSection({ currentLocale }) {
  const t = useTranslations('HeroSection')

  return (
    <section id="hero" className={styles.hero_section}>
      <div className={styles.langButtWrap}>
        <LangButton currentLocale={currentLocale} />
      </div>

      <video
        className={styles.videoContainer}
        width="640"
        height="360"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="assets/home-page/intro.mp4" type="video/mp4" />
        {t('video_not_supported')}
      </video>

      <div className={styles.hero__title}>Rafał Sprengel</div>

      <div className={styles.hero__subtitle}>
        {t('im_a')} <TypedSubtitle />
        <noscript>{t('fallback_subtitle')}</noscript>
      </div>
    </section>
  )
}
