import useInput from "./hooks/useInput";

function LoginPage() {
    const [email, handleEmail] = useInput()
    const [password, handlePassword] = useInput()
    return (
        <div>
            <input value={email} onChange={handleEmail} placeholder={"E-mail"} />
            <input value={password} onChange={handlePassword} placeholder={"Senha"} />
          
            <button onClick={login}>Entrar</button>
        </div>
    );
}

export default LoginPage;
