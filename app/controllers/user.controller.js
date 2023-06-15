const db = require("../models");

const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = async (req, res) => {
  console.log({ req: JSON.stringify(req.body) });
  if (!req.body.firstName) {
    console.log({});
    res.status(400).send({
      message: "First name cannot be empty",
    });
  } else if (!req.body.lastName) {
    res.status(400).send({
      message: "Last name cannot be empty",
    });
  } else {
    // Create a Tutorial
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      fullName: `${req.body.firstName} ${req.body.lastName}`,
      published: req.body.published ? req.body.published : false,
    };

    User.create(user)
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(500).send({
          message: err.message || "Error creating user",
        })
      );
  }
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const fullName = req.query.fullName;
  var condition = fullName ? { fullName: { [Op.iLike]: `%${fullName}%` } } : null;

  User.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {};

// Update a User by the id in the request
exports.update = (req, res) => {};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};

// Find all published Users
exports.findAllPublished = (req, res) => {};
