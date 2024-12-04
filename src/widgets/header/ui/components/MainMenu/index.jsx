import styles from "./MainMenu.module.css";
import {WhiteLink} from "../../../../../shared/ui/WhiteLink/WhiteLink";
import logo from "../../../../../shared/assets/icons/logo.png"
import sandwich from "../../../../../shared/assets/icons/sandwich.svg"
import arrow from "../../../../../shared/assets/icons/down_arrow.svg"

export const MainMenu = () => {
    return (
        <div className={styles.MainMenu}>
            <div className={styles.info}>
                <a href="#">
                    <img src={logo} alt=""/>
                </a>
                <nav className={styles.nav}>
                    <WhiteLink classname={styles.first} title="ElcoreStore" />
                    <WhiteLink classname={styles.second} title="ElcoreCloud" />
                    <WhiteLink classname={styles.third} title="ElcoreIDE" />
                    <WhiteLink classname={styles.fourth} title={<>Обучение и ресурсы<img src={arrow} style={{paddingLeft: "8px"}}/> </>} />
                    <WhiteLink title="Новости и статьи" classname={styles.fifth}/>
                </nav>
                <div>
                    <img src={sandwich} alt="menu"/>
                </div>
            </div>
        </div>
    )
}