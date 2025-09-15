'use client';
import styles from '../HomePage.module.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export default function TypedSubtitle() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Web Developer", "Freelancer", "Designer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });
        return () => typed.destroy();
    }, []);

    return <span ref={typedRef} className={styles.hero__subtitleTyped}></span>;
}
