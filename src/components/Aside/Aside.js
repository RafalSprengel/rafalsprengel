'use client'

import styles from './Aside.module.css'
import { useState, useEffect, useRef  } from 'react';
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaHome, FaUser, FaLaptopCode, FaImages, FaServicestack } from 'react-icons/fa';
import HamburgerIcon from '../HamburgerIcon';
const ProfileImage = dynamic(() => import('@/components/ProfileImage/ProfileImage'), { ssr: false })

export default function Aside() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Aside');
     const asideRef = useRef(null);

     const handleClickOutside = (event) => {
        if (asideRef.current && !asideRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <aside ref={asideRef} className={`${styles.outer} ${isOpen ? styles['outer--visible'] : ''}`}>
            <div className={styles.inner}>
                <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                <div className={styles.profile}>
                    <ProfileImage
                        image={{
                            full: '/assets/home-page/profile.webp',
                            thumb: '/assets/home-page/profile.webp'
                        }}
                        className={styles.profile__img}
                    />
                    <h2 className={styles.profile__name}>Rafał Sprengel</h2>
                </div>

                <div className={styles.profile__socialLinks}>
                    <a href="https://github.com/RafalSprengel" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.profile__socialLink} />
                    </a>
                    <a href="https://uk.linkedin.com/in/rafal-sprengel" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.profile__socialLink} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100075524473779" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.profile__socialLink} />
                    </a>
                    <a href="mailto:sprengel.rafal@gmail.com">
                        <FaEnvelope className={styles.profile__socialLink} />
                    </a>
                    <a href="tel:+447518577503">
                        <FaPhone className={styles.profile__socialLink} />
                    </a>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="/#hero" className={styles.nav__link}>
                                <FaHome className={styles.nav__icon} /> {t('home')}
                            </a>
                        </li>

                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="/#about" className={styles.nav__link}>
                                <FaUser className={styles.nav__icon} /> {t('about')}
                            </a>
                        </li>

                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="/#skills" className={styles.nav__link}>
                                <FaLaptopCode className={styles.nav__icon} /> {t('skills')}
                            </a>
                        </li>

                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="/#portfolio" className={styles.nav__link}>
                                <FaImages className={styles.nav__icon} /> {t('portfolio')}
                            </a>
                        </li>

                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="/#services" className={styles.nav__link}>
                                <FaServicestack className={styles.nav__icon} /> {t('services')}
                            </a>
                        </li>

                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="/#contact" className={styles.nav__link}>
                                <FaEnvelope className={styles.nav__icon} /> {t('contact')}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
