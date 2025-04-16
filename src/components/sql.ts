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

  for (let i: number = 0; i < results.length; i++) {
    console.log(results[i].nome); // Exibe o nome de cada usuário
  }
  //   console.log(results[0].nome);
  connection.end(); // Fecha a conexão com o banco de dados
} catch (err) {
  console.log(err);
}
