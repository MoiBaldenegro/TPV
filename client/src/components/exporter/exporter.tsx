import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';

const Exporter = () => {
  const { allDishes } = useSelector((state) => state.dishes);

  const exportToExcel = () => {
    console.log(allDishes);
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(allDishes);
    /* const worksheet = XLSX.utils.json_to_sheet(allDishes);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

    // Crea un Blob con el contenido del libro de trabajo
    const blob = XLSX.write(workbook, {
      bookType: 'xlsx',
      mimeType:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      type: 'blob',
    });

    // Crea un enlace temporal y simula un clic para descargar el archivo
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
   */
  };

  return <button onClick={exportToExcel}>Exportar a Excel</button>;
};

export default Exporter;
