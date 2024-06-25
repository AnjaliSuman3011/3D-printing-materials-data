const Material = require('../models/Material');

exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find({}, '-imageUrl');
    res.json(materials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMaterialById = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json(material);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createMaterial = async (req, res) => {
  const material = new Material({
    ...req.body,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : undefined
  });
  try {
    const newMaterial = await material.save();
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateMaterial = async (req, res) => {
  try {
    const updatedData = {
      ...req.body,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl
    };
    const material = await Material.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json(material);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  try {
    const material = await Material.findByIdAndDelete(req.params.id);
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json({ message: 'Material deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
