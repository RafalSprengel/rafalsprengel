import styles from './page.module.css'
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import HeroSection from '../components/HeroSection/HeroSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import { cookies } from 'next/headers';

export default async function HomePage() {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('locale');
    const currentLocale = localeCookie?.value || 'en';
    return (
        <div className={styles.homePage_container}>
            <HeroSection currentLocale={currentLocale} />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ServicesSection />
            <ContactSection />
        </div>
    );
}