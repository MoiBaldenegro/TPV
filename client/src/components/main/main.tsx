import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


import style from "./main.module.css"


export default function Main () {

    const mainRender:string = useSelector(state => state.mainRender);
    const deployItemRender:string = useSelector(state => state.deployItemRender)

    return(
        <section className={style.container}>
            <div>
                <Outlet/>
            </div> 
        </section>
    )
}