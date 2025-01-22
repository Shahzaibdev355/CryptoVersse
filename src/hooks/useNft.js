import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImageToImageGenerateAction } from '../store/apps/stabilityAi';
import { GetAllAction } from '../store/apps/nft';

export const useNft = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const store = useSelector((state) => state.nft);

    const GetAll = (body) => {
        dispatch(GetAllAction(body))
    }



    return {
        store,
        GetAll,
    };
};
