import axios from "axios";

const imagesAPI = axios.create({
    baseURL: 'https://pixabay.com/api',
});

const API_KEY = '34915138-2db4c98d7327a4811f659bfcf';

export async function fetchImages(query, page = 1) {
    const response = await imagesAPI.get('/?image_type=photo&orientation=horizontal', {
        params: {
            q: query,
            page: page,
            key: API_KEY,
            per_page: 12,
        },
    });
    return response.data;
};

export default fetchImages;
