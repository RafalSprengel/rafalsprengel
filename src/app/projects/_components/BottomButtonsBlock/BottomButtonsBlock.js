
import styles from './BottomButtonsBlock.module.css'
import {
    FaEnvelope,
    FaArrowLeft,
} from 'react-icons/fa'


const BottomButtonsBlock = () => {
    return (
        <div className={styles.buttonsGroup}>
            <a href="/#portfolio" target="_blank" rel="noopener noreferrer" className={styles.button}>
                <FaArrowLeft className={styles.buttonIcon} /> Back to projects
            </a>
            <a href='/#contact' target="_blank" rel="noopener noreferrer" className={styles.button}>
                <FaEnvelope className={styles.buttonIcon} /> Contact Me
            </a>
        </div>

    );
};

export default BottomButtonsBlock;