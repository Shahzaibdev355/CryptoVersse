import instance from './http.service';

const NftServices = {
    GetAll: () => {
        return instance.get('/nft');
    },
};
export default NftServices;
