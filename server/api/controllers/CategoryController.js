const { Op } = require("sequelize");
const { Category } = require("../models");

class CategoryController {
  static async getCategories(req, res) {
    try {
      const results = await Category.findAll({
        order: [["id", "asc"]],
      });
      console.log(results);
      res.json(results);
    } catch (err) {
      console.error(err);
    }
  }
  static async create(req, res) {
    const { name } = req.body;
    try {
      const result = await Category.create({
        name,
      });
      res.json(result);
    } catch (err) {
      console.error(err);
    }
  }

  static async delete(req, res) {
    try {
      let id = Number(req.params.id);
      let result = await Category.destroy({
        where: { id },
      });
      if (result) res.json({ message: "Category has been deleted" });
      else res.json({ message: "Category failed to be deleted" });
    } catch (err) {
      console.error(err);
    }
    // res.json("Items update page");
  }
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name } = req.body;
      const result = await Category.update(
        {
          name,
        },
        {
          where: { id },
        }
      );
      if (result[0] === 1) res.json({ message: "Category has been updated" });
      else {
        res.json({ message: "Category failed to be updated" });
      }
    } catch (err) {
      console.error(err);
    }
    // res.json("Items delete page");
  }

  static async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await Category.findByPk(id);

      if (result) res.json(result);
      else
        res.json({
          message: "item not found",
        });
    } catch (err) {
      console.error(err);
    }
    // res.json("Items by id page");
  }

  static async search(req, res) {
    try {
      const { category } = req.query;
      const results = await Category.findAll({
        where: {
          category: {
            [Op.iLike]: `%${category}%`,
          },
        },
      });
      res.json(results);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = CategoryController;
