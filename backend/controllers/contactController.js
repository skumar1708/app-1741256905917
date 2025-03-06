exports.sendContactMessage = async (req, res) => {
  const message = new Contact(req.body);
  try {
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};