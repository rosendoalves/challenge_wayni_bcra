const Debtor = require("../model/debtor");
const Entity = require("../model/entity");

const getEntity = async (req, res) => {
  try {
    const entity = await Entity.findOne({ code_entity: 72 });
    
    if (!entity) {
      return res.status(404).send('Entidad no encontrada');
    }

    const debtors = await Debtor.find({ code_entity: entity.code_entity });

    const sumLoan = debtors.reduce((total, debtor) => total + debtor.loan, 0);

    if (debtors.length > 0) {
      await Entity.findByIdAndUpdate(entity._id, { sum_loan: sumLoan.toFixed(2) });
    } else {
      await Entity.findByIdAndUpdate(entity._id, { sum_loan: 0 });
    }

    const updatedEntity = await Entity.findById(entity._id);

    res.status(200).send(updatedEntity);
  } catch (error) {
    console.log(error)
    res.status(500).send('No es posible consultar la entidad')
  }
};

module.exports = { getEntity };
