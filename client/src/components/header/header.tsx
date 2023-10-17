        import styles from "./header.module.css"
import notification from "../../assets/header/notificacion.svg"
import arrow from "../../assets/header/arrow.svg"
import logo from "../../assets/header/tomateLogo.svg"
import search from "../../assets/header/search.svg"
import avatar from "../../assets/header/avatar.svg"
import closeIcon from "../../assets/header/close.svg";


export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} className={styles.tomateLogo} alt="tomate-logo" />
            </div>
            <div className={styles.right}>
                <div className={styles.input}>
                    <img src={search} className={styles.searchIcon} alt="" />
                    <input type="text" className={styles.search} placeholder="Buscar módulo"/>  
                    <img src={closeIcon} alt="close-icon" />    
                </div>
                <div className={styles.userContainer}>
                    <img src={notification}  className={styles.noti} alt="notificacion" />
                    <span> Moises Baldenegro</span>
                    <img src={arrow} alt="vector" className={styles.closeIcon} /> 
                </div>    
                <div className={styles.perfil}>
                    <img src={avatar} className={styles.avatar} alt="" />  
            </div>
        </div>
        </header>
    )
}
