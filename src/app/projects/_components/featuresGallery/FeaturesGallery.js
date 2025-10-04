import { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import './FeaturesGallery.css';

const FeaturesGallery = ({ data }) => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.featuresGallery__image-link'
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="featuresGallery">
      {data.map((el, index) => (
        <div className="featuresGallery__item" key={index}>
          <a
            href={el.image.full}
            className="featuresGallery__image-link"
            data-gallery="my-gallery"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
          >
            <img
              src={el.image.thumb}
              alt={el.image.description || `Gallery item ${index + 1}`}
              className="featuresGallery__image"
            />
          </a>
          <ul className='featuresGallery-featureList'>
            <li><span className='featuresGallery-featureIcon'>{data.icon}</span>{el.description}</li>
          </ul>
        </div>
      ))}
    </div>

  );
};

export default FeaturesGallery;