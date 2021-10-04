import express from 'express'
import bodyParser from 'body-parser'
import eventRoute from './routes/event'

const app = express()
const port = 3001

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Api para a agenda.')
})

app.use('/event', eventRoute)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
