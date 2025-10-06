import styles from './page.module.css'
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import HeroSection from '../components/HeroSection/HeroSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';

export default function HomePage() {
    return (
        <div className={styles.homePage_container}>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ServicesSection />
            <ContactSection />
        </div>
    );
}