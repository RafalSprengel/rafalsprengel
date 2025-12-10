'use client'; // 👈 Deklaracja, że jest to Komponent Klienta (Client Component)

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';
import {useTranslations} from 'next-intl';


const updateGtagConsent = (status) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
            analytics_storage: status,
            ad_storage: status,
            ad_user_data: status,
            ad_personalization: status
        });
    }
};

export default function CookieConsent() {
    const [show, setShow] = useState(false);
    const t = useTranslations('CookiesBanner');

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');

        if (consent === 'accepted') {
            updateGtagConsent('granted');
            setShow(false);
        } else if (consent === 'rejected') {
            setShow(false);
        } else {
            setShow(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        updateGtagConsent('granted');
        setShow(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className={styles.banner}>
            <p>
                {t('message')}
            </p>
            <div className={styles.buttons}>
                <button className={styles.accept} onClick={handleAccept}>{t('buttonAccept')}</button>
                <button className={styles.reject} onClick={handleReject}>{t('buttonReject')}</button>
            </div>
        </div>
    ); 
}