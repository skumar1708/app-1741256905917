const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router.get('/', galleryController.getGalleryImages);
router.get('/:id', galleryController.getGalleryImageById);
router.post('/', galleryController.createGalleryImage);
router.put('/:id', galleryController.updateGalleryImage);
router.delete('/:id', galleryController.deleteGalleryImage);

module.exports = router;