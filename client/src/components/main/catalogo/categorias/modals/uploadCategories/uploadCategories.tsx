import styles from "./uploadCategories.module.css"

interface Props{
    isOpen: any,
    onClose: any,
    children: any
}


export default function UploadFiles({ isOpen, onClose, children } : Props){
    if (!isOpen) return null;
    return(
        <div className={styles.modal}>
|   |       <h1>Contenido</h1>
        </div>

    )
} 