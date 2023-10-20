import { useState } from "react";



export default function useAside () {
    const [ main, setMain ] = useState("");
    const [ active, setActive ] = useState(true)
    const [ redLinePosition, setRedLinePosition] = useState(5);

    
    const handleBoard = (value, activeValue, positionLine ) => {
        setMain(value)
        setActive(activeValue)
        setRedLinePosition(positionLine)
    }; 
    return { handleBoard, main, active, redLinePosition}
}