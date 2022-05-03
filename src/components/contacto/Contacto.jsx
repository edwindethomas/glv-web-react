import './contacto.css';
const Contacto = () => {
    return(<section className='contacto'>
        <div className="container">
            <div className='info-footer__container'>
            <div className='dir'>
            <p>Dirección</p>
            <p>Insurgentes Norte No. 59 Edificio 1 Piso 7 Col. Buenavista, Deleg. Cuauhtémoc México D.F., C.P. 06359</p>
            </div>
            <div className='contact'>
            <p>Contactanos</p>
            <a href="mailto:rgarciac@pri.org.mx">Da click para mandarnos un correo!</a>
            <p> Tel. 01 (55) 57 29 96 00</p>
            </div>
            <div className='arch'>
                <p>Archivos</p>
                <div className='archivos__wrapper'>

                <a href={process.env.PUBLIC_URL+'/assets/pdf/ACTA DE ASAMBLEA ELECTORAL.pdf'} target='_blank' rel='noreferrer'>Descargar acta electoral</a>
                <a href={process.env.PUBLIC_URL+'/assets/pdf/LINEAMENTOS OPERATIVOS QUE DEBERAN SEGUIR LOS DELEGADOS.pdf'} target='_blank' rel='noreferrer'>Descargar lineamientos</a>
                <a href={process.env.PUBLIC_URL+'/assets/pdf/oficio_de_afiliados_informe_2013.pdf'} target='_blank' rel='noreferrer'>Descargar informe 2013</a>
                <a href={process.env.PUBLIC_URL+'/assets/pdf/oficio_de_afiliados_informe_2009.pdf'} target='_blank' rel='noreferrer'>Descargar informe 2009</a>
                <a href={process.env.PUBLIC_URL+'/assets/pdf/oficio_de_afiliados_informe_2008.pdf'} target='_blank' rel='noreferrer'>Descargar informe 2008</a>
                </div>
            </div>
            </div>
            <div className='footer__bajo'>
            <p>Todos los derechos reservados ©, 2022</p>
            <p>Desarrollado por Geckode Solutions</p>
            </div>
        </div>
    </section>);
}
export default Contacto;