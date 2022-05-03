const NavIcon = ({setIsShow,isShow}) => {
    return( 
    <span className="menu__icon" onClick={()=>setIsShow(!isShow)}>
        <i className="fas fa-bars"></i>
    </span>
);
}
export default NavIcon;