import styles from "./saveCategories.module.css";
import Loader from "../../../../../loaders/loader";

interface Props{
	isOpen: any,
	onClose: any,
	children: any,
}


export default function SaveCategoriesModal({ isOpen, onClose, children } : Props){

   

    if(!isOpen) return null;
    return (
        <div className={styles.modal}>
            <Loader/>
        </div>
    )
    
	
}