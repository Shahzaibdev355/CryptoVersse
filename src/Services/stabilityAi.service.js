import instance from './http.service';

const StabilityAiServices = {
    ImageToImageGeneration: (body) => {
        return instance.post('/stabilityai/imagetoimage', body);
    },
    TextToImageGeneration: (body) => {
        return instance.post('/stabilityai/texttoimage', body);
    },
};
export default StabilityAiServices;
