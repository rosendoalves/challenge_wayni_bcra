const Debtor = require("../../src/model/debtor");

const createDebtor = (req, res) => {
  const register = req.register; 

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
        if (!register || isNaN(register.code_identity) || isNaN(register.status)) {
          const error = new Error('Registro no válido. Verifica que los datos sean correctos.');
          console.error(error);
          reject(error);
          return;
        }
    
        const newDebtor = new Debtor(register);
    
        newDebtor.save()
          .then(result => {
            resolve(result);
          })
          .catch(err => {
            console.error('Error al guardar en la base de datos:', err);
            reject(err);
          });
      });
  };
  

const getDebtor = async (req, res) => {
    try {
        const debtors = await Debtor.find();
        res.status(200).json(debtors);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error retrieving debtors from the database." });
      }
};
const deleteDebtor = async (req, res) => {
    try {
        const debtors = await Debtor.deleteMany()
        res.status(200).json(debtors);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting debtors from the database." });
      }
};

module.exports = { createDebtor, getDebtor,deleteDebtor };
