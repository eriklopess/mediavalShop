import { Link } from "react-router-dom"
import './LoginStyles.css'

function Login() {
return (
    <div>
        <input type="text" placeholder="Username"/>
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <button>Login</button>
        <p>Não possui uma conta ? <Link to='/Login/Register'>Cadastre-se!</Link></p>
    </div>
)
}

export default Login