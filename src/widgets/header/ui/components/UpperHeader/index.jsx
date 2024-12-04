import styles from "./UpperHeader.module.css";
import tg from "../../../../../shared/assets/icons/TG.svg";
import dzen from "../../../../../shared/assets/icons/Dzen.svg";
import yt from "../../../../../shared/assets/icons/YT.svg";
import vk from "../../../../../shared/assets/icons/VK.svg";
import {WhiteLink} from "../../../../../shared/ui/WhiteLink/WhiteLink";
import star from "../../../../../shared/assets/icons/star.svg";
import shop from "../../../../../shared/assets/icons/shopping-cart.svg";

export const UpperHeader = () => {
    return (
        <div className={styles.upper}>
            <div className={styles.info}>
                <div className={styles.social}>
                    <a target="_blank" href="#">
                        <img src={tg} alt="tg"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src={dzen} alt="dzen"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src={yt} alt="yt"/>
                    </a>
                    <a className={styles.fourth} target="_blank" href="#">
                        <img src={vk} alt="vk"/>
                    </a>
                </div>
                <div className={styles.right}>
                    <div className={`${styles.buttons} ${styles.left}`}>
                        <WhiteLink title="Форум" size="15px"/>
                        <WhiteLink title="Поиск" size="15px"/>
                        <WhiteLink title="Контакты" size="15px"/>
                    </div>
                    <div className={styles.buttons}>
                        <a target="_blank" href="#">
                            <img src={star} alt="star"/>
                        </a>
                        <a target="_blank" href="#">
                            <img src={shop} alt="shop"/>
                        </a>
                        <a className={styles.green} href="#">
                            Личный кабинет
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}