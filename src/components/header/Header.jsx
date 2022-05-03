import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import NavIcon from '../navicon/NavIcon';
import Title from '../title/Title';
import './header.css';

const Header = ({setPagina}) => {
    const [isShow,setIsShow] = useState(false);
    return(<header className="header__container">
        <div className="container content__container">
        <Title/>
        <NavIcon setIsShow={setIsShow} isShow={isShow}/>
        </div>
        <Navbar isShow={isShow} setPagina={setPagina}/>
    </header>);
}

export default Header;