import styles from "./uploadCategories.module.css"
//hooks
import { useDropzone } from "react-dropzone";
import { useState } from "react"; 
//dependecies
import axios from "axios";

interface Props{
    isOpen: any,
    onClose: any,
    children: any
}


export default function UploadFiles({ isOpen, onClose, children } : Props){
    const onDrop = (acceptedFiles : any) => {
        setFiles(acceptedFiles[0])
    }
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const [ files, setFiles ] = useState(null);

    // funcion para cargar archivos
    const HandleUpload = async () => {
        const data = new FormData();
        data.append("file", files);

        if (!files) {
            alert('Por favor, selecciona un archivo.');
            return;
        }

        try {
            await axios.post('http://localhost:3001/upload', data, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            alert('Archivo subido con éxito.');
            setFiles(null);
          } catch (error) {
            console.error('Error al subir el archivo:', error);
          }

    }

    const onReset = () => {
        setFiles(null)
    }
  

    if (!isOpen) return null;
    return(
        <div className={styles.modal}>
            <div className={styles.modalContent}>
            <button className={styles.resetButton}>X</button>
            {children}
            <span className={styles.tittle} >Cargar archivo</span>
           <div className={styles.dropZone} {...getRootProps()}>
                <input {...getInputProps()} />
                {files ? (
                <p>Archivo seleccionado: {files.name}</p>
                ) : (
                    <div>
                        <p>Arrastra y suelta un archivo aquí o haz clic para seleccionarlo.</p>
                        <button className={styles.Resetbutton} onClick={onReset}>X</button>
                    </div>
                )}
            </div>
            <button disabled={!files} className={styles.importButton} onClick={HandleUpload}>Importar</button>
            </div>
        </div>
    )
} 