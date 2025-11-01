import React from "react";
import "./login.css";
import { logarUsuario } from "../infra/usuarios";

export default function Tela1() {

    async function handleClick(event) {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        let usuario = await logarUsuario(email, senha);
        console.log(usuario);
        if(usuario.id) {
            alert(`Login efetuado com sucesso id: ${usuario.id}`);
        } else {
            alert(usuario.erro);
        }
    }

    return (
        <div className="container">
            <h3>Login</h3>
            <form>
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email" /><br />
                <label htmlFor="senha">Senha</label><br />
                <input type="password" id="senha" /><br />    
                <br />            
                <input type="button" value="Login" onClick={handleClick} />
            </form>
        </div>
    );
}