import { getExerciseCardHtml } from './utils/html-render';
import { getExercisesByCategory } from './api.js';

const a = await getExercisesByCategory(1, 12);
console.log(a);
getExerciseCardHtml(a);
