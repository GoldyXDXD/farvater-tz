import styles from "./NewsTags.module.css"
import {useState} from "react";

export const NewsTags = () => {
    const [tags, setTags] = useState("Все новости и статьи")

    return (
        <div className={styles.tags}>
            <Tag title="Все новости и статьи" tag={tags} onClick={()=> setTags("Все новости и статьи")}/>
            <Tag title="Новости" tag={tags} onClick={()=> setTags("Новости")}/>
            <Tag title="Статьи" tag={tags} onClick={()=> setTags("Статьи")}/>
        </div>
    )
}

const Tag = ({title, tag, onClick}) => {
    return (
        <a onClick={onClick} className={`${styles.tag} ${tag === title ? styles.active : styles.default}`} href="#">
            {title}
        </a>
    )
}