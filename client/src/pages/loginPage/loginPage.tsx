import styles from "./loginPage.module.css";
import { Link } from "react-router-dom";

// Dependencies
import { NavLink } from "react-router-dom";

// icons
import arrow from "../../assets/loginPage/arrow.svg"
import tomateLogo from "../../assets/loginPage/tomateLogo.svg"
import footerRight from "../../assets/loginPage/footerImgRight.svg"



export default function LoginPage (){

    return (
        <div className={styles.loginPage}>
            <header className={styles.header}>
                <div className={styles.lenguajeSelect}>
                    <select name="" id="" className={styles.selectInput}>
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                    <img src={arrow} alt="" className={styles.arrowSelect} />
                </div>
                <div>
                    <span> No tienes una cuenta? <Link to={"/create/account"}>Crea una aqui </Link></span>
                </div>
            </header>
            <main className={styles.centerContainer}>
                <div className={styles.logoContainer}>
                    <span>Bienvenido</span>
                    <img src={tomateLogo} alt="" />
                </div>
                <div className={styles.formContainer}>
                    <span className={styles.formTittle} >Iniciar sesion</span>
                    <div className={styles.form}>
                        <input placeholder="correo@ejemplo.com" type="text" className={styles.inputForm}/>
                        <input placeholder="password" type="text" className={styles.inputForm} />
                        <div className={styles.checkboxContainer}>
                            <div >
                                <input type="checkbox" />
                                <span>Recordar sesion</span>
                            </div>
                            <span>Olvidaste tu contraseña?</span> 
                        </div>
                        <button type="submit" className={styles.btnEntrar}>Entrar</button>
                    </div>
                </div>
            </main>
            <footer className={styles.footer} >
                <div>
                    <NavLink to="#avisoDePrivacidad"  id="">Aviso de Privacidad</NavLink>
                    <span>|</span>
                    <NavLink to="#avisoDePrivacidad"  id="">Terminos y condiciones</NavLink>
                    <span>|</span>
                    <NavLink to="#avisoDePrivacidad"  id="">Soporte tecnico</NavLink>
                </div>
                <img src={footerRight} alt="tomate-copyrigth" />
            </footer>
        </div>  
        )

}


