import styles from './button.module.css'

export const ButtonCSSModule = () => {
    return <button className={`${styles.yellowButton} ${styles.redBorderButton}`}>Klicka här</button>
}