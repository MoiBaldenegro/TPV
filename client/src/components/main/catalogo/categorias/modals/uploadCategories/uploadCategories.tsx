import styles from "./uploadCategories.module.css"
//hooks
import { useDropzone } from "react-dropzone";
import { useState } from "react"; 
//dependecies
//icons
import importIcon from "../../../../../../assets/public/importIcon.svg"
import iconExcel from "../../../../../../assets/public/iconExcel.svg";
import closeIcon from "../../../../../../assets/public/closeIcon.svg"
import { createCategory } from "../../../../../../redux/actions/catalogo/categoriesActions";
import useUpload from "../../../../../../hooks/useUpload";

interface Props{
    isOpen: any,
    onClose: any,
    children: any
}


export default function UploadFiles({ isOpen, onClose, children } : Props){

    const { handleUpload, resetFiles } = useUpload(createCategory);
    const onDrop = (acceptedFiles : any) => {
        setFiles(acceptedFiles[0])
    }
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const [ files, setFiles ] = useState(null);

    if (!isOpen) return null;
    return(
        <div className={styles.modal} >
            <div className={styles.modalContent}>
            <img src={closeIcon} className={styles.closeButton} onClick={onClose}/>
            {children}
            <span className={styles.tittle} >Cargar archivo</span>
           <div className={styles.dropZone} {...getRootProps()}>
                <input {...getInputProps()} />
                {files ? (
                    <div className={styles.inDropZoneCharge}>
                        <strong>Archivo seleccionado:</strong>
                        <img src={iconExcel} alt="excel-icon" />
                        <span>{files.name}</span>
                        <button className={styles.resetButton} onClick={resetFiles}>Seleccionar otro archivo</button>
                    </div>
                ) : (
                    <div className={styles.inDropZone}>
                        <p>Arrastra y suelta un archivo aquí o haz clic para seleccionarlo.</p>
                        <img src={importIcon} alt="import-icon" />
                    </div>
                )}
            </div>
            <button disabled={!files} className={styles.importButton} onClick={handleUpload}> <img src={importIcon} alt="" />Importar</button>
            </div>
        </div>
    )

} 