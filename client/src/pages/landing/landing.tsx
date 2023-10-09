import styles from "./landing.module.css";

import { NavLink } from "react-router-dom";

import tomateLogo from "../../assets/loginPage/tomateLogo.svg"
;






export default function Landing (){
    return(
        <div className={styles.loginPage}>
        <main className={styles.centerContainer}>
                <img src={tomateLogo} alt="" />
                <button  className={styles.btnBack} ><NavLink to="/login" className={styles.btnBackLink} > START </NavLink></button>
        </main>
    </div>  
    )
}