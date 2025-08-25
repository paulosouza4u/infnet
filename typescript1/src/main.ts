import { usuarios } from './usuarios';

const usuarioDB = retornaUsuarios()
console.log(usuarioDB);

const usuarioID = retornaUsuariosPorId(21);
console.log(usuarioID);

// Hoisting
function retornaUsuarios() {
    return usuarios;
}
function retornaUsuariosPorId(id: number) {
    return usuarios.find(usuario => usuario.id === id);
}