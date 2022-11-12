const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const connectToMongodb = require("./db");
connectToMongodb();

// middleware
app.use(express.json());

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