const Debtor = require("../../src/model/debtor");
const { processContent } = require("../utils");

const createDebtor = (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const data = file.buffer.toString("utf-8"); 

  const register = processContent(data);

  Promise.all(register.map((register) => saveRegisterDb(register)))
    .then(() => {
      res
        .status(200)
        .json({ message: "Files processed and saved in the database." });
    })
    .catch((error) => {
      console.error("Error saving in the database:", error);
      res.status(500).json({ error: "Error saving in the database." });
    });
};

const saveRegisterDb = (register) => {
    return new Promise((resolve, reject) => {
      if (!register) {
        const error = new Error('Registro no válido. Verifica que los datos sean correctos.');
        console.error(error);
        reject(error);
        return;
      }
  
      // Crea una instancia del modelo Debtor con los datos del registro
      const newDebtor = new Debtor(register);
  
      // Guarda el documento en la base de datos
      newDebtor.save()
        .then(result => {
          console.log('Guardado en la base de datos:', result);
          resolve(result);
        })
        .catch(err => {
          console.error('Error al guardar en la base de datos:', err);
          reject(err);
        });
    });
  };
  

const getDebtor = (req, res) => {
  res.send("Building");
};

module.exports = { createDebtor, getDebtor };
