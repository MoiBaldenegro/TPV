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
                    <span className={styles.bienvenido}>Bienvenido</span>
                    <img src={tomateLogo} alt="" />
                </div>
                <div className={styles.formContainer}>
                    <span className={styles.formTittle} >Iniciar sesión</span>
                    <div className={styles.form}>
                        <input placeholder="correo@ejemplo.com" type="text" className={styles.inputForm}/>
                        <input placeholder="password" type="text" className={styles.inputForm} />
                        <div className={styles.checkboxContainer}>
                            <div className={styles.checkboxInputContainer}>
                                <input  id="mi-checkbox" className={styles.checkboxInputNew} type="checkbox" />
                                <span className={styles.checkboxLabel}>Recordar sesión</span>
                            </div>
                            <Link className={styles.pass}>¿Olvidaste tu contraseña?</Link> 
                        </div>
                        <button type="submit" className={styles.btnEntrar}>Entrar</button>
                    </div>
                </div>
            </main>
            <footer className={styles.footer} >
                <div className={styles.linksContainer}>
                    <NavLink className={styles.links} to="#avisoDePrivacidad"  id="">Aviso de Privacidad</NavLink>
                    <span>|</span>
                    <NavLink className={styles.links} to="#avisoDePrivacidad"  id="">Términos y condiciones</NavLink>
                    <span>|</span>
                    <NavLink  className={styles.links} to="#avisoDePrivacidad"  id="">Soporte técnico</NavLink>
                </div>
                <img className={styles.copyrigth} src={footerRight} alt="tomate-copyrigth" />
            </footer>
        </div>  
        )

}


