const mongoose = require('mongoose');

var OfferSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    trim: true
  },
  link:{
    type: String,
    required: true,
    trim: true,
    unique, true
  },
  description:{
    type: String,
    trim: true
  },
  location:{
    type: String,
    trim: true,
  }
});

var Offer = mongoose.model('Offer', OfferSchema)

module.exports = {Offer}
