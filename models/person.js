const mongoose = require("mongoose");
const schema = mongoose.Schema;

var person= new Schema({
  name:  {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods:   [String]
});

module.exports = Person = mongoose.model("persons", person);