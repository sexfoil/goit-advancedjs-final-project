import { getExerciseCardHtml, getCategoryCardHtml } from './utils/html-render';
import * as api from './api.js';

const categoryList = document.querySelector('.category_content');

const categories = await api.getExercisesByCategory(1, 12);
categoryList.innerHTML = getCategoryCardHtml(categories.results);

const resp = await api.getExercisesByKeyword(1, 10, 'bodypart', 'back', 'back');
console.log(resp);

const quote = document.querySelector('.exercises_quote');
const q = await api.getQuote();
console.log(q);
quote.innerHTML = `"${q.quote}"<br><br> ${q.author}`;
