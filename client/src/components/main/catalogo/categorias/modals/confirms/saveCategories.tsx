import { useSelector } from "react-redux";
import styles from "./saveCategories.module.css";
import ConfirmLoader from "../../../../../loaders/confirmsLoader/confirmsLoader";

interface Props{
	isOpen: any,
	onClose: any,
	children: any,
}


export default function SaveCategoriesModal({ isOpen, onClose, children } : Props){
    const { loading } = useSelector( state => state.categories );
    const { allCategories } = useSelector( state => state.categories );  


    if(!isOpen) return null;
    return(
        loading ? <ConfirmLoader/> : allCategories && allCategories.length > 0 ? (
            <div className={styles.modal}>
                {children}
                <h1>Categorias guardadas</h1>
                <button onClick={onClose}></button>
            </div>
        ) : null 

    )
    
	
	
}