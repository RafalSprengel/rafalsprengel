import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.copyright}>
                <p>© <span>Copyright</span> <strong className={styles.sitename}>RS</strong> <span>All Rights Reserved</span></p>
            </div>
            <div className={styles.credits}>
                Designed by <a href="https://rafalsprengel.com/">Rafał Sprengel</a>
            </div>
        </div>

    )
}