import { useState } from "react";
import dataDirectory from "../../data/dataDirectory";
import dataEstados from "../../data/dataEstados";
import Modal from "../modal/Modal";
import './ejecutivos.css';

const Ejecutivos = () => {
    const [show,setShow] = useState(false);
    const [sem,setSem] = useState('');  

    return(<>
    <section className="ejecutivos">
        <div className="container">
            <Modal show={show} handleClose={()=>setShow(!show)} childen={sem}/>
            <img src={process.env.PUBLIC_URL+'/assets/images/logo-header.jpeg'} alt='logo'/>
            <h2 className="text-center">Directorio</h2>
            <p>Comité Ejecutivo Nacional de la Asociación Nacional Revolucionaria General Leandro Valle</p>
            <div className="directorio">
                {dataDirectory.map(({puesto,ima,nombre,semblanza})=>(<div className="card__container" key={`ejecutivos_${nombre}`}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${ima}`} alt={nombre}/>
                    <p><strong>{puesto}</strong></p>
                    <p>{nombre}</p>
                    <button onClick={()=>{
                        setShow(true)
                        setSem(semblanza)
                        }}>Semblanza</button>
                </div>))}
            </div>
            <h2 className="text-center">Estados</h2>
            <p>Estados de la República donde la Asociación Nacional Revolucionaria "General Leandro Valle" tiene representación política con sus respectivos Comités.</p>
            <div className="directorio">
                {dataEstados.map(({estado,nombre,semblanza,ima})=>(<div className="card__container" key={`estado_${nombre}`}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${ima}`} alt={nombre}/>
                    <p><strong>{estado}</strong></p>
                    <p>{nombre}</p>
                    <button onClick={()=>{
                        setShow(true)
                        setSem(semblanza)
                        }}>Semblanza</button>
                </div>))}
            </div>
        </div>
    </section></>);
}

export default Ejecutivos;