import moment from 'moment'
import { databaseRequest, databasePromise } from './database'

const createEvent = async (event) => {
  const { Title, Date, Description, Observation } = event
  const query = `
    INSERT INTO
      Events (
        Title,
        Date,
        Description,
        Observation)
      VALUES (
        '${Title}',
        '${moment(Date).format('YYYY-MM-DD HH:mm:ss')}',
        '${Description}',
        '${Observation}')`

  return databasePromise(query)
}

const getAllEvents = async () => {
  const query = `SELECT * FROM Events`
  return databasePromise(query)
}

const updateEvent = (event) => {
  const { Id, Title, Date, Description, Observation } = event
  const query = `
    UPDATE Events as e
      SET
        Title = '${Title}',
        Date = '${moment(Date).format('YYYY-MM-DD HH:mm:ss')}',
        Description = '${Description}',
        Observation = '${Observation}'
      WHERE e.Id = '${Id}'`
      
  return databasePromise(query)
}

const deleteEvent = async (id) => {
  const query = `
    DELETE FROM Events as e
    WHERE e.Id = ${id};`

  return databasePromise(query)
}

export { createEvent, getAllEvents, updateEvent, deleteEvent }
