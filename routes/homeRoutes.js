const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");

router.post("/homes", homeController.createHome);
router.get("/homes", homeController.getAllHomes);
router.get("/homes/:id", homeController.getHome);

module.exports = router;
