const User = require('../models/User');

// get users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};

// promote user to admin
const promote = async(req, res) => {
  try{
    const user = await User.findByIdAndUpdate(req.params.id,
      {role: "admin"},
      {returnDocument: "after"}
    ).select("-password")
    if(!user){
      res.status(404).json({message: "User not found"})
    }

    res.status(200).json({message: "User promoted to admin", user});
  }
  catch(err){
    res.status(500).json({message: err.message});
  }
}

const blockUser = async(req, res) => {
  try{
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isBlocked: true },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({message: "User not found"});
    }

    res.status(200).json({message: "User blocked successfully", user});
  }
  catch(err){
    res.status(500).json({message: err.message});
  }
}

const unblockUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isBlocked: false },
      { new: true }
    ).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({message: "User unblocked successfully", user});

  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = {getAllUsers, promote, blockUser, unblockUser};