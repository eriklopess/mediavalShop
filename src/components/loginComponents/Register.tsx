import './RegisterStyles.css'

export default function Register() {
return (
    <div>
        <h1>Bem vindo a sessão de cadastro!</h1>
        <br />
        <span>Digite abaixo os seus dados</span>
        <br />
        <input type="text" placeholder="E-mail"/>
        <br />
        <input type="text" placeholder="Nome"/>
        <br />
        <input type="text" placeholder="Username"/>
        <br />
        <input type="text" placeholder="Password"/>
        <br />
        <button>Registre-se</button>
    </div>
)
}
