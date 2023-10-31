require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dg1vhnf5g",
  api_key: "936977315858444",
  api_secret: "oK6zgF_ezolSF2Ehq_A74TTT32Y",
});

exports.uploadCloudinary = async (image, folderName) => {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: folderName,
      use_filename: true,
      unique_filename: false,
    });

    return result.url;
  } catch (error) {
    throw error;
  }
};
