import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

const databaseRequest = async (query) => {
  return new Promise((result, reject) => {
    pool.getConnection((err, connection) => {
      err
        ? reject(err)
        : connection.query(query, (err, data) => {
            connection.release()
            err ? reject(err) : result(data)
          })
    })
  })
}

const databasePromise = (query) => {
  return new Promise((result, reject) => {
    databaseRequest(query)
      .then((res) => result(res))
      .catch((err) => reject(err))
  })
}

export { databaseRequest, databasePromise }