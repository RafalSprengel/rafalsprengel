'use client'

import React from 'react';
import styles from './HamburgerIcon.module.css';

const HamburgerIcon = ({ isOpen, onClick }) => {
    return (
        <button className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={onClick}>
            <span className={`${styles.line} ${styles.top}`}></span>
            <span className={`${styles.line} ${styles.middle}`}></span>
            <span className={`${styles.line} ${styles.bottom}`}></span>
        </button>
    );
};

export default HamburgerIcon;