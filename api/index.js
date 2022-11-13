const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

const connectToMongodb = require("./db");
connectToMongodb();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors());

// public folder
app.use("/images", express.static(__dirname + "/images"));

// image storage
const storage = multer.diskStorage({
  destination: (req, res, cb)=>{
    cb(null, "images");
  },
  filename: (req, res, cb)=>{
    cb(null, req.body.name);
  }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
  res.status(200).json({message: "File has been uploaded"});
});


// Auth route
app.use("/api/auth", authRoute);
// User route
app.use("/api/users", userRoute);
// posts route
app.use("/api/posts", postRoute);
// categories route
app.use("/api/categories", categoryRoute);


app.listen(5000, ()=>{
  console.log("Server listening on port 5000");
});