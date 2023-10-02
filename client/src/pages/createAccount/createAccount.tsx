import styles from "./createAccount.module.css"



export default function createAccount (){

     return (
        <div className={styles.container}>
         <img src="" alt="" />
         <div className={styles.createAccount}>
            <input type="text" />
            <input type="text" />
            <button>Create account</button>
         </div>
         
        </div>
     )
}