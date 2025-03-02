const { Router } = require("express");
const router = Router();
const { UserController } = require("../controllers");

router.get("/", UserController.getUsers);
router.post("/create", UserController.create);
router.put("/update/:id", UserController.update);
router.delete("/delete/:id", UserController.delete);
router.get("/account/:id", UserController.account);
router.get("/search", UserController.search);

router.post("/signin", UserController.signIn);

module.exports = router;
