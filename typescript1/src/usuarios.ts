export const usuarios: UsuarioType[] = [
    {
        id: 21,
        nome: "Paulo H",
        ativo: true,
        saldo: 12345242135n,
    },
    {
        id: 33,
        nome: "João P",
        ativo: false,
        saldo: 234643242135n,
    }
];

export type UsuarioType = {
    id: number,
    nome: string,
    ativo: boolean,
    saldo: bigint,
}