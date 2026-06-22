'use client'
import { useEffect } from 'react';
import GLightbox from 'glightbox';
import Image from 'next/image';
import 'glightbox/dist/css/glightbox.min.css';
import './FeaturesGallery.css';
const FeaturesGallery = ({ data, galleryId }) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: `#${galleryId} .featuresGallery__image-link`
    });

    return () => {
      lightbox.destroy();
    };
  }, [galleryId]);

  return (
    <div className="featuresGallery" id={galleryId}>
      {data.map((el, index) => (
        <div className="featuresGallery__item" key={index}>
          <a
            href={`/_next/image?url=${encodeURIComponent(el.image.src)}&w=1920&q=75`}
            className="featuresGallery__image-link"
            data-gallery="my-gallery"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Image
              src={el.image.src}
              alt={el.image.description || `Gallery item ${index + 1}`}
              className="featuresGallery__image"
              width={300}
              height={230}
              style={{ objectFit: 'cover' }}
            />
          </a>
          <ul className='featuresGallery-featureList'>
            <li><span className='featuresGallery-featureIcon'>{el.icon}</span><span className='featuresGallery-featureText'>{el.description}</span></li>
          </ul>
        </div>
      ))}
    </div>

  );
};

export default FeaturesGallery;
