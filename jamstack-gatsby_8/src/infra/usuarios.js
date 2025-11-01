import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../infra/firebase";

export async function logarUsuario(email, senha) {
    console.log(`email: ${email} - senha: ${senha}`);
    //-----------------------------------------------
    let retorno = new Object();
    await signInWithEmailAndPassword(auth, email, senha)
    .then(credenciais => {
        console.log(credenciais);
        retorno.id = credenciais.user.uid;
        retorno.email = email;
        retorno.senha = senha;
    })
    .catch(error => {
        console.log(`${error.code} - ${error.message}`);
        retorno.erro = "Login Inválido";
    });
    //-----------------------------------------------
    return retorno;
}
