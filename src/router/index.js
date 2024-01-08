const express = require("express");
const router = express.Router();
const {
  createDebtor,
  getDebtor,
  deleteDebtor,
} = require("../../src/controller/debtorController");
const { getEntity } = require("../../src/controller/entityController");
const fileMiddleware = require("../middleware/fileMiddleware");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");
const { verifyEntities } = require("../middleware/entityMiddleware");
const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Wayni Challenge By Rosendo Alves",
      description: "Documentation about API usage",
    },
  },
  apis: [`${__dirname}/../docs/**/*.yaml`],
};
const specs = swaggerJSDoc(swaggerOptions);

router.get("/", (req, res) => {
  res.redirect('/docs')
});

router.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

router.post("/debtor", fileMiddleware, verifyEntities, createDebtor);
router.get("/debtor", getDebtor);
router.delete("/debtor", deleteDebtor);

router.get("/entity", getEntity);

router.use((req, res) => {
  res.redirect('/')
});

module.exports = router;
