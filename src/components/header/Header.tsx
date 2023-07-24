import "./HeaderStyles.css";
import { Link } from "react-router-dom";

function Header() {
return (
    <div>
        <div className="menu">
            <div className="top-menu">
                <div><Link to={'/'}><img className="logo" src="../../../public/images/logo.png" alt="" /></Link></div>
                <div className="pesquisa"><input className="search" type="text" /><img className="lupa" src="../../../public/images/lupa.png" alt="" /></div>
                <div className="log"><Link to={"/Login"} className="loginSpan">Faça Login <br /> ou Cadastre-se</Link></div>
                <div><img className="login" src="../../../public/images/user.png" alt="" /></div>
                <div><img className="cart" src="../../../public/images/cart.png" alt="" /></div>
            </div>
            <div className="filtro">
                <p><Link to={'/Shop/Swords'}>Espadas</Link></p>
                <p><Link to={'/Shop/Armors'}>Armaduras</Link></p>
                <p><Link to={'/Shop/Helmets'}>Capacetes</Link></p>
                <p><Link to={'/Shop/Greaves'}>Grevas</Link></p>
                <p><Link to={'/Shop/Daggers'}>Adagas</Link></p>
            </div>
        </div>
    </div>
)
}

export default Header