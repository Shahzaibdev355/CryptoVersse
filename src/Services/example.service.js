import instance from './http.service';

const Services = {
    getAll: () => {
        return instance.get('/products');
    },
    getbyId: (params) => {
        return instance.get(`/products/${params}`);
    },

};

export default Services;
