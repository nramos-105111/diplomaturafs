import { Link } from "react-router-dom";

const Nav = (props)=>{
    return(
    <nav>
        <div>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/Shop">SHOP</Link></li>
            <li><Link to="/Colecciones">COLECCIONES</Link></li>
            <li><Link to="/Somos">QUIENES SOMOS</Link></li>
            <li><Link to="/Contacto">CONTACTO</Link></li>
        </ul>
        
        </div>
    </nav>
    );
}

export default Nav;