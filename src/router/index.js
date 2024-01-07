const express = require('express')
const router = express.Router();
const {createDebtor, getDebtor, deleteDebtor} = require('../../src/controller/debtorController')
const {getEntity} = require('../../src/controller/entityController')
const fileMiddleware = require('../middleware/fileMiddleware');


  router.get('/', (req, res) => {
    res.send("Hola, esta es la página de inicio");
  })
  
  router.post('/debtor', fileMiddleware, createDebtor);
  router.get('/debtor', getDebtor)
  router.delete('/debtor', deleteDebtor)
  
  router.get('/entity', getEntity)

module.exports = router