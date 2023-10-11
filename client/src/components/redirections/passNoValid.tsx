import styles from "./passNoValid.module.css"
import { NavLink } from "react-router-dom";

import tomateLogo from "../../assets/loginPage/tomateLogo.svg"
;


export default function PassNoValid (){
    return(
        <div className={styles.loginPage}>
        <main className={styles.centerContainer}>
                <img src={tomateLogo} alt="" />
                <h1> Password y/o email NO VALID</h1>
                <button  className={styles.btnBack} ><NavLink to="/login" className={styles.btnBackLink} >RETURN</NavLink></button>
        </main>
    </div>  
    )
}