import { useState, useCallback } from 'react';
import { read, utils } from 'xlsx';
import { useDispatch } from 'react-redux';

const useUpload = (actionCallback) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState(null);

  const handleUpload = useCallback(async (file) => {
    if (!file) {
      alert('Por favor, selecciona un archivo.');
      return;
    }
    if (!(file instanceof Blob) || !file.name.endsWith('.xlsx')) {
        alert('Por favor, selecciona un archivo de Excel válido (extensión .xlsx).');
        return;
      }
    const data = new FormData();
    data.append('file', file);

    // Leemos el archivo 
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = read(data, { type: 'array' });

      // Procesamos las hojas del archivo 
      workbook.SheetNames.forEach((sheetName) => {
        const sheet = workbook.Sheets[sheetName];
        const sheetData = utils.sheet_to_json(sheet);
        alert("Debuguenado")
        dispatch(actionCallback(sheetData)); 
        setFiles(null);
      });
    };
    reader.readAsArrayBuffer(file);
  }, [dispatch, actionCallback]);

  const onDrop = (acceptedFiles : any) => {
    setFiles(acceptedFiles[0])
}

  const resetFiles = () => {
    setFiles(null);
  };

  return {
    onDrop,
    files,
    handleUpload,
    resetFiles,
  };
};

export default useUpload;
