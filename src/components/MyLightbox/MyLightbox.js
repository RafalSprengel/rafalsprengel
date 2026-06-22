'use client'

import { useEffect } from 'react';
import GLightbox from 'glightbox';
import Image from 'next/image';
import 'glightbox/dist/css/glightbox.min.css';
import './MyLightbox.css';

const MyLightbox = ({ images }) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.my-lightbox__image-link'
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="my-lightbox">
      {images.map((img, index) => (
        <a
          href={`/_next/image?url=${encodeURIComponent(img.src)}&w=1920&q=75`}
          className="my-lightbox__image-link"
          data-gallery="my-gallery"
          data-aos="fade-up"
          data-aos-delay={index * 100}
          key={index}
        >
          <Image
            src={img.src}
            alt={img.description || `Gallery item ${index + 1}`}
            className="my-lightbox__image"
            width={300}
            height={250}
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
        </a>
      ))}
    </div>

  );
};

export default MyLightbox;
