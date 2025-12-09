'use client';
import React, { useEffect } from 'react';
import styles from './ProjectHeroSection.module.css';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ProjectHeroSection({
  title,
  description,
  pcImage,
  tabletImage,
  phoneImage,
  liveUrl,
  githubUrl,
  tags,
}) {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: -150,
    });
  }, []);
  return (
    <section className={styles.projectHero}>
      <div className={styles.projectHero__imagesContainer}>

        {pcImage && (
          <Image
            src={pcImage}
            alt={title}
            width={635}
            height={800}
            className={styles.projectHero__pcImage}
          />
        )}
        {tabletImage && (
          <Image
            src={tabletImage}
            alt={title}
            width={230}
            height={350}
            className={styles.projectHero__tabletImage}
            data-aos="fade-left"
          />
        )}
        {phoneImage && (
          <Image
            src={phoneImage}
            alt={title}
            width={110}
            height={210}
            className={styles.projectHero__phoneImage}
            data-aos="fade-right"
            data-aos-delay="300"
          />
        )}
        {liveUrl && liveUrl !== '#' && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectHero__buttonVisitWebsite}>
            Visit Website
          </a>
        )}
        <div className={styles.projectHero__pcOverlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.projectHero__content}>
          <h1 className={styles.projectHero__title}>{title}</h1>
          <p className={styles.projectHero__description}>{description}</p>

          {tags && tags.length > 0 && (
            <div className={styles.projectHero__tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.projectHero__tag}>{tag}</span>
              ))}
            </div>
          )}

          <div className={styles.projectHero__actions}>
            {liveUrl && liveUrl !== '#' && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.projectHero__button} ${styles.projectHero__buttonPrimary}`}>
                <FaExternalLinkAlt className={styles.buttonIcon} /> See Live Project
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.projectHero__button} ${styles.projectHero__buttonSecondary}`}>
                <FaGithub className={styles.buttonIcon} /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}