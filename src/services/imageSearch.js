import axios from 'axios'

const URL = 'https://pixabay.com/api/'
const KEY = '29199195-44cd762621e598e52ffe0971c'

async function fetchImages(name, page) {
    try {
        const responce = await axios.get(`${URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        return responce;
    } catch (error) {
        return error
    }
}

const api = {
    fetchImages,
}

export default api