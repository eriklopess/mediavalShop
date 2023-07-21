import "./HeaderStyles.css";

function Header() {
return (
    <div>
        <div className="menu">
            <div className="top-menu">
                <div><img className="logo" src="../../../public/images/logo.png" alt="" /></div>
                <div><input className="search" type="text" /></div>
                <div><img className="login" src="../../../public/images/usericon.png" alt="" /></div>
                <div><img className="cart" src="../../../public/images/cart.png" alt="" /></div>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Espadas</td>
                        <td>Armaduras</td>
                        <td>Capacetes</td>
                        <td>Grevas</td>
                        <td>Adagas</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
)
}

export default Header