// Obtém o cliente
import mysql from "mysql2/promise";
// Cria a conexão com o Banco de Dados
const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "users",
});
let usuarioquatro = {
    nome: "Lucas",
    email: "lucas.silva@gmail.com",
    idade: 22,
    endereco: "Rua das Flores, 123",
    telefone: "1234-5678",
};
console.log(usuarioquatro);
let alunos = [
    {
        nome: "Pedro",
        idade: 12,
        curso: "Analise e Desenvolvimento de Sistemas",
        email: "pedrogabriel@gmail.com",
        nota: 9.0,
    },
    {
        nome: "João",
        idade: 23,
        curso: "Engenharia de Software",
        email: "joao.henrique@outlook.com",
        nota: 10,
    },
];
try {
    for (let i = 0; i < alunos.length; i++) {
        const [results, fields] = await connection.query("INSERT INTO usuarios (nome, idade, email) VALUES (?,?,?)", [alunos[i].nome, alunos[i].idade, alunos[i].email]);
        console.log(`Usuário ${alunos[i].nome} foi cadastrado com sucesso! \n ${results}`);
    }
}
catch (err) {
    console.log(err);
}
finally {
    connection.end();
}
