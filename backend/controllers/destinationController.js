exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDestination = async (req, res) => {
  const destination = new Destination(req.body);
  try {
    const savedDestination = await destination.save();
    res.status(201).json(savedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateDestination = async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteDestination = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ message: 'Destination deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};