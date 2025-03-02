const { Op } = require("sequelize");
const { Item, Category, User } = require("../models");

class ItemController {
  static async getItems(req, res) {
    try {
      const results = await Item.findAll({
        order: [["id", "asc"]],
        include: [Category, User],
      });
      console.log(results);
      res.json(results);
    } catch (err) {
      res.json(err);
    }
  }
  static async create(req, res) {
    const { name, description, price, stock, image, CategoryId, UserId } =
      req.body;

    try {
      const result = await Item.create({
        name,
        description,
        price,
        stock,
        image,
        UserId: req.userData.id,
        CategoryId,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      let id = Number(req.params.id);
      let result = await Item.destroy({
        where: { id },
      });
      if (result) res.json({ message: "Item has been deleted" });
      else res.json({ message: "Item failed to be deleted" });
    } catch (err) {
      res.json(err);
    }
    // res.json("Items update page");
  }
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { name, description, stock, price, image } = req.body;
      const result = await Item.update(
        {
          name,
          description,
          stock,
          price,
          image,
        },
        {
          where: { id },
        }
      );
      if (result[0] === 1) res.json({ message: "Item has been updated" });
      else {
        res.json({ message: "Item failed to be updated" });
      }
    } catch (err) {
      res.json(err);
    }
    // res.json("Items delete page");
  }

  static async getItemById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await Item.findByPk(id);

      if (result) res.json(result);
      else
        res.json({
          message: "item not found",
        });
    } catch (err) {
      res.json(err);
    }
    // res.json("Items by id page");
  }

  static async search(req, res) {
    try {
      const { name } = req.query;
      const results = await Item.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      res.json(results);
    } catch (err) {
      res.json(err);
    }
  }

  static async getFilterPrice(req, res) {
    try {
      const { max, min } = req.query;
      const results = await Item.findAll({
        where: {
          price: {
            [Op.between]: [+min, +max],
          },
        },
      });
      res.json(results);
    } catch (err) {
      res.json(err);
    }
  }

  static async getItemsByUser(req, res) {
    try {
      const { id } = req.userData;
      const items = await Item.findAll({
        where: {
          UserId: id,
        },
      });
      if (items.length > 0) {
        res.json(items);
      } else {
        res.json({
          message: "There are no items",
        });
      }
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = ItemController;
