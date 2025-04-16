// Obtém o cliente
import mysql from "mysql2/promise";

// Cria a conexão com o Banco de Dados
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "users",
});

// Consulta simples
try {
  // Results retorna o resultado da querie e field os campos e tipos de dados
  const [results, fields]: Array<any> = await connection.query(
    "SELECT * FROM usuarios"
  );

  const json = JSON.stringify(results, null, 2);

  // for (let i: number = 0; i < results.length; i++) {
  //   console.log(results[i].nome); // Exibe o nome de cada usuário
  // }

  function writeNames(namesList: Array<any>) {
    for (let i: number = 0; i < namesList.length; i++) {
      console.log(
        namesList[i].nome,
        "tem",
        namesList[i].idade,
        "anos e seu email de contato é:",
        namesList[i].email
      ); // Exibe o nome de cada usuário
    }
  }

  writeNames(results); // Chama a função para exibir os nomes

  connection.end(); // Fecha a conexão com o banco de dados
} catch (err) {
  console.log(err);
}
