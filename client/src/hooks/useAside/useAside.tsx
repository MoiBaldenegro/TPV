import { useState } from "react";



export default function useAside () {
    const [ main, setMain ] = useState("ventas");
    const [ active, setActive ] = useState(true)
    const [ redLinePosition, setRedLinePosition] = useState(5);

    
    const handleBoard = (value:any, activeValue:any, positionLine  :any ) => {
        alert("me ejecute");
        setMain(value)
        setActive(activeValue)
        setRedLinePosition(positionLine)
        console.log(main);
    }; 
    return { handleBoard, main, active, redLinePosition}
}