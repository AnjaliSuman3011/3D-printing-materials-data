const express = require('express');
const multer = require('multer');
const { getMaterials, getMaterialById, createMaterial, updateMaterial, deleteMaterial } = require('../controllers/materialController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getMaterials);
router.get('/:id', getMaterialById);
router.post('/', upload.single('image'), createMaterial);
router.put('/:id', upload.single('image'), updateMaterial);
router.delete('/:id', deleteMaterial);

module.exports = router;
