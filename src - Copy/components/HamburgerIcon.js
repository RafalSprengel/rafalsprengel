'use client'

import React, { useState } from 'react';
import styles from './HamburgerIcon.module.css';

const HamburgerIcon = ({ onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (onToggle) onToggle(!isOpen);
    };

    return (
        <button className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
            <span className={`${styles.line} ${styles.top}`}></span>
            <span className={`${styles.line} ${styles.middle}`}></span>
            <span className={`${styles.line} ${styles.bottom}`}></span>
        </button>
    );
};

export default HamburgerIcon;