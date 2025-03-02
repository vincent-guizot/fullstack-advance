const { Op } = require("sequelize");
const { User, Profile } = require("../models");
const { tokenGenerator } = require("../helpers/jwt");

const { encryptPwd, decryptPwd } = require("../helpers/bcrypt");

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await User.findAll({
        order: [["id", "asc"]],
      });
      const profiles = await Profile.findAll();

      // console.log(users);
      // console.log(profiles);

      const results = users.map((user) => {
        let temp = {};
        profiles.forEach((profile) => {
          if (user.dataValues.id === profile.dataValues.UserId) {
            temp = {
              ...user.dataValues,
              profile: { ...profile.dataValues },
            };
          } else {
            temp = { ...user.dataValues, profile: {} };
          }
        });
        return temp;
      });

      console.log(results);
      res.json(results);
    } catch (err) {
      console.error(err);
    }
  }
  static async create(req, res) {
    const { username, email, password, avatar } = req.body;
    const encryptedPwd = encryptPwd(password);
    try {
      const user = await User.create({
        username,
        email,
        password: encryptedPwd,
        avatar,
      });
      const result = await Profile.create({
        UserId: user.id,
      });

      res.json({
        ...user.dataValues,
        profile: { ...result.dataValues },
      });
    } catch (err) {
      console.error(err);
    }
  }

  static async delete(req, res) {
    try {
      let id = Number(req.params.id);
      let result = await User.destroy({
        where: { id },
      });
      if (result) res.json({ message: "User has been deleted" });
      else res.json({ message: "User failed to be deleted" });
    } catch (err) {
      console.error(err);
    }
    // res.json("Items update page");
  }
  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const { username, email, password, avatar, address, city, province } =
        req.body;
      const userStatus = await User.update(
        {
          username,
          email,
          password,
          avatar,
        },
        {
          where: { id },
        }
      );
      const profileStatus = await Profile.update(
        {
          address,
          city,
          province,
        },
        {
          where: { UserId: id },
        }
      );
      if (userStatus[0] === 1 && profileStatus[0] === 1)
        res.json({ message: "User has been updated" });
      else {
        res.json({ message: "User failed to be updated" });
      }
    } catch (err) {
      console.error(err);
    }
    // res.json("Items delete page");
  }

  static async account(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await User.findByPk(id);

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
      const { email } = req.query;
      const results = await User.findAll({
        where: {
          email: {
            [Op.iLike]: `%${email}%`,
          },
        },
      });
      res.json(results);
    } catch (err) {
      console.error(err);
    }
  }

  static async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const userFound = await User.findOne({
        where: {
          email,
        },
      });
      if (userFound) {
        if (decryptPwd(password, userFound.password)) {
          const access_token = tokenGenerator(userFound);
          res.json({
            access_token,
          });
        } else {
          throw {
            message: "Invalid password",
          };
        }
      } else {
        throw {
          message: "User not found",
        };
      }
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = UserController;
