exports.getGalleryImages = async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGalleryImageById = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createGalleryImage = async (req, res) => {
  const image = new Gallery(req.body);
  try {
    const savedImage = await image.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateGalleryImage = async (req, res) => {
  try {
    const updatedImage = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteGalleryImage = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};