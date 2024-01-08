const Debtor = require("../model/debtor");
const Entity = require("../model/entity");

const getEntity = async (req, res) => {
  try {
    const entities = await Entity.find();
    
    if (!entities || entities.length === 0) {
      return res.status(404).send('No se encontraron entidades');
    }

    for (const entity of entities) {
      const debtors = await Debtor.find({ code_entity: entity.code_entity });

      const sumLoan = debtors.reduce((total, debtor) => total + debtor.loan, 0);

      if (debtors.length > 0) {
        await Entity.findByIdAndUpdate(entity._id, { sum_loan: sumLoan.toFixed(2) });
      } else {
        await Entity.findByIdAndUpdate(entity._id, { sum_loan: 0 });
      }
    }

    const updatedEntities = await Entity.find();

    res.status(200).send(updatedEntities);
  } catch (error) {
    console.log(error);
    res.status(500).send('No es posible consultar las entidades');
  }
};

module.exports = { getEntity };
