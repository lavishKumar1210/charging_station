const Station = require('../models/Station');

exports.getAllStations = async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getStationById = async (req, res) => {
  try {
    const station = await Station.findById(req.params.id);
    if (!station) return res.status(404).json({ message: 'Station not found' });
    res.json(station);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createStation = async (req, res) => {
  try {
    const { name, location, capacity, status } = req.body;

    const station = new Station({ name, location, capacity, status });
    await station.save();

    res.status(201).json(station);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateStation = async (req, res) => {
  try {
    const { name, location, capacity, status } = req.body;

    const station = await Station.findByIdAndUpdate(
      req.params.id,
      { name, location, capacity, status },
      { new: true }
    );

    if (!station) return res.status(404).json({ message: 'Station not found' });

    res.json(station);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteStation = async (req, res) => {
  try {
    const station = await Station.findByIdAndDelete(req.params.id);
    if (!station) return res.status(404).json({ message: 'Station not found' });
    res.json({ message: 'Station deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
