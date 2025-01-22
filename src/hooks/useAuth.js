import { useDispatch, useSelector } from 'react-redux';
import { connectToWalletAction, disconnectWalletAction,updateProfileAction} from '../store/apps/auth';
import cookies from '../utils/cookies';
import { useNavigate } from 'react-router-dom';

export const useAuth = (data) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const store = useSelector((state) => state.auth);
    const connectToWallet = async (data) => {
        dispatch(connectToWalletAction(data))
    };
    const disconnectWallet = async () => {
        dispatch(disconnectWalletAction({}))
    };
    const UpdateProfile = async (body) => {
        dispatch(updateProfileAction(body))
    };
    return {
        store,
        connectToWallet,
        disconnectWallet,
        UpdateProfile
    };
};
