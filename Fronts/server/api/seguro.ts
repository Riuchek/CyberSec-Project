import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./dev.db');

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.login || !body.senha) {
    return { error: 'Login e senha são obrigatórios.' };
  }

  return new Promise((resolve, reject) => {
    const query = `
      SELECT * FROM User WHERE login = ? AND senha = ?;
    `;

    db.all(query, [body.login, body.senha], (err, rows) => {
      if (err) {
        reject({ error: 'Erro na consulta SQL.', details: err.message });
      } else if (rows.length > 0) {
        resolve({ message: 'Login bem-sucedido!', data: rows });
      } else {
        resolve({ message: 'Usuário ou senha incorretos.' });
      }
    });
  });
});
