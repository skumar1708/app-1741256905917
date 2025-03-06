exports.getBlogPosts = async (req, res) => {
  try {
    const posts = await Blog.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBlogPostById = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBlogPost = async (req, res) => {
  const post = new Blog(req.body);
  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBlogPost = async (req, res) => {
  try {
    const updatedPost = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBlogPost = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};