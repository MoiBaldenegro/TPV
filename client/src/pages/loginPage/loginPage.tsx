import styles from "./loginPage.module.css";

// Dependencies
import { NavLink } from "react-router-dom";



export default function LoginPage (){

    return (
        <div>
            <header>
                <div>
                    <select name="" id=""></select>
                </div>
            </header>
            <main>
                <div>
                    <span>Bienvenido</span>
                    <img src="" alt="" />
                </div>
                <div>
                    <span>Iniciar sesion</span>
                    <div>
                        <input placeholder="correo@ejemplo.com" type="text" />
                        <input placeholder="password" type="text" />
                        <div>
                            <div>
                                <input type="checkbox" />
                                <span>Recordar sesion</span>
                            </div>
                            <span>Olvidaste tu contraseña?</span>
                            
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    <NavLink to="#avisoDePrivacidad"  id="">Aviso de Privacidad</NavLink>
                    <span>|</span>
                    <NavLink to="#avisoDePrivacidad"  id="">Terminos y condiciones</NavLink>
                    <span>|</span>
                    <NavLink to="#avisoDePrivacidad"  id="">Soporte tecnico</NavLink>
                </div>
                <img src="" alt="" />
            </footer>
        </div>  
        )

}


