'use client';

import React from 'react';
import styles from './ProjectHeroSection.module.css';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ProjectHeroSection({
  title,
  description,
  mainImage,
  liveUrl,
  githubUrl,
  tags,
}) {
  return (
    <section className={styles.projectHero}>
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
                <FaExternalLinkAlt className={styles.buttonIcon} /> Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.projectHero__button} ${styles.projectHero__buttonSecondary}`}>
                <FaGithub className={styles.buttonIcon} /> View Code
              </a>
            )}
          </div>
        </div>

        {mainImage && (
          <div className={styles.projectHero__imageContainer}>
            <Image
              src={mainImage}
              alt={title}
              width={1200}
              height={700}
              layout="responsive"
              className={styles.projectHero__image}
            />
          </div>
        )}
      </div>
    </section>
  );
}