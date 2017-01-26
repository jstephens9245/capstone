'use strict';

const Router = require('express').Router;
const {Note, User, Board} = require('ROOT/server/models');
const router = module.exports = new Router();

router.get('/', (req, res, next) => {
  const noteQuery = {include: []};

  if (req.query && req.query.userId) {
    noteQuery.include.push({
      model: User,
      where: {id: req.query.userId}
    });
  }
  if (req.query && req.query.boardId) {
    noteQuery.include.push({
      model: Board,
      where: {id: req.query.boardId}
    });
  }
  if (req.query && req.query.limit) {
    noteQuery.limit = req.query.limit;
  }

  Note.findAll(noteQuery)
    .then(notes => res.send(notes))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Note.findById(req.params.id)
    .then(user => res.send(user))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Note.create({
    first_name: req.body.first_name,
    last_name : req.body.last_name,
    email     : req.body.email,
    password  : req.body.password
  })
    .then(user => res.send(user))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Note.update({where: {id: req.params.id}})
    .then(user => res.sendStatus(200))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Note.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(next);
});

router.use((req, res, next, err) => {
  console.log('Error in server/routes/api/note.js');
  next(err);
});
