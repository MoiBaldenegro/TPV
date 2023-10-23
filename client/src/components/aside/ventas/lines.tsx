import styles from "./lines.module.css"
//dependencies
// icons 
import line from "../../../assets/dashboard/line.png";
import redLine from "../../../assets/dashboard/redLine.png";
import useAside from "../../../hooks/useAside/useAside";



export default function LinesVentasModule (){
    const { redLinePosition } : any = useAside();
    return(
        <div>
             <div className={styles.linesContainer}>
                            <img src={line}  className={styles.line} alt="line" />
                            <img src={redLine} className={styles.redLine}
                            style={
                                redLinePosition === 1
                                ? { marginTop: '5px' }
                                : redLinePosition === 2
                                ? { marginTop: '55px' }
                                : redLinePosition === 3
                                ? { marginTop: '105px' }
                                : redLinePosition === 4
                                ? { marginTop: '155px' }
                                : { marginTop: '210px'}}
                            alt="red-line"
                            />
                        </div>
        </div>
    )
}