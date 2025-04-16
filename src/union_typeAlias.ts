type Id = number | string; // Union Type

let id: number | string = 1; // id pode ser um número ou uma string ( Union Type )
let id1: Id; // id1 é do tipo Id, que pode ser um número ou uma string ( Union Type )

type Usuario = {
  nome: string;
  idade: number;
  email: string;
};
let uzuariu: Usuario = {
  nome: "Lucas",
  idade: 20,
  email: "lucas.silva@gmail.com",
};

console.log(uzuariu.nome);
