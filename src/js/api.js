import axios from "axios";
import url from "./property/url"


// запит за вправами(exercises), коли буде логика вправ буде приймати Muscles або Body parts або Equipment.
// також коли буде пагинація буде приймати номер сторінки(page)
export async function getExercises(exercises, page) {
    return axios.get(url.BASE_URL + url.FILTERS + `?filter=${exercises}&page=${page}&limit=12`)
        .then(result => result.data)
        .catch(Error);
};


// Перелік вправ з фільтрацією по категорії та ключовому слову з урахування кількості вправ у запиті та порядкового номеру сторінки 
export async function getExercisesName(bodypart, muscles, equipment, keyword, page) {
    return axios.get(url.BASE_URL + url.EXERCISES + `?bodypart=${bodypart}&muscles=${muscles}&equipment=${equipment}&keyword=${keyword}&page=${page}&limit=10`)
        .then(result => result.data)
        .catch(Error)
}


// запит за детальною інформаціею про вправу по id, буде приймати id обраної вправи
export async function getExercisId(id) {
    return axios.get(url.BASE_URL + url.EXERCISES + `/${id}`)
        .then(result => result.data)
        .catch(Error)
};


// запит за цитатою дня
export async function getQuoteOfTheDay() {
    return axios.get(url.BASE_URL + url.QUOTE)
        .then(result => result.data)
        .catch(Error)
};



// Додавання рейтингу окремій вправі
export async function patchExercisReting(id, rate, email, review) {
    return axios.patch(url.BASE_URL + url.EXERCISES + `/${id}` + url.RATING, {
        "rate": rate,
        "email": email,
        "review": review
    })
        .then(result => result.data)
        .catch(Error)
}


// Оформлення підписки на розсилку нових вправ
export async function postSubscriptions(email) {
    return axios.post(url.BASE_URL + url.SUBSCRIPTION, {
        "email": email
    })
        .then(result => result.data)
        .catch(Error)
}

