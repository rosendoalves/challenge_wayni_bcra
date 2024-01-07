const express = require('express')
const router = express.Router();
const {createDebtor, getDebtor} = require('../../src/controller/debtorController')
const multer = require('multer')
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });


  router.get('/', (req, res) => {
    res.send("Hola, esta es la página de inicio");
  })
  
  router.post('/debtor', upload.single('file'), createDebtor)
  router.get('/debtor', getDebtor)

module.exports = router