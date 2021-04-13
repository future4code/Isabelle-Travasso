import React from 'react'
import useInput from "../hooks/useInputs";

function LoginPage() {
    const [email, handleEmail] = useInput()
    const [password, handlePassword] = useInput()
    return (
        <div>
            <input value={email} onChange={handleEmail} placeholder={"E-mail"} />
            <input value={password} onChange={handlePassword} placeholder={"Senha"} />
          
            <button >Entrar</button>
        </div>
    );
}

export default LoginPage;
