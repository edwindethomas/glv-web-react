import './dirigente.css';

const Dirigente = () => {
    return (
        <section className='dirigente'>
            <div className="container">
            <h2 className='text-center'>Dirigente de la Asociación.</h2>
            <div className="dirigente__info">
                <div className="dir__img-text">
                    <img src={process.env.PUBLIC_URL+'/assets/images/reverianogarcia.jpg'} alt='Dirigente'/>
                    <p><strong>C. Coronel y Licenciado Reveriano García Castrejón</strong></p>
                </div>
                <div className="dir__text">
                    <p>Nació en la ciudad de Ayutla de los Libres, Edo. de Guerrero, sus primeros estudios, los realizo en su ciudad natal, la secundaria la realizó en la Universidad Autónoma del Estado de Guerrero; la preparatoria, en la escuela de Agua Caliente, de Tijuana, Baja California; la facultad de derecho en la Universidad Nacional Autónoma de México (UNAM.)</p>
                    <p>Después de la escuela secundaria, realizó sus estudios en el H. Colegio Militar, egresando del mismo como Sub.- Teniente de Infantería; ascendió en los grados correspondientes, hasta obtener el grado de Coronel del Servicio de Justicia Militar y Licenciado en Derecho</p>
                    <p>Como militar estuvo destacado en las plazas de: Tijuana, Baja California; Mazatlán, estado de Sinaloa; La Paz , Baja California Sur y en México, D.F. en donde se retiró del activo, como Coronel del Servicio de Justicia Militar. Como Capitán de Infantería, fue ayudante del C. Secretario de la Defensa Nacional , General Agustín Olachea Avilés.</p>
                    <p>Como Capitán de Infantería, fue ayudante del C. Secretario de la Defensa Nacional , General Agustín Olachea Avilés.</p>
                    <p>Como académico, presto sus servicios como maestro en las siguientes instituciones:</p>
                    <ul>
                        <li>El h. Colegio Militar.</li>
                        <li>En la Escuela Superior de Guerra.</li>
                        <li>En la Escuela Naval de Mazatlán, Sinaloa.</li>
                        <li>En la Universidad Nacional Autónoma de México (UNAM).</li>
                        <li>En Instituto Politécnico Nacional (IPN).</li>
                    </ul>
                    <p>Fue Director del Auto Transporte Federal en el estado de Guerrero; Subdirector de la Forestal Vicente Guerrero; Director Jurídico de la Policía del D.F.; Subsecretario de la Secretaria de Organización en la Confederación Nacional Campesina; Diputado Federal en la Quincuagésima Legislatura   (“L”) del Congreso de la Unión.</p>
                    <p>Ha ocupado diferentes cargos en la Asociación Nacional Revolucionaria “General Leandro Valle”, y a la muerte del General Álvaro Vallarta Ceceña, y renuncia del Almirante Eduardo Luna Roma, por disposición estatutaria pasa a ser: Presidente de la Asociación Nacional “General Leandro Valle”; asociación esta que gracias al trabajo realizado, actualmente ocupa el “cuarto lugar” entre las 60 asociaciones adheridas al Partido Revolucionario Institucional.</p>
                    <p>Actualmente es Consejero Político Nacional e integrante de la Comisión Política Permanente del Partido Revolucionario Institucional. También ha sido precandidato a Senador de la República.</p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Dirigente;