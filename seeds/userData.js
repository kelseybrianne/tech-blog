const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "kbrianne",
    password: "pass",
  },
  {
    id: 2,
    username: "sarahh",
    password: "van",
  },
  {
    id: 3,
    username: "juni842",
    password: "junior",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
