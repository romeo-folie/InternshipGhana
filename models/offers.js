const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

var OfferSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  link:{
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description:{
    type: String,
    trim: true
  },
  location:{
    type: String,
    trim: true,
    default: null
  }
});

//mongoose-findOrCreate doesn't seem to be working

OfferSchema.plugin(findOrCreate)
const Offer = mongoose.model('Offer', OfferSchema)

module.exports = {Offer}
