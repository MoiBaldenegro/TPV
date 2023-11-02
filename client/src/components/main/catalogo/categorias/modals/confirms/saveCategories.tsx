import { useSelector } from "react-redux";
import styles from "./saveCategories.module.css";
import Loader from "../../../../../loaders/loader";

interface Props{
	isOpen: any,
	onClose: any,
	children: any,
}


export default function SaveCategoriesModal({ isOpen, onClose, children } : Props){
    const { loading } = useSelector( state => state.categories );
    const { allCategories } = useSelector( state => state.categories );  

   

    if(!isOpen) return null;
    loading ? <Loader/> : allCategories && allCategories.length > 0 ? (
        <div className={styles.modal}>
			<h1>Categorias guardadas</h1>
            <button onClick={onClose}></button>
		</div>
    ) : null;
	
	
}