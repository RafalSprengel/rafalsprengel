import styles from './page.module.css'
import TypedSubtitle from '../components/TypedSubtitle';
import { FaReact, FaNodeJs, FaGithub, FaCss3Alt, FaServer, FaUbuntu, FaWordpress, FaLock } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiJavascript, SiNginx, SiWebmin, SiStripe, SiNpm, SiJsonwebtokens, SiPassport, SiMantine } from "react-icons/si";
import { FaBriefcase, FaClipboardList, FaChartBar, FaBinoculars, FaSun, FaCalendarWeek } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from '../components/ContactForm';

const services = [
    {
        icon: <FaBriefcase />,
        title: 'Lorem Ipsum',
        description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
    },
    {
        icon: <FaClipboardList />,
        title: 'Dolor Sitema',
        description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata'
    },
    {
        icon: <FaChartBar />,
        title: 'Sed ut perspiciatis',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
    },
    {
        icon: <FaBinoculars />,
        title: 'Magni Dolores',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
        icon: <FaSun />,
        title: 'Nemo Enim',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
    },
    {
        icon: <FaCalendarWeek />,
        title: 'Eiusmod Tempor',
        description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi'
    },
];

export default function HomePage() {
    return (
        <div className={styles.homePage_container}>
            <section id="hero" className={styles.hero_section}>
                <img src='/homePage/hero-bg.jpg' alt='hero'></img>
                <div className={styles.hero__title}>Rafal Sprengel</div>
                <div className={styles.hero__subtitle}>
                    I'm a <TypedSubtitle />
                    <noscript>Web Developer</noscript>
                </div>
            </section>
            <section id="about" className={styles.about__section}>
                <h2 className={styles.about__title}>About</h2>
                <p className={styles.about__desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com</p>
                <div className={styles.about__content}>
                    <div className={styles.about__col1}>
                        <img src="/homepage/profile.jpg" alt="profile"></img>
                    </div>

                    <div className={styles.about__col2}>
                        <div className={styles.about__col2__title}>UI/UX Designer & Web Developer.</div>
                        <div className={styles.about__col2__desc}>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</div>
                    </div>
                </div>
            </section>
            <section id="skills" className={styles.skills__section}>
                <h2 className={styles.skills__title}>Skills</h2>
                <p className={styles.skills__desc}>Tytaj napisać że zajmuje sie technologinami zarówno Frontendowymi jak i Backendowymi.
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                <div className={styles.skills_desc}>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</div>

                <div className={styles.skills__grid}>

                    <div className={styles.skills__grid}>
                        <div className={styles.skills__item}><SiNextdotjs className={styles.skills__icon} /><span>Next.js</span></div>
                        <div className={styles.skills__item}><FaReact className={styles.skills__icon} /><span>React.js</span></div>
                        <div className={styles.skills__item}><SiJavascript className={styles.skills__icon} /><span>JavaScript</span></div>
                        <div className={styles.skills__item}><FaCss3Alt className={styles.skills__icon} /><span>CSS</span></div>
                        <div className={styles.skills__item}><SiMantine className={styles.skills__icon} /><span>Mantine (components)</span></div>
                        <div className={styles.skills__item}><FaNodeJs className={styles.skills__icon} /><span>Node.js</span></div>
                        <div className={styles.skills__item}><SiExpress className={styles.skills__icon} /><span>Express.js</span></div>
                        <div className={styles.skills__item}><FaServer className={styles.skills__icon} /><span>REST API</span></div>
                        <div className={styles.skills__item}><SiJsonwebtokens className={styles.skills__icon} /><span>JWT Authorization</span></div>
                        <div className={styles.skills__item}><SiPassport className={styles.skills__icon} /><span>Passport OAuth2</span></div>
                        <div className={styles.skills__item}><SiStripe className={styles.skills__icon} /><span>Stripe API payments</span></div>
                        <div className={styles.skills__item}><SiMongodb className={styles.skills__icon} /><span>MongoDB</span></div>
                        <div className={styles.skills__item}><FaServer className={styles.skills__icon} /><span>VPS servers (config & security)</span></div>
                        <div className={styles.skills__item}><SiNginx className={styles.skills__icon} /><span>NGINX</span></div>
                        <div className={styles.skills__item}><SiWebmin className={styles.skills__icon} /><span>Webmin</span></div>
                        <div className={styles.skills__item}><FaUbuntu className={styles.skills__icon} /><span>Ubuntu</span></div>
                        <div className={styles.skills__item}><FaGithub className={styles.skills__icon} /><span>GitHub</span></div>
                        <div className={styles.skills__item}><SiNpm className={styles.skills__icon} /><span>NPM</span></div>
                        <div className={styles.skills__item}><FaWordpress className={styles.skills__icon} /><span>WordPress</span></div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className={styles.portfolio__section}>
                <h2 className={styles.portfolio__title}>Portfolio</h2>
                <div className={styles.portfolio__tabs}>
                    <div className={styles.portfolio__tab}>ALL</div>
                    <div className={styles.portfolio__tab}>WEB APPLICATIONS</div>
                    <div className={styles.portfolio__tab}>BESPOKE WEBSITE</div>
                    <div className={styles.portfolio__tab}>WORDPRESS</div>
                </div>
                <div className={styles.portfolio__items}>
                    <div className={styles.portfolio__item}>
                        <h3 className={styles.portfolio__item__title}>Web Applications </h3>
                        <img stc='#' alt='portfolio-example'></img>
                    </div>
                    <div className={styles.portfolio__item}>
                        <h3 className={styles.portfolio__item__title}>Beskope Websites </h3>
                        <img stc='#' alt='portfolio-example'></img>
                    </div>
                    <div className={styles.portfolio__item}>
                        <h3 className={styles.portfolio__item__title}>Wordpress </h3>
                        <img stc='#' alt='portfolio-example'></img>
                    </div>
                </div>
            </section>
            <section id="services" className={styles.services__section}>
                <h2 className={styles.services__title}>Services</h2>
                <div className={styles.services__grid}></div>
                <div className={styles.services__container}>
                    <div className={styles.services__grid}>
                        {services.map((s, i) => (
                            <div key={i} className={styles.services_item}>
                                <div className={styles.services__item__icon}>{s.icon}</div>
                                <div>
                                    <h4 className={styles.services__item__title}>{s.title}</h4>
                                    <p className={styles.services__item__description}>{s.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact" className={styles.contact__section}>
                <h2 className={styles.contact__title}>Contact</h2>
                <p className={styles.contact__desc}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

                <div className={styles.contact__container}>
                    <div className={styles.contact__row}>
                        <div className={styles.contact__col1}>
                            <div className={styles.contact__info}>
                                <div className={styles.contact__infoItem}>
                                    <FaMapMarkerAlt className={styles.contact__icon} />
                                    <div>
                                        <h3>Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div className={styles.contact__infoItem}>
                                    <FaPhone className={styles.contact__icon} />
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                                <div className={styles.contact__infoItem}>
                                    <FaEnvelope className={styles.contact__icon} />
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.636939437179!2d-0.2899856366136919!3d53.760347572297285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878bdc22f1ad895%3A0x8f30f105485b0745!2sFitling%20Grove%2C%20Hull%20HU9%203DJ!5e0!3m2!1spl!2suk!4v1757894610318!5m2!1spl!2suk"
                                    width="400"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        <div className={styles.contact__col2}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}