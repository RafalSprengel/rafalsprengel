'use client';

import styles from './BottomButtonsBlock.module.css'
import {
    FaEnvelope,
    FaArrowLeft,
} from 'react-icons/fa'
import { useTranslations } from 'next-intl';


const BottomButtonsBlock = () => {
    const t = useTranslations('BottomButtonsBlock');

    return (
        <div className={styles.buttonsGroup}>
            <a href="/#portfolio" rel="noopener noreferrer" className={styles.button}>
                <FaArrowLeft className={styles.buttonIcon} /> {t('backToProjects')}
            </a>
            <a href='/#contact' rel="noopener noreferrer" className={styles.button}>
                <FaEnvelope className={styles.buttonIcon} /> {t('contactMe')}
            </a>
        </div>
    );
};

export default BottomButtonsBlock;