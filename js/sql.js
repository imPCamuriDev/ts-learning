// Obtém o cliente
import mysql from "mysql2/promise";
// Cria a conexão com o Banco de Dados
const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "users",
});
try {
    const [results, fields] = await connection.query("SELECT * FROM usuarios");
    const json = JSON.stringify(results, null, 2);
    function writeNames(namesList) {
        for (let i = 0; i < namesList.length; i++) {
            console.log(namesList[i].nome, "tem", namesList[i].idade, "anos e seu email de contato é:", namesList[i].email); // Exibe o nome de cada usuário
        }
    }
    writeNames(results); // Chama a função para exibir os nomes
    connection.end(); // Fecha a conexão com o banco de dados
}
catch (err) {
    console.log(err);
}
