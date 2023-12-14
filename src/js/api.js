import axios from 'axios';
import url from './property/url.js';




// const testUrl = url.BASE_URL + url.EXERCISES + `/${id}`;

export default async function getExerciseById(id) {
    return axios.get(getUrl(id))
        .then(result => result.data)
        .catch(err => err);
}

function getUrl(id) {
    return url.BASE_URL + url.EXERCISES + `/${id}`;
}