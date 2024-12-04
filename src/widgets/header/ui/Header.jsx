import styles from './Header.module.css';
import {UpperHeader} from "./components/UpperHeader";
import {MainMenu} from "./components/MainMenu";

export const Header = () => {
    return (
        <header className={styles.Header}>
            <UpperHeader/>
            <MainMenu/>
        </header>
    )
}