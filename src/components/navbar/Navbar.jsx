import NavItem from "./NavItem";
import datanav from '../../data/datanav';
import './navbar.css';

const Navbar = ({isShow,setPagina}) => {
    return (
        <nav className="container navigator">
            { isShow &&
            <ul className="navbar__container">
            {datanav.map(({info,refs,id,pagina})=><NavItem  info={info} refs={refs} key={id} setPagina={setPagina} pagina={pagina}/>)}
            </ul>
            }
        </nav>
    );
}
export default Navbar;