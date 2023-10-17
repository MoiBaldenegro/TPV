        import styles from "./header.module.css"
import notification from "../../assets/header/notificacion.svg"
import arrow from "../../assets/header/arrow.svg"
import logo from "../../assets/header/tomateLogo.svg"
import search from "../../assets/header/search.svg"
import avatar from "../../assets/header/avatar.svg"
import closeIcon from "../../assets/header/close.svg";
// hooks
import { useState } from "react";


export default function Header(){
    const [  searching, setSearching ] = useState();
    const [ isActive, setIsActive ] = useState(false);
    const closeIconClass = isActive ? styles.closeIcon : styles.closeIconHidden;

    const HandleChange = () => {
        event?.preventDefault()
        setSearching(event.target.value)
    }
    if(searching && searching.length > 0){
        setIsActive(true)
    } else{
        setIsActive(false)
    }

    const clearSearch = () => {
        setSearching(undefined)
    }


    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} className={styles.tomateLogo} alt="tomate-logo" />
            </div>
            <div className={styles.right}>
                <div className={styles.input}>
                    <img src={search} className={styles.searchIcon} alt="" />
                    <input type="text" value={searching}  onChange={HandleChange} className={styles.search} placeholder="Buscar módulo"/>  
                    <img src={closeIcon} alt="close-icon" onClick={clearSearch}  className={closeIconClass}/>    
                </div>
                <div className={styles.userContainer}>
                    <img src={notification}  className={styles.noti} alt="notificacion" />
                    <span> Moises Baldenegro</span>
                    <img src={arrow} alt="vector"/> 
                </div>    
                <div className={styles.perfil}>
                    <img src={avatar} className={styles.avatar} alt="" />  
            </div>
        </div>
        </header>
    )
}
