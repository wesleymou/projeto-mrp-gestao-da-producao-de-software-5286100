import sqlite3 from 'sqlite3';
import { debug } from '../app.js';
import * as fs from 'fs';

const databasePromise = (query) => {
  return new Promise((result, reject) => {
    const sqlite = sqlite3.verbose();

    const db = new sqlite.Database('../database.db', (error) => error && debug(error));

    db.all(query, (err, rows) => {
      if (err) reject(err);
      else result(rows);

      db.close((error) => error && debug(error));
    });
  });
};

export const databaseFilePromise = (filename) => {
  return new Promise((result, reject) => {
    // Read the SQL file
    const dataSql = fs.readFileSync(filename).toString();

    // Setup the database connection
    const sqlite = sqlite3.verbose();
    const db = new sqlite.Database('../database.db', (error) => error && debug(error));

    // Convert the SQL string to array so that you can run them one at a time.
    // You can split the strings using the query delimiter i.e. `;` in // my case I used `);` because some data in the queries had `;`.
    const dataArr = dataSql.toString().split(';');
    // db.serialize ensures that your queries are one after the other depending on which one came first in your `dataArr`
    db.serialize(() => {
      // db.run runs your SQL query against the DB
      db.run('PRAGMA foreign_keys=OFF;');
      db.run('BEGIN TRANSACTION;');
      // Loop through the `dataArr` and db.run each query
      dataArr.forEach((query) => {
        if (query) {
          // Add the delimiter back to each query before you run them
          // In my case the it was `);`
          query += ';';
          db.run(query, (err) => {
            if (err) reject(err);
          });
        }
      });
      db.run('COMMIT;');
    });
    // Close the DB connection
    db.close((error) => error && debug(error));

    result(true);
  });
};

export { databasePromise };
