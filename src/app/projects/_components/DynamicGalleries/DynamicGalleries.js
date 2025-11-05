'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './DynamicGalleries.module.css';

const MyLightbox = dynamic(() => import('@/components/MyLightbox/MyLightbox'), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading gallery...</div>
});

const FeaturesGallery = dynamic(
  () => import('@/app/projects/_components/featuresGallery/FeaturesGallery.js'),
  {
    ssr: false,
    loading: () => <div className={styles.loading}>Loading features...</div>
  }
);

export default function DynamicGalleries({ images, features, galleryId }) {
  return (
    <>
      {images && (
        <div className={styles.galleryContainer}>
          <MyLightbox images={images} />
        </div>
      )}
      {features && (
        <div className={styles.featuresContainer}>
          <FeaturesGallery data={features} galleryId={galleryId} />
        </div>
      )}
    </>
  );
}