import { useSelector } from "react-redux";
import styles from "./saveCategories.module.css";
import ConfirmLoader from "../../../../../loaders/confirmsLoader/confirmsLoader";
import checkIcon from "../../../../../../assets/public/checkIcon.svg"

interface Props{
	isOpen: any,
	onClose: any,
	children: any,
    actionType: ()=> void
}


export default function SaveCategoriesModal({ isOpen, onClose, children, actionType } : Props){
    const { loading } = useSelector( state => state.categories );
    const { allCategories } = useSelector( state => state.categories );  


    if(!isOpen) return null;
    if(!loading && allCategories && allCategories.length > 0){
        setTimeout(() => {
            onClose();
            actionType();
         }, 1500)
    }
    return(
        <div className={styles.container}>
            { loading ? <ConfirmLoader/> : allCategories && allCategories.length > 0 ? (
            <div className={styles.modal}>
                {children}
                <img src={checkIcon} alt="check-icon" />
                <h1 className={styles.tittle}>Categorias guardadas</h1>
            </div>
        ) : null }
    </div>
       
    )	
	
}