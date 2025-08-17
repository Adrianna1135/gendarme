import { Link } from "react-router";
import styles from "./Header.module.css"; 
import logo from "../assets/logo.jpeg";

const Header =() => {
    return (
        <nav>
            <h1><img className={styles.logo} src={logo} alt='Logo' /> Gendarmerie</h1>
            <div className={styles["link-container"]}>
                <Link className={styles.link} to="/">ACCUEIL</Link>
                <Link className={styles.link} to="/apropos">APROPOS</Link>
                <Link className={styles.link} to="/liste">LISTE</Link>
                <Link className={styles.link} to="/ajout">AJOUT</Link>
            </div>
        </nav>
    )
} 
export default Header;