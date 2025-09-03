const Image = require('../models/image')
const uploadToCloudinary = require('../helper/cloudinaryHelper')
const fs = require('fs')
const cloudinary = require('../config/cloudinary')
const { waitForDebugger } = require('inspector')

const uploadImageController = async ( req , res) => {
  try {
    //check if file is missing in req object
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required. Please upload an image",
      });
    }

    //upload to cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path);

    //store the image url and public id along with the uploaded user id in database
    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    });

    await newlyUploadedImage.save();



    //delete the file from local stroage
    fs.unlinkSync(req.file.path);

    res.status(201).json({
      success: true,
      message: "Imaged uploaded successfully",
      image: newlyUploadedImage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}


const fetchImageController = async (req, res) => {
     try {
        const images = await Image.find({});

        if(images){
            res.status(200).json({
                success: true,
                data : images,
            })

        }   

     } catch (e) {
         console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
        
     }

}

const deleteImageController = async (req,res)=> {
try {
        const getCurrentIdofImageToBeDeleted = req.params.id;

    const userId = req.userInfo.userId;

    const image = await Image.findById(getCurrentIdofImageToBeDeleted);

    if(!image){
        return res.status(404).json({
            success : false,
            message : "image not found "
        })
    }

    // check if this image is uploaded by the current user who is trying to delete this image 
    if(image.uploadedBy.toString() !== userId){
        return res.status(404).json({
            success : false,
            message : 'u r not authorized to delete this image '
        })
    }

    //delete the image from cloudinary first 
    await cloudinary.uploader.destroy(image.publicId);

    //delete the image from monogodb 
    await Image.findByIdAndDelete(getCurrentIdofImageToBeDeleted);

    res.status(200).json({
        success : true,
        message : " image deleted successfully"
    })


} catch (error) {
      console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
}
}


module.exports = {uploadImageController, fetchImageController, deleteImageController}
 