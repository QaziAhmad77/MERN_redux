const Users = require("../models/User");
const mongoose = require("mongoose");

module.exports = {
  addUser: async (req, res) => {
    try {
      const { name, email, contact, address } = req.body;
      if (!name || !email || !contact || !address) {
        throw { success, status: 412, message: "Require fields cannot be empty" };
      }
      const user = await Users.create({
        name,
        email,
        contact,
        address,
      });
      res.status(200).send({ user });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "Something went wrong");
    }
  },
  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      console.log(userId);
      const { name, email, contact, address } = req.body;
      const updatedUser = await Users.updateOne(
        {
          _id: userId,
        },
        {
          $set: {
            name: name,
            email: email,
            contact: contact,
            address: address,
          },
        }
      );
      res.status(200).send({ updatedUser });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "Something went wrong");
    }
  },
  getUser: async (req, res) => {
    try {
      let data = await Users.find();
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "Something went wrong");
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      await Users.findByIdAndDelete(userId);
      res.status(200).json("User has been deleted");
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "Something went wrong");
    }
  },
  deleteAllUser: async (req, res) => {
    try {
      await Users.deleteMany();
      res.status(200).json("All users has been deleted");
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "Something went wrong");
    }
  },
  getSingleUser: async (req, res) => {
    try {
      const { userId } = req.params;
      console.log(userId);
      const data = await Users.findById(userId.trim());
      console.log(data);
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "Something went wrong");
    }
  },
};
