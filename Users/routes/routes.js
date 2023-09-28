// require express 
const express = require("express");
// express router
const router = new express.Router();

// function
const getProducts = require("../controller/Products/getProdcut");
const postProducts = require("../controller/Products/MakeProduct");
// const getParticularUser = require("../middleware/getParticularUser");
// const updateUser = require("../middleware/updateUser");
// const deleteUser = require("../middleware/deleteUser");

// register
const createUser = require("../controller/User/createUser")
const getUser = require("../controller/User/getUser")

// login
const login = require("../controller/Login/login")


// ******************* routes **********************

router.get("/products", getProducts.getProduct);
router.post("/products", postProducts.postProduct);
// router.get("/user/:id", getParticularUser.getParticularUser);
// router.patch("/:id", updateUser.updateUser);
// router.delete("/:id", deleteUser.deleteUser);


// register
router.post("/register", createUser.createUser);
router.get("/register", getUser.readUser);
// login
router.post("/login",login.Login);


// export
module.exports =  router 