import "./HeaderStyles.css";

function Header() {
return (
    <div>
        <div className="menu">
            <div className="top-menu">
                <div><img className="logo" src="../../../public/images/logo.png" alt="" /></div>
                <div className="pesquisa"><input className="search" type="text" /><img className="lupa" src="../../../public/images/lupa.png" alt="" /></div>
                <div className="log">Faça Login <br /> ou Cadastre-se</div>
                <div><img className="login" src="../../../public/images/user.png" alt="" /></div>
                <div><img className="cart" src="../../../public/images/cart.png" alt="" /></div>
            </div>
            <div className="filtro">
                <p>Espadas</p>
                <p>Armaduras</p>
                <p>Capacetes</p>
                <p>Grevas</p>
                <p>Adagas</p>
            </div>
        </div>
    </div>
)
}

export default Header