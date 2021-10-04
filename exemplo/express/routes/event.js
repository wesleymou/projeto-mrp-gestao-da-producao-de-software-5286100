import express from 'express'
import validatorjs from 'validatorjs'
import * as eventService from '../service/event'
import { responseObject } from '../helpers/request'

const router = express.Router()

router.post('/', (req, res) => {
  const { body } = req
  const rules = {
    Title: 'required|string',
    Date: 'required|date',
    Description: 'required|string',
  }

  const validation = new validatorjs(body, rules)
  if (validation.fails())
    throw { message: 'Validation failed', data: validation.errors }

  eventService
    .createEvent(body)
    .then((result) =>
      setTimeout(() => res.send(responseObject(true, result)), 1500)
    )
    .catch((err) => res.send(responseObject(false, err)))
})

router.get('/', (req, res) => {
  eventService
    .getAllEvents()
    .then((result) =>
      setTimeout(() => res.send(responseObject(true, result)), 1500)
    )
    .catch((err) => res.send(responseObject(false, err)))
})

router.put('/', (req, res) => {
  const { body } = req
  const rules = {
    Id: 'required:number',
    Title: 'required|string',
    Date: 'required|date',
    Description: 'required|string',
  }

  const validation = new validatorjs(body, rules)
  if (validation.fails())
    throw { message: 'Validation failed', data: validation.errors }

  eventService
    .updateEvent(body)
    .then((result) =>
      setTimeout(() => res.send(responseObject(true, result)), 1500)
    )
    .catch((err) => res.send(responseObject(false, err)))
})

router.delete('/:id', (req, res) => {
  const { params } = req
  const { id } = params

  const rules = {
    id: 'required|numeric',
  }

  const validation = new validatorjs(params, rules)
  if (validation.fails())
    res.send({ message: 'Validation failed', data: validation.errors })

  eventService
    .deleteEvent(id)
    .then((result) => res.send(responseObject(true, result)), 1500)
    .catch((err) => res.send(responseObject(false, err)))
})

export default router
