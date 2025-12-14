import { useState } from "react";
import { logarSistema } from "./usuarios";

export default function Login() {
  const [usuario, setUsuario] = useState({ id: "", email: "", senha: "" });

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setUsuario(objetoAtual => {
        return {...objetoAtual, [fieldName]: fieldValue};
    });
  }

  async function handleLogin(event) {
    event.preventDefault();
    let tempUsuario = await logarSistema(usuario.email, usuario.senha);
    setUsuario(tempUsuario);
    if(tempUsuario.id) {
        alert("Login Efetuado com Sucesso");
    } else {
        alert("Erro: " + tempUsuario.errorCode + " - " + tempUsuario.errorMessage);
    }
  }

  return (
    <div className="login">
      <h3>Acesso ao Sistema</h3>
      <form>
        <table border={0} width={"100%"}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={usuario.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="senha">Senha:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="senha"
                  value={usuario.senha}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <input type="submit" value="Entrar" onClick={handleLogin} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
