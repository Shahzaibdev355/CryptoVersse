import { useDispatch, useSelector } from 'react-redux';
import { getAllNFTAction, ImageGenerateAction } from '../store/apps/dalle';
import { useNavigate } from 'react-router-dom';

export const useDalle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const store = useSelector((state) => state.dalle);

    const generateImage = (body) => {
        navigate(`/after-generate-image`)
        dispatch(ImageGenerateAction(body))
    }
    const getAllNFT = () => {
        dispatch(getAllNFTAction({}))
    }
    

    return {
        store,
        generateImage,
        getAllNFT
    };
};
