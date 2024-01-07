const Debtor = require("../model/debtor");
const Entity = require("../model/entity");

const getEntity = async (req, res) => {
  try {
    const entity = await Entity.findOne({ code_entity: 72 });
    
    if (!entity) {
      return res.status(404).send('Entidad no encontrada');
    }

    // Busca los debtors basados en el campo code_entity
    const debtors = await Debtor.find({ code_entity: entity.code_entity });

    // Suma los valores de loan de los registros de Debtor
    const sumLoan = debtors.reduce((total, debtor) => total + debtor.loan, 0);

    // Verifica si hay registros en debtors antes de actualizar sum_loan
    if (debtors.length > 0) {
      // Redondea el valor a dos decimales antes de actualizar
      await Entity.findByIdAndUpdate(entity._id, { sum_loan: sumLoan.toFixed(2) });
    } else {
      // Si no hay debtors, actualiza sum_loan a 0
      await Entity.findByIdAndUpdate(entity._id, { sum_loan: 0 });
    }

    // Vuelve a consultar la entidad para obtener el registro actualizado
    const updatedEntity = await Entity.findById(entity._id);

    res.status(200).send(updatedEntity);
  } catch (error) {
    console.log(error)
    res.status(500).send('No es posible consultar la entidad')
  }
};

module.exports = { getEntity };
