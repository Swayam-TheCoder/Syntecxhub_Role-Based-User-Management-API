const mongoose = require('mongoose');

const connectDB = async(req, res) => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  }
  catch(err){
    console.log("MongoDB Connection failed: ",err);
    process.exit(1);
  }
}

module.exports = connectDB;