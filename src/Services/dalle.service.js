import instance from './http.service';

const DalleServices = {
    GenerateImage: (body) => {
        return instance.post('/dalle', body);
    },
    getAll: () => {
        return instance.get('/dalle', );
    },
    getbyid: (id) => {
        return instance.post(`/dalle/${id}`,);
    },
};
export default DalleServices;
