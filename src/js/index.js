import { getExercises, getExercisesByName, getExercisById, getQuoteOfTheDay, updateExercisReting, postSubscriptions } from "./api-service";

// приклад отримання вправ(Exercises)
// console.log(await getExercises("Muscles", 1));

// приклад отримання перелику вправ за ключовим словом
// console.log(await getExercisesByName("back", "","","barbell", 1));

// приклад отримання детальної інформації про вправу(по id)
// console.log(await getExercisById("64f389465ae26083f39b17c2"));

// приклад отримання цитати дня
// console.log(await getQuoteOfTheDay());


// приклад додавання рейтингу окремій вправі
// console.log(await updateExercisReting("64f389465ae26083f39b17a4", 5, "my@gmail.com", "My best exercise"))

// приклад оформлення підписки на розсилку нових вправ
// console.log(await postSubscriptions("my@gmail.com"))


// import axios from 'axios';
// import url from './property/url.js';

/**
 * import example
 */
// const id = '64f389465ae26083f39b17a2';

// const testUrl = url.BASE_URL + url.EXERCISES + `/${id}`;

// async function getData() {
//     return axios.get(testUrl).then(result => result.data);
// }

// let data = await getData();

// console.log(data);
// document.querySelector('.test-api').innerHTML = getHtml(data);

// function getHtml(data) {
//     return `
//         <h3>Body part: ${data.bodyPart}</h3>
//         <h4>Description: ${data.description}</h4>
//         <h4>Raiting: ${data.rating}</h4>
//     `;
// }