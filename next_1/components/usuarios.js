import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function logarSistema(email, senha) {
  let user;
  await signInWithEmailAndPassword(auth, email, senha)
    .then((credentials) => {
      user = {
        id: credentials.user.uid,
        email: credentials.user.email,
        senha: senha,
      };
    })
    .catch(
      (error) => (user = { errorCode: error.code, errorMessage: error.message })
    );
    return user;
}
