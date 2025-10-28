const mongoose = require("mongoose");

const certSchema = new mongoose.Schema({
  certName: {
    type: String,
    required: true,
  },
  certImage: {
    type: String,
  },
  certUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Certification", certSchema);
