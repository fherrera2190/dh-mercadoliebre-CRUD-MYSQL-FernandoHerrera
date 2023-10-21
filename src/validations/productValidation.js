const { check } = require("express-validator");

module.exports = [
  check("name").notEmpty().withMessage("Debe ingresar un nombre"),
  check("price")
    .isEmpty()
    .withMessage("Debe ingresar un precio")
    .isInt({ min: 1 })
    .withMessage("Debe ingresar un precio mayor a 0"),
  check("discount")
    .notEmpty()
    .withMessage("Debe ingresar un valor")
    .isInt({ min: 0, max: 99 })
    .withMessage("Debe ingresar un descuento mayor o igual 0"),
  check("categoryId")
    .isInt({ min: 1 })
    .withMessage("Debe ingresar una categoria valida")
];
