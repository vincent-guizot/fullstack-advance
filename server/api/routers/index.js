const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Home page");
});

const userRouters = require("./user");
const itemRouters = require("./item");
const categoryRouter = require("./category");
router.use("/users", userRouters);
router.use("/items", itemRouters);
router.use("/categories", categoryRouter);

module.exports = router;
