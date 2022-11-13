const router = require("express").Router();
const Post = require("../models/Post");

// CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(!post){
      return res.status(404).json({error:"Post not found"});
    }
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
          $set: req.body
        }, { new: true });
        res.status(200).send(updatedPost);  
      } catch (error) {
        res.status(500).json({ error: error });
      }
    } else {
      res.status(401).send({error:"You can update only your post"});
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
    try {
      const deletePost = await Post.findById(req.params.id);
      if(!deletePost){
        return res.status(404).json({error:"Post not found"});
      }
      if(deletePost.username === req.body.username){
        try {
          await deletePost.delete();
          res.status(200).json({message:"Post has been deleted"});
        } catch (error) {
          res.status(500).json({ error: error });
        }
      }else{
        res.status(401).send({error:"You can delete only your post"});
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
})

// GET a post
router.get("/:id", async(req, res)=>{
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
})

// GET query post
router.get("/", async(req, res)=>{
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if(username){
      posts = await Post.find({username:username});
    }else if(catName){
      posts = await Post.find({
        $in:[catName]
      });
    }else{
      posts = await Post.find({});
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
})

module.exports = router