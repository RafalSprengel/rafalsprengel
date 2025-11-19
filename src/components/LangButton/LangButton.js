import styles from './LangButton.module.css';

export default function LangButton() {
    return (
        <div className={styles.center}>
            <div className={styles.switch}>
                <input
                    id="language-toggle"
                    className={`${styles.checkToggle} ${styles.checkToggleRoundFlat}`}
                    type="checkbox"
                />
                <label htmlFor="language-toggle"></label>
                <span className={styles.on}>EN</span>
                <span className={styles.off}>PL</span>
            </div>
        </div>
    );
}