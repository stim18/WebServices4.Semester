const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

// get all User
router.get('/', async (req, res) => {
  let searchOptions = {}
  if (req.query.username != null && req.query.username !== '') {
    searchOptions.username = new RegExp(req.query.username, 'i')
  }
  if (req.query.id != null && req.query.id !== '') {
    await User.findById(req.query.id, function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
        res.send(docs)
      }
    });
  } else {
    try {
      const users = await User.find(searchOptions)
      res.send(users)
    } catch {
      res.send("Error")
    }
  }
})

// Create new User
router.post('/new', async (req, res) => {
  const user = new User({
    username: req.body.username,
    goal: req.body.goal,
    split: req.body.split
  })
  try {
    const newUser = await user.save()
    res.send({
      Event: 'User added',
      Key: newUser.id
    })
  } catch {
    res.send('Error')
  }
})

router.post('/changeSplit', async (req, res) => {
  var id = req.body.key;
  if (req.body.split>5 || req.body.split<1 || req.body.split == null){
    res.send({Event: 'Wrong Input'})
  } else {
    User.findByIdAndUpdate(id, {split: req.body.split}, function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
        res.send({Event: 'Split changed'})
      }
    });
  }
  })

router.post('/changeGoal', async (req, res) => {
  var id = req.body.key;
  if (req.body.goal>5 || req.body.goal<1 || req.body.goal == null){
    res.send({Event: 'Wrong Input'})
  } else {
    User.findByIdAndUpdate(id, {goal: req.body.goal}, function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
        res.send({Event: 'Goal changed'})
      }
    });
  }
})

module.exports = router