'use client';

import { changeLocale } from '../../actions/changeLocale.js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './LangButton.module.css';

export default function LangButton({ currentLocale }) {

    const [locale, setLocale] = useState(currentLocale);

    const router = useRouter();

    const handleLocaleChange = async () => {
        const newLocale = locale === 'en' ? 'pl' : 'en';
        setLocale(newLocale);
        await changeLocale(newLocale);
        router.refresh();
    }

    const isChecked = locale === 'en';

    return (
        <div className={styles.center}>
            <div className={styles.switch}>
                <input
                    id="language-toggle"
                    className={`${styles.checkToggle} ${styles.checkToggleRoundFlat}`}
                    type="checkbox"
                    checked={isChecked} 
                    onChange={handleLocaleChange}
                />
                <label htmlFor="language-toggle"></label>
                <span className={styles.on}>PL</span>
                <span className={styles.off}>EN</span>
            </div>
        </div>
    );
}