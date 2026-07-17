const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const {getAllUsers, promote, blockUser, unblockUser} = require('../controllers/adminController')

router.get("/dashboard",authMiddleware,roleMiddleware("admin"), (req, res) => {
    res.status(200).json({ message: "Welcome Admin!"});
  }
);

router.get("/users", getAllUsers)
router.patch("/promote/:id", promote)
router.patch("/block/:id", blockUser)
router.patch("/unblock/:id", unblockUser)

module.exports = router;