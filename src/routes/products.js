// ************ Require's ************
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
// ************ Controller Require ************
const productsController = require("../controllers/productsController");
const productValidation = require("../validations/productValidation");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
router.post(
  "/create",
  upload.single("image"),
  productValidation,
  productsController.store
);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", upload.single("image"), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
