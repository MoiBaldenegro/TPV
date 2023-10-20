import { useState } from "react";



export default function useAside () {
    // para el boton externo
    const toggle = main === "ventas" ? "hidden" : "ventas";
    
    const openMenu = () => {
        setMain(value)
        setActive(activeValue)
        setRedLinePosition(positionLine)
    }
    //para los elementos internos
    const [ main, setMain ] = useState("");
    const [ active, setActive ] = useState(true)
    const [ redLinePosition, setRedLinePosition] = useState(5);

    
    const handleBoard = (value:any, activeValue:any, positionLine :any ) => {
        setMain(value)
        setActive(activeValue)
        setRedLinePosition(positionLine)
    }; 
    return [handleBoard, main, active, redLinePosition]
}