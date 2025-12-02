'use client'

import styles from '../app/page.module.css'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { useTranslations } from 'next-intl'

export default function TypedSubtitle() {
  const typedRef = useRef(null)
  const t = useTranslations('HeroSection')

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        t('typed.webdeveloper'),
        t('typed.freelancer'),
        t('typed.designer'),
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    })

    return () => typed.destroy()
  }, [t])

  return <span ref={typedRef} className={styles.hero__subtitleTyped}></span>
}
