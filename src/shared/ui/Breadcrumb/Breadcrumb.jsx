import styles from './Breadcrumb.module.css';
export const Breadcrumb = ({title}) => {
    return (
        <div className={styles.Breadcrumb}>
            <div className={styles.info}>
                <div>
                    <span className={styles.main}>
                        <span>Главная</span>
                        <span>/</span>
                        <span style={{color: "white"}}>{title}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}