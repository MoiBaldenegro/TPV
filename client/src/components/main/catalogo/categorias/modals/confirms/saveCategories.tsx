import styles from "./saveCategories.module.css";

interface Props{
	isOpen: any,
	onClose: any,
	children: any,
}


export default function SaveCategoriesModal({ isOpen, onClose, children } : Props){ 

   

    if(!isOpen) return null;
        <div className={styles.modal}>
            {children}
			<h1>Categorias guardadas</h1>
            <button onClick={onClose}></button>
		</div>
    
	
	
}