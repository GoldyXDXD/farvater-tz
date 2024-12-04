import styles from "./TopFooter.module.css"
import logo from "../../../../shared/assets/icons/logo.png";
import download from "../../../../shared/assets/icons/DownloadButton.svg";
import {WhiteLink} from "../../../../shared/ui/WhiteLink/WhiteLink";

export const TopFooter = () => {
    return (
        <div className={styles.TopFooter}>
            <div className={styles.info}>
                <div className={styles.logoSection}>
                    <a className={styles.logo} href="/">
                        <img src={logo} alt=""/>
                    </a>
                    <div className={styles.platform}>
                        Платформа для автоматизации ваших процессов
                    </div>
                    <a className={styles.download} href="/">
                        <img src={download} alt=""/>
                    </a>
                    <div className={styles.platform}>
                        © ООО «НПО «Фарватер» 2024
                    </div>
                </div>
                <div className={styles.columns}>
                    <div>
                        <h5>
                            Платформа
                        </h5>
                        <div className={styles.column}>
                            <WhiteLink title="ElcoreStore" weight="400"/>
                            <WhiteLink title="ElcoreCloud" weight="400"/>
                            <WhiteLink title="ElcoreIDE" weight="400"/>
                        </div>
                    </div>
                    <div>
                        <h5>
                            Обучение и ресурсы
                        </h5>
                        <div className={styles.column}>
                            <WhiteLink title="Что такое ElcorePLC" weight="400"/>
                            <WhiteLink title="Документация" weight="400"/>
                            <WhiteLink title="Обучающие материалы" weight="400"/>
                            <WhiteLink title="Примеры использования" weight="400"/>
                            <WhiteLink title="База знаний" weight="400"/>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <a className={styles.cabinet} href="/">
                            Личный кабинет
                        </a>
                        <div className={styles.column}>
                            <WhiteLink title="Контакты" weight="400"/>
                            <WhiteLink title="Новости и статьи" weight="400"/>
                            <WhiteLink title="Сообщество (Форум)" weight="400"/>
                            <WhiteLink title="Тех поддержка" weight="400"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}