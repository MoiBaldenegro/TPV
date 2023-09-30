import styles from "./home.module.css"
import Header from "../../components/header/header"
import Main from "../../components/main/main"
import Aside from "../../components/aside/aside"



export default function Home (){

    return(
        <div className={styles.container}>
            <Header/>
            <Aside/>
            <Main/>
        </div>
    )
}