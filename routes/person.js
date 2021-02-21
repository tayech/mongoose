const express = require("express");
const router = express.Router();
const Person = require("../models/person");


router.post("/", (req, res) => {
    const newPerson = new Person({ ...req.body });
    newPerson
      .save()
      .then((person) => res.status(200).json(person))
      .catch((err) => res.send(err));
  });
  
  router.get("/", (req, res) =>{
    Person.find({name: personName}, function (err, data) {
    if(err){
      return done(err);
    }
    {return done(null, data)};
  })
  });

  router.get("/", (req, res) =>{
    Person.findOne({favouriteFoods: food}, function(err, data) {
      if(err) return done(err);
      return done(null, data);
    });  
  });

  router.get("/", (req, res) => {
    Person.find()
      .then((persons) => res.status(200).json(persons))
      .catch((err) => res.send(err));
  });

  

  router.get("/:_id", (req, res) => {
    
    let { _id } = req.params;
    Person.find({ _id })
      .then((person) => res.send(person))
      .catch((err) => res.send(err));
  });
  

  router.put("/:_id", (req, res) => {
    let { _id } = req.params;
    Person.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("Person has been updated"))
      .catch((err) => res.send(err));
  });

  router.delete("/:_id", (req, res) => {
    let { _id } = req.params;
    Person.findByIdAndDelete({ _id })
      .then(() => res.send("Person has been deleted"))
      .catch((err) => res.send(err));
  });

  router.delete("/", (req, res) => {
    Person.remove()
      .then((persons) => res.status(200).json(persons))
      .catch((err) => res.send(err));
  });
  module.exports = router;