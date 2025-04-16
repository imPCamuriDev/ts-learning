"use strict";
const mysql = require("mysql2");
try {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "users",
    });
    function executarQuery(query) {
        connection.query(query, function (err, results, fields) {
            if (err) {
                console.error("Erro ao executar a query: ", err);
                return;
            }
            console.log("Resultados da query: ", results);
        });
    }
    const resultado = executarQuery("SELECT * FROM usuarios");
    console.log("Conexão realizada com sucesso! Aqui os resultados: " + resultado);
    connection.end();
}
catch (error) {
    console.log("Erro ao conectar ao banco de dados: ", error);
}
