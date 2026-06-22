'use client'

import { useEffect } from 'react';
import GLightbox from 'glightbox';
import Image from 'next/image';
import 'glightbox/dist/css/glightbox.min.css';
import './ProfileImage.css';

const ProfileImage = ({ image }) => {
    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.profile-image__link'
        });

        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <div className="profile-image">
            <a
                href={`/_next/image?url=${encodeURIComponent(image.src)}&w=1920&q=75`}
                className="profile-image__link"
                data-gallery="my-gallery"
                data-aos="fade-up"
                data-aos-delay='100'
            >
                <Image
                    src={image.src}
                    alt={image.description || `Profile Image`}
                    className="profile-image__img"
                    width={160}
                    height={160}
                    style={{ objectFit: 'cover', objectPosition: '0px -47px', borderRadius: '50%' }}
                />
            </a>
        </div>

    );
};

export default ProfileImage;
