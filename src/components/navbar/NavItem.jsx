const NavItem = ({info,refs,setPagina,pagina}) => {
    return(
        <li onClick={()=>setPagina(pagina)}>
            <p>{info}</p>
        </li>
    )
}
export default NavItem;