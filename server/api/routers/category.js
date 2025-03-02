const { Router } = require("express");
const router = Router();
const { CategoryController } = require("../controllers");

router.get("/", CategoryController.getCategories);
router.post("/create", CategoryController.create);
router.put("/update/:id", CategoryController.update);
router.delete("/delete/:id", CategoryController.delete);
router.get("/info/:id", CategoryController.getById);
router.get("/search", CategoryController.search);

module.exports = router;
