'use client'

import styles from './Aside.module.css'
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaHome, FaUser, FaFileAlt, FaImages, FaServicestack, FaChevronDown } from 'react-icons/fa';
import HamburgerIcon from '../HamburgerIcon';
import { postponeWithTracking } from 'next/dist/server/app-render/dynamic-rendering';

export default function Aside() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <aside className={`${styles.outer} ${isOpen ? styles['outer--visible'] : ''}`}>
            <div className={styles.inner}>
                <div onClick={() => setIsOpen(!isOpen)} style={{ position: 'relative' }}> <HamburgerIcon /> </div>
                <div className={styles.profile}>
                    <img src='/assets/homepage/profile.jpg' alt='profile' className={styles.profile__img} />
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
                            <a href="#hero" className={styles.nav__link}>
                                <FaHome className={styles.nav__icon} /> Home
                            </a>
                        </li>
                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="#about" className={styles.nav__link}>
                                <FaUser className={styles.nav__icon} /> About
                            </a>
                        </li>

                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="#portfolio" className={styles.nav__link}>
                                <FaImages className={styles.nav__icon} /> Portfolio
                            </a>
                        </li>
                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="#services" className={styles.nav__link}>
                                <FaServicestack className={styles.nav__icon} /> Services
                            </a>
                        </li>

                        <li className={styles.nav__item} onClick={() => setIsOpen(false)}>
                            <a href="#contact" className={styles.nav__link}>
                                <FaEnvelope className={styles.nav__icon} /> Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
