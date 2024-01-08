const Entity = require("../../src/model/entity");

const verifyEntities = async (req, res, next) => {
  try {
    const register = req.register;

    if (!Array.isArray(register)) {
      return res.status(400).json({ error: "Invalid data format. 'register' should be an array." });
    }

    if (register.length === 0) {
      return res.status(400).json({ error: "Empty file. No data to process." });
    }

    const uniqueEntities = [...new Set(register.map(record => record.code_entity))];

    for (const codeEntity of uniqueEntities) {
      const existingEntity = await Entity.findOne({ code_entity: codeEntity });

      if (!existingEntity) {
        const newEntity = new Entity({
          code_entity: codeEntity,
          sum_loan: 0, 
        });
        await newEntity.save();
      }
    }

    next();
  } catch (error) {
    console.error("Error verifying entities:", error);
    res.status(500).json({ error: "Error verifying entities." });
  }
};

module.exports = { verifyEntities };
