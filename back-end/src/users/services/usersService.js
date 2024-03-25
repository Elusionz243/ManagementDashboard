const knex = require("../../db/db");

const getAllUsers = async () => await knex("users").select();

const createUser = async (user) => await knex("users").insert({ ...user });

module.exports = {
  getAllUsers,
  createUser,
};
