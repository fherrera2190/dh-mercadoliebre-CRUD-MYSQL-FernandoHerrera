const router = require("express").Router();

const {
  listProducts,
  showProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/apiProductsController");

// Productos
router
  .get("/products", listProducts)
  .get("/products/:id", showProduct)
  .post("/products", createProduct)
  .put("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct);

module.exports = router;
