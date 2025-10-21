'use client'

import { useEffect } from 'react';
import GLightbox from 'glightbox';
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
                href={image.full}
                className="profile-image__link"
                data-gallery="my-gallery"
                data-aos="fade-up"
                data-aos-delay='100'
            >
                <img
                    src={image.thumb}
                    alt={image.description || `Profile Image`}
                    className="profile-image__img"
                />
            </a>
        </div>

    );
};

export default ProfileImage;
