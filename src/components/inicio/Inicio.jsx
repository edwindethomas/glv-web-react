import HeroBanner from "../banner/HeroBanner";
import Facebook from "../fb/Facebook";
import Poema from "../poema/Poema";
import Structure from "../structure/Structure";
import Tweet from "../tweet/Tweet";
import './inicio.css';

const Inicio = () => {
    return ( <>
    <HeroBanner />
    <Structure />
    <div className="social-media__container">
    <section className="container">
        <h2>Nuestras redes sociales</h2>
        <div className="social-media__wrapper">
    <Tweet />
    <Facebook />
        </div>
    </section>
    </div>
    <Poema />
    </> );
}
 
export default Inicio;