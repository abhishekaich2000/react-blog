const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connetToMongodb = async()=>{
  await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongodb sucessfully"))
  .catch((err)=>console.log(err));
}

module.exports = connetToMongodb;