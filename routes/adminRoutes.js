const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const {getAllUsers, promote} = require('../controllers/adminController')

router.get("/dashboard",authMiddleware,roleMiddleware("admin"), (req, res) => {
    res.status(200).json({ message: "Welcome Admin!"});
  }
);

router.get("/users", getAllUsers)
router.patch("/promote/:id", promote)

module.exports = router;