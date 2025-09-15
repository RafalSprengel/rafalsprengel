import styles from './Aside.module.css'
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaHome, FaUser, FaFileAlt, FaImages, FaServicestack, FaChevronDown } from 'react-icons/fa';


export default function Aside() {
    return (
        <aside className={styles.container}>
            <div className={styles.profile}>
                <img src='/assets/homepage/profile.jpg' alt='profile' className={styles.profile__img} />
                <h2 className={styles.profile__name}>Rafał Sprengel</h2>
            </div>

            <div className={styles.profile__socialLinks}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.profile__socialLink} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.profile__socialLink} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className={styles.profile__socialLink} />
                </a>
                <a href="mailto:twojemail@example.com">
                    <FaEnvelope className={styles.profile__socialLink} />
                </a>
                <a href="tel:+441234567890">
                    <FaPhone className={styles.profile__socialLink} />
                </a>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <a href="#hero" className={styles.nav__link}>
                            <FaHome className={styles.nav__icon} /> Home
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#about" className={styles.nav__link}>
                            <FaUser className={styles.nav__icon} /> About
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#resume" className={styles.nav__link}>
                            <FaFileAlt className={styles.nav__icon} /> Resume
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#portfolio" className={styles.nav__link}>
                            <FaImages className={styles.nav__icon} /> Portfolio
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#services" className={styles.nav__link}>
                            <FaServicestack className={styles.nav__icon} /> Services
                        </a>
                    </li>
                    <li className={`${styles.nav__item} ${styles.dropdown}`}>
                        <a href="#" className={styles.nav__link}>
                            <FaChevronDown className={styles.nav__icon} /> Dropdown
                        </a>
                        <ul className={styles.nav__dropdown}>
                            <li className={styles.nav__dropdownItem}><a href="#">Dropdown 1</a></li>
                            <li className={`${styles.nav__dropdownItem} ${styles.dropdown}`}>
                                <a href="#">Deep Dropdown <FaChevronDown className={styles.nav__iconSmall} /></a>
                                <ul className={styles.nav__dropdown}>
                                    <li className={styles.nav__dropdownItem}><a href="#">Deep Dropdown 1</a></li>
                                    <li className={styles.nav__dropdownItem}><a href="#">Deep Dropdown 2</a></li>
                                    <li className={styles.nav__dropdownItem}><a href="#">Deep Dropdown 3</a></li>
                                    <li className={styles.nav__dropdownItem}><a href="#">Deep Dropdown 4</a></li>
                                    <li className={styles.nav__dropdownItem}><a href="#">Deep Dropdown 5</a></li>
                                </ul>
                            </li>
                            <li className={styles.nav__dropdownItem}><a href="#">Dropdown 2</a></li>
                            <li className={styles.nav__dropdownItem}><a href="#">Dropdown 3</a></li>
                            <li className={styles.nav__dropdownItem}><a href="#">Dropdown 4</a></li>
                        </ul>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#contact" className={styles.nav__link}>
                            <FaEnvelope className={styles.nav__icon} /> Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
