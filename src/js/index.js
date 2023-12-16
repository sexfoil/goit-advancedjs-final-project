import { getExerciseCardHtml, getCategoryCardHtml } from './utils/html-render';
import { getExercisesByCategory } from './api.js';
import './quote.js';

const categoryList = document.querySelector('.category_content');

const categories = await getExercisesByCategory(1, 12);
categoryList.innerHTML = getCategoryCardHtml(categories.results);
