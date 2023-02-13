var express = require('express');
var Question = require('../models/question');
var Category = require('../models/category');
var router = express.Router();

/* GET home page. */
// Question
router.post('/addquestion', async function (req, res, next) {
  try {
    console.log(req.body);
    let data = await Question.create(req.body)
    res.status(201).json({
      status: "success",
      message: "Question Add Successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

router.get('/showquestion', async function (req, res, next) {
  try {
    let data = await Question.find().populate('category') // category === field name
    res.status(200).json({
      status: "success",
      message: "Question Show Successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

router.post('/editquestion', async function (req, res, next) {
  try {
    eid = req.query.eid
    console.log(eid);
    let data = await Question.findByIdAndUpdate(eid, req.body)
    res.status(200).json({
      status: "success",
      message: "Question Edit Successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

router.get('/deletequestion', async function (req, res, next) {
  try {
    did = req.query.did
    let data = await Question.findByIdAndDelete(did)
    res.status(200).json({
      status: "success",
      message: "Question Delete Successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

// Category
router.post('/addcategory', async function (req, res, next) {
  try {
    console.log(req.body);
    let data = await Category.create(req.body)
    res.status(201).json({
      status: "success",
      message: "Category Add Successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

router.get('/showcategory', async function (req, res, next) {
  try {
    let data = await Category.find()
    res.status(200).json({
      status: "success",
      message: "Category Show Successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

router.post('/editcategory', async function (req, res, next) {
  try {
    eid = req.query.eid
    console.log(eid);
    let data = await Category.findByIdAndUpdate(eid, req.body)
    res.status(200).json({
      status: "success",
      message: "Category Edit Successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

router.get('/deletecategory', async function (req, res, next) {
  try {
    did = req.query.did
    let data = await Category.findByIdAndDelete(did)
    res.status(200).json({
      status: "success",
      message: "Category Delete Successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
});

module.exports = router;
