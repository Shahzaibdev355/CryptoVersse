import Cloudinary from '../Services/cloudinary.service';

export const useCloudinary = () => {
    const UploadSingleImage = async (ImageFrom) => {
        const response = await Cloudinary.ImageUpload(ImageFrom)
        return response?.data?.data?.imageUrl
    };

    return {
        UploadSingleImage,
    };
};
