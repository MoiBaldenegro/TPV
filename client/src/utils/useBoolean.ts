import { useState } from "react";


export function useBoolean(){
  
const [ lenguajeSelect, setLenguajeSelect ] = useState(false);


    const toggleLenguaje = () => {
        setLenguajeSelect(!lenguajeSelect)
    }

    return { lenguajeSelect, toggleLenguaje}

}
