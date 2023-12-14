import axios from 'axios';
import url from './property/url.js';
import getExerciseById from './api.js'


/**
 * import example
 */
// const id = '64f389465ae26083f39b17a2!!!';

// const testUrl = url.BASE_URL + url.EXERCISES + `/${id}`;

// async function getData() {
//     return axios.get(testUrl)
//         .then(result => result.data)
//         .catch(err => err);
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

const id = "asasas";
const a = await getExerciseById('64f389465ae26083f39b17a2');
console.log(a);