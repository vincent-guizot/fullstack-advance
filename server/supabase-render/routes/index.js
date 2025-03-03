import { Router } from "express";
import userRoutes from "./user.js";
const route = Router();

route.get("/", (req, res) => {
  res.status(200).json({
    message: "Home",
  });
});

route.use("/users", userRoutes);

export default route;
