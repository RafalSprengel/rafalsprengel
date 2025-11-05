'use client';

import dynamic from 'next/dynamic';
import styles from './ClientComponents.module.css';

export const DynamicLightbox = dynamic(
  () => import('@/components/MyLightbox/MyLightbox'),
  {
    ssr: false,
    loading: () => <div className={styles.loading}>Loading gallery...</div>
  }
);

export const DynamicFeaturesGallery = dynamic(
  () => import('@/app/projects/_components/featuresGallery/FeaturesGallery.js'),
  {
    ssr: false,
    loading: () => <div className={styles.loading}>Loading features...</div>
  }
);