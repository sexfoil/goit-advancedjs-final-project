import axios from 'axios';

axios.defaults.baseURL = "https://your-energy.b.goit.study/api";

// запит за вправами(exercises), коли буде логика вправ буде приймати Muscles або Body parts або Equipment.
// також коли буде пагинація буде приймати номер сторінки(page)
export async function getExercises(exercises = "Muscles", page = 1) {
   return await axios.get(`/filters?filter=${exercises}&${page}&limit=12`).then((resp) => {return resp.data});
};

// запит за детальною інформаціею про вправу по id, буде приймати id обраної вправи
export async function getExercisesId(id = '64f389465ae26083f39b17a2') {
   return await axios.get(`/exercises/${id}`).then((resp) => {return resp.data})
}

// запит за цитатою дня
export async function getQuoteOfTheDay() {
   return await axios.get("/quote").then((resp) => {return resp.data})
}




