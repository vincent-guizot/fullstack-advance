const { Router } = require("express");
const router = Router();
const { ItemController } = require("../controllers");
const { authentication, authorization } = require("../middlewares/auth");

router.get("/", ItemController.getItems);
router.get("/search", ItemController.search);
router.get("/info/:id", ItemController.getItemById);
router.get("/filter/price", ItemController.getFilterPrice);

router.post("/create", authentication, ItemController.create);
router.get("/user", authentication, ItemController.getItemsByUser);
router.put(
  "/update/:id",
  // authentication,
  // authorization,
  ItemController.update
);
router.delete(
  "/delete/:id",
  // authentication,
  // authorization,
  ItemController.delete
);

module.exports = router;
