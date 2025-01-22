import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImageToImageGenerateAction, TextToImageGenerateAction } from '../store/apps/stabilityAi';

export const useStabilityAi = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const store = useSelector((state) => state.stabilityAi);

    const ImageToImageGenerate = (body) => {
        navigate(`/after-generate-image`)
        dispatch(ImageToImageGenerateAction(body))
    }

    const TextToImageGenerate = (body) => {
        navigate(`/after-generate-image`)
      return  dispatch(TextToImageGenerateAction(body))
    }

    return {
        store,
        ImageToImageGenerate,
        TextToImageGenerate
    };
};
