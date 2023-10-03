import styles from "./createAccount.module.css"
import { Link } from "react-router-dom";

// Dependencies
import { NavLink } from "react-router-dom";

// icons
import arrow from "../../assets/loginPage/arrow.svg"
import tomateLogo from "../../assets/loginPage/tomateLogo.svg"
import footerRight from "../../assets/loginPage/footerImgRight.svg"




export default function createAccount (){

     return (
      <div className={styles.loginPage}>
      <main className={styles.centerContainer}>
              <img src={tomateLogo} alt="" />
          
          <div className={styles.formContainer}>
              <span className={styles.formTittle} >Create account</span>
              <div className={styles.form}>
                  <input placeholder="correo@ejemplo.com" type="text" className={styles.inputForm}/>
                  <input placeholder="password" type="text" className={styles.inputForm} />
                  <input placeholder="Confirm password" type="text" className={styles.inputForm} />
                  <button type="submit" className={styles.btnEntrar}>CREATE</button>
                  <button className={styles.btnBack} ><NavLink to="/login" className={styles.btnBackLink} >Back</NavLink></button>
              </div>
          </div>
      </main>
  </div>  
     )
}