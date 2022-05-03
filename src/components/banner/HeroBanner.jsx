
import './herobanner.css';
const HeroBanner = () => {
    return(<section className='hero-banner'>
        <video controls src={process.env.PUBLIC_URL+'assets/videos/dia_ninho.mp4'}/>
        {/* <img src={process.env.PUBLIC_URL+'/assets/images/logo-header.jpeg'} alt='logo'/> */}
        <div>
            <h2>ASOCIACIÓN NACIONAL REVOLUCIONARIA</h2>
            <h2>GRAL. LEANDRO VALLE</h2>
            <h3>"POR LA GRANDEZA Y EL HONOR DE MÉXICO"</h3>
        </div>
    </section>);
}

export default HeroBanner;