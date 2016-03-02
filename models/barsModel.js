var mongoose = require('mongoose');

// Create the bars schema
var BarSchema = new mongoose.Schema({
  name : {
    type : String,
    require : true
  },
  adress : {
    type : String,
  },
  phone : {
    type : Number,
  }
});

// Export the model BarSchema.
module.exports = BarSchema;