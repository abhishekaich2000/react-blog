const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// UPDATE user
router.put("/:id", async(req, res)=>{
  if(req.body.userId == req.params.id){
    if(req.body.password){
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set :req.body
      }, 
      {new:true})
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }else{
    res.status(401).json({error:"You can update only your account !!!"});
    console.log(req.body.userId);
  }
})

// DELETE user
router.delete("/:id", async(req, res)=>{
  if(req.body.userId == req.params.id){
    try {
      const user = await User.findById(req.params.id);
      if(!user){
        return res.status(404).json({message: "User not found"});
      }
      try {
        await Post.deleteMany({username: user.username});
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "User has been deleted"});
      } catch (error) {
        res.status(500).json(error);
     }
    } catch (error) {
      res.status(500).json(error);
    }
  }else{
    res.status(401).json({error:"You can delete only your account !!!"})
  }
})

// GET USER
router.get("/:id", async(req, res)=>{
  try {
    const user = await User.findById(req.params.id);
    const {password, ...others} = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router