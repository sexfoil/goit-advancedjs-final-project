import { getQuote } from './api.js';

const quoteOfTheDay = document.querySelector('.js-quote');

quote();

async function quote() {
  try {
    const quoteText = await getQuote();
    displayQuote(quoteText);
  } catch (error) {
    console.log(error);
  }
}

function displayQuote({ author, quote }) {
  quoteOfTheDay.innerHTML = `
  <p class="quote_text">${quote}</p>
  <h4 class="quote_author">${author}</h4>
    `;
}

// localStorage checkup
const QUOTE_KEY = 'quote';
const DATE_KEY = 'date';
const quoteText = getQuote();
const quoteDate = new Date();

function addToLS(quote, date) {
  localStorage.setItem(DATE_KEY, quoteDate);
  localStorage.setItem(QUOTE_KEY, quoteText);
  const targetDate = new Date();

  const newQuote = getQuote(quote);

  if (quoteDate.getDate() != targetDate.getDate()) {
    localStorage.setItem('quote', newQuote);
    localStorage.setItem('date', targetDate);
  } else {
    localStorage.getItem(quoteText);
  }
}
