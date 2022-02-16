const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");

router.post("/homes", homeController.createHome); // Create
router.get("/homes", homeController.getAllHomes); // Read all
router.get("/homes/:id", homeController.getHome); // Read one
router.put("/homes/:id", homeController.update); // Update

module.exports = router;
