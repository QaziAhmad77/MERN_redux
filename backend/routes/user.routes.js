const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");

router.post("/add-user", userController.addUser);
router.get("/get-user", userController.getUser);
router.delete("/delete-all", userController.deleteAllUser);
router.get("/get-single-user/:userId", userController.getSingleUser);
router.put("/update-user/:userId", userController.updateUser);
router.delete("/delete-user/:userId", userController.deleteUser);

module.exports = router;
