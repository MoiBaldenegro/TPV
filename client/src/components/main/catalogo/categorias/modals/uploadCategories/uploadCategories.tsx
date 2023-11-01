import styles from "./uploadCategories.module.css"

//hooks
import { useDropzone } from "react-dropzone";
import { useState } from "react"; 
import { useDispatch } from "react-redux";
//dependecies
import { read, utils } from 'xlsx';
//icons
import importIcon from "../../../../../../assets/public/importIcon.svg"
import iconExcel from "../../../../../../assets/public/iconExcel.svg";
import closeIcon from "../../../../../../assets/public/closeIcon.svg"

import { createCategory } from "../../../../../../redux/actions/catalogo/categoriesActions";

interface Props{
    isOpen: any,
    onClose: any,
    children: any
}


export default function UploadFiles({ isOpen, onClose, children } : Props){
    const dispatch = useDispatch();
    const onDrop = (acceptedFiles : any) => {
        setFiles(acceptedFiles[0])
    }
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const [ files, setFiles ] = useState(null);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const HandleUpload = () => {
        if (!files) {
          alert('Por favor, selecciona un archivo.');
          return;
        }
        const data = new FormData();
        data.append("file", files);
      
        // Leemos el archivo
        const reader = new FileReader();
      
        reader.onload = (event) => {
          const data = event.target.result;
          const workbook = read(data, { type: "array" });
      
          // Procesar las hojas del archivo Excel
          workbook.SheetNames.forEach((sheetName) => {
            const sheet = workbook.Sheets[sheetName];
            const sheetData = utils.sheet_to_json(sheet);
            console.log(`Contenido de la hoja "${sheetName}":`, sheetData);
            alert(sheetName)
            console.log(sheetData)
      
            dispatch(createCategory(sheetData));
            setFiles(null);
            onClose();
          });
        }; 
      };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const onReset = () => {
        setFiles(null)
    }
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
                        <button className={styles.resetButton} onClick={onReset}>Seleccionar otro archivo</button>
                    </div>
                ) : (
                    <div className={styles.inDropZone}>
                        <p>Arrastra y suelta un archivo aquí o haz clic para seleccionarlo.</p>
                        <img src={importIcon} alt="import-icon" />
                    </div>
                )}
            </div>
            <button disabled={!files} className={styles.importButton} onClick={HandleUpload}> <img src={importIcon} alt="" />Importar</button>
            </div>
        </div>
    )

    // relevbantando
} 