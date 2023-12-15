import axios from "axios";
import url from "./property/url"


// запит за вправами(exercises), коли буде логика вправ буде приймати Muscles або Body parts або Equipment.
// також коли буде пагинація буде приймати номер сторінки(page)
export async function getExercises(exercises, page) {
    return axios.get(getUrlExercises(exercises, page))
        .then(result => result.data)
        .catch(error => error);
};

function getUrlExercises(exercises, page) {
    const params = new URLSearchParams({ filter: exercises, page: page, limit: 12 });
    return url.BASE_URL + url.FILTERS + "?" + params
}


// Перелік вправ з фільтрацією по категорії та ключовому слову з урахування кількості вправ у запиті та порядкового номеру сторінки 
export async function getExercisesByName(bodypart, muscles, equipment, keyword, page) {
    return axios.get(getUrlExercisesByName(bodypart, muscles, equipment, keyword, page))
        .then(result => result.data)
        .catch(error => error)
}

function getUrlExercisesByName(bodypart, muscles, equipment, keyword, page) {
    const params = new URLSearchParams({ bodypart: bodypart, muscles: muscles, equipment: equipment, keyword: keyword, page: page, limit: 10 });
    return url.BASE_URL + url.EXERCISES + "?" + params
}


// запит за детальною інформаціею про вправу по id, буде приймати id обраної вправи
export async function getExercisById(id) {
    return axios.get(getUrlExercisById(id))
        .then(result => result.data)
        .catch(error => error)
};

function getUrlExercisById(id) {
    return url.BASE_URL + url.EXERCISES + `/${id}`
}


// запит за цитатою дня
export async function getQuoteOfTheDay() {
    return axios.get(url.BASE_URL + url.QUOTE)
        .then(result => result.data)
        .catch(error => error)
};



// Додавання рейтингу окремій вправі
export async function updateExercisReting(id, rate, email, review) {
    return axios.patch(getUrlUpdateExercisReting(id), {
        "rate": rate,
        "email": email,
        "review": review
    })
        .then(result => result.data)
        .catch(error => error)
}

function getUrlUpdateExercisReting(id) {
    return url.BASE_URL + url.EXERCISES + `/${id}` + url.RATING
}


// Оформлення підписки на розсилку нових вправ
export async function postSubscriptions(email) {
    return axios.post(url.BASE_URL + url.SUBSCRIPTION, {
        "email": email
    })
        .then(result => result.data)
        .catch(error => error)
}

