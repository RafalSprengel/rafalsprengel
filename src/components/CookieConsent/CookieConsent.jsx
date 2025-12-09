'use client'; // 👈 Deklaracja, że jest to Komponent Klienta (Client Component)

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

// Funkcja pomocnicza do aktualizacji stanu zgody w GTM
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
                We use cookies to improve your experience. You can accept or reject non-essential cookies.
            </p>
            <div className={styles.buttons}>
                <button className={styles.accept} onClick={handleAccept}>Accept</button>
                <button className={styles.reject} onClick={handleReject}>Reject</button>
            </div>
        </div>
    ); 
}