import styles from './WhiteLink.module.css'

export const WhiteLink = ({size = "18px", weight="700", href="#", title, classname=""}) => {
    return (
        <a href={href} className={`${styles.WhiteLink} ${classname}`}>
            {title}
        </a>
    )
}