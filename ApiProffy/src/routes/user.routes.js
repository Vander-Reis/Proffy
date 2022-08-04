const { Router } = require("express");

const UserController = require("../Controller/UserController");

const useRoutes = Router();

const userController = new UserController();

useRoutes.post("/", userController.create);

module.exports = useRoutes;