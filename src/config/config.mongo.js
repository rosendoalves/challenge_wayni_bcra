const mongoose = require('mongoose');
const { userDb, passDb } = require('./db.config');
const Entity = require('../model/entity');

const mongoConnect = async () => {
  const DB_URI = `mongodb+srv://${userDb}:${passDb}@cluster0.zygdc.mongodb.net/wayni_bcra?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected');

    const existingEntity = await Entity.findOne({ code_entity: 72 });

    if (!existingEntity) {
      const entitiesData = [
        {
          code_entity: 72,
          sum_loan: 0,
        },
      ];

      await Entity.insertMany(entitiesData);
      console.log('Seeder executed successfully');
    } 
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};

module.exports = mongoConnect;
