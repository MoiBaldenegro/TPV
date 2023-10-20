import { useState } from "react";



export default function useAside () {
    const [ main, setMain ] = useState("");
    const [ active, setActive ] = useState(true)
    const [ redLinePosition, setRedLinePosition] = useState(5);

    
    const handleBoard = (value, activeValue, positionLine ) => {
        alert("me ejecute");
        setMain(value)
        setActive(activeValue)
        setRedLinePosition(positionLine)
        console.log(main);
    }; 
    return { handleBoard, main, active, redLinePosition}
}