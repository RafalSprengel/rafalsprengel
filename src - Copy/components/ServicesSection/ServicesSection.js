import styles from './ServicesSection.module.css';
import { FaBriefcase, FaClipboardList, FaChartBar, FaBinoculars, FaSun, FaCalendarWeek } from 'react-icons/fa';

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

export default function ServicesSection() {
    return (
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
    );
}
