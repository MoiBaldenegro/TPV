import styles from "./ventaTypes.module.css"



export default function VentaTypes (){
    return (
        <div className={styles.container} >
        <section className={styles.head}>
            <h2>Tipos de venta</h2>
        </section>
        <section className={styles.mainSection}>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead></thead>
                    <tbody></tbody>
                </table>
            </div>
            <div className={styles.tableFooter}>
            </div>
        </section>
    </div>
    )
}