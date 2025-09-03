const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController,fetchImageController, deleteImageController} = require('../controller/image-controller')

const router = express.Router();

// upload the image 
router.post('/upload',authMiddleware,adminMiddleware,uploadMiddleware.single('image') ,uploadImageController)


// to get all images 
router.get('/get',authMiddleware ,fetchImageController)

// to delete image 
router.delete('/:id', authMiddleware, adminMiddleware,deleteImageController)

module.exports = router;