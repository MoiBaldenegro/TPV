import { useState } from "react";


export function useModals(){
  
const [ lenguajeSelect, setLenguajeSelect ] = useState(false);


    const toggleLenguaje = () => {
        setLenguajeSelect(!lenguajeSelect)
    }

    return { lenguajeSelect, toggleLenguaje}

}
