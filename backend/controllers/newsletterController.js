exports.subscribeToNewsletter = async (req, res) => {
  const subscriber = new Newsletter(req.body);
  try {
    const savedSubscriber = await subscriber.save();
    res.status(201).json(savedSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};