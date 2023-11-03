import styles from "./confirmLoader.module.css"


export default function ConfirmLoader(){

    return(
        <div className={styles.container}>
            <div className={styles.spinner}></div>
        </div>
        
    )
}