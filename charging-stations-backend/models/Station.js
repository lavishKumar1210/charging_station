const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  capacity: Number,
  status: { type: String, default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Station', stationSchema);
