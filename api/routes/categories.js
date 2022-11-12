const router = require("express").Router();
const Category = require("../models/Category");

//POST a categories
router.post("/", async(req,res)=>{
  const newCat = new Category(req.body);
  try {
    const savedCategory = await newCat.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET all categories
router.get("/", async(req,res)=>{
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = router;
