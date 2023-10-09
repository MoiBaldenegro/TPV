import styles from "./loginPage.module.css";
import { Link } from "react-router-dom";

// Dependencies
import { NavLink, useNavigate } from "react-router-dom";

// icons
import arrow from "../../assets/loginPage/arrow.svg"
import tomateLogo from "../../assets/loginPage/tomateLogo.svg"
import footerRight from "../../assets/loginPage/footerImgRight.svg"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions";



export default function LoginPage (){
    const navigate = useNavigate();
    const loginUsers = useSelector(state => state.loginUsers);
    const dispatch = useDispatch();

    const [user, setUser ] = useState({
        email : "",
        password: ""
    })

    const handleChange = (event: any) => {
        event?.preventDefault();
        setUser({
            ...user,
            [event?.target.name] : event?.target.value
        })
    }
    const onSubmit = () => {
       dispatch(loginUser(user));
       navigate("/home")

    }

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
                        <input name="email" onChange={handleChange} placeholder="correo@ejemplo.com" type="text" className={styles.inputForm}/>
                        <input  name="password" onChange={handleChange} placeholder="password" type="password" className={styles.inputForm} />
                        <div className={styles.checkboxContainer}>
                            <div className={styles.checkboxInputContainer}>
                                <input  id="mi-checkbox" className={styles.checkboxInputNew} type="checkbox" />
                                <span className={styles.checkboxLabel}>Recordar sesión</span>
                            </div>
                            <Link className={styles.pass}>¿Olvidaste tu contraseña?</Link> 
                        </div>
                        <button onClick={onSubmit} type="submit" className={styles.btnEntrar}>Entrar</button>
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


