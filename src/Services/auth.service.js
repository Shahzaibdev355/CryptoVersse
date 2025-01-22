import instance from './http.service';

const AuthServices = {
    updateProfile: (body) => {
        return instance.put(`/update-profile`, body);
    },
    connectToWallet: (body) => {
        return instance.post(`/connectedtowallet`, body);
    },
    verify: (body) => {
        return instance.post(`/verify`, body);
    },
    logout: () => {
        return instance.delete(`/signout`);
    }
};

export default AuthServices;
