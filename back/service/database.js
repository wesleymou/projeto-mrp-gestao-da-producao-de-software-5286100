import sqlite3 from 'sqlite3';
import { debug } from '../app.js';

const databasePromise = (query) => {
  console.log(query)
  return new Promise((result, reject) => {
    const sqlite = sqlite3.verbose();

    const db = new sqlite.Database('../database.db');

    db.all(query, (err, rows) => {
      if (err) reject(err);
      else result(rows);

      db.close();
    });
  });
};

export { databasePromise };