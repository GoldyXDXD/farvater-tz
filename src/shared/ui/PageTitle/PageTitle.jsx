import styles from './PageTitle.module.css';

export const PageTitle = ({title}) => {
    return (
        <h1 className={styles.PageTitle}>
            {title}
        </h1>
    )
}