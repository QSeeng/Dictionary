import { words } from "../data-base/word-base1.js";
import { swap, getRandomItems } from "../js-tools/create-array.js";

const seasonBtn = document.querySelector('#season-btn');
const swapBtn = document.querySelector('#swap-list');
const btnList = document.querySelector('#btn-list');
const screens = document.querySelectorAll('.screen');
const hide = document.querySelector('.hide');
const form = document.querySelector('#form');
const input = document.querySelector('input');
const checkBtn = document.querySelector('#check-btn');
const timeEl = document.querySelector('#time');
const firstStat = document.querySelector('#first-stat');
const lastStat = document.querySelector('#last-stat');
const wrongBtn = document.querySelector('#wrong-btn');
const wrap = document.querySelector('#words', '.correct');
const repeatWords = document.querySelector('#repeat-words');

let number = 0;
let time = 0;
let amount = 0;
let counter = 0;
let count = 0;
let shuffleWords = 0;
let rusEng = 0;
let wrongWords = [];


//Button screen[0]


//Button screen[1]
seasonBtn.addEventListener('click', (event) =>  {
	event.preventDefault();
	screens[0].classList.add('up');
})

//Button screen[2]
swapBtn.addEventListener('click', (event) => {
	event.preventDefault();
	rusEng = parseInt(event.target.getAttribute('data-lang'));
	if (rusEng === 1) {
		swap(words);
	}
	screens[1].classList.add('up');
})

//Button screen[3]
btnList.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.classList.contains('word-btn')) {
		amount = parseInt(event.target.getAttribute('data-word'));
		shuffleWords = getRandomItems(words, amount);
		createWord(shuffleWords);
		screens[2].classList.add('up');
		stopwatch();
	}
})

//Button screen[5]
wrongBtn.addEventListener('click', (event) => {
	event.preventDefault();
	count = 0;
	counter = 0;
	number = 1;
	createWord(wrongWords);
	screens[3].classList.remove('up');
	// setTimeout(() => {screens[4].classList.add('down')}, 500);
})


form.addEventListener('submit', (event) =>  {
	event.preventDefault();
	returnArray(number);
})


// Logic for form
const createWord = (array) => {
	wrap.innerHTML = `
	<i>${counter + 1}/${array.length}</i>
	<span class="word-span"><b>${array[counter][1]}</b></span>
	<i class="correct-word"></i>
	<h2 class="correct"></h2>`;
	wrap.className = '';
}

const checkInput = (array) => {
	if (checkBtn.classList.contains('check-btn')) {
		checkWord(input.value.toLocaleLowerCase().trim(), array);
		checkBtn.textContent = 'Далее';
		checkBtn.classList.remove('check-btn');
		counter += 1;
	} else {
		checkBtn.textContent = 'Проверить';
		checkBtn.classList.add('check-btn');
		input.value = '';
		createWord(array);
	}
};

const checkWord = (word, array) => {
	const correct = wrap.querySelector('.correct');
	const correctWord = wrap.querySelector('.correct-word');
	const currentWord = array[counter][0]; // Текущее слово для проверки

	const isCorrect = (expectedWord) => {
			return word === expectedWord;
	};

	// Определяем правильное слово для проверки
	let expectedWord = currentWord.includes(' (') ? currentWord.split(' (').shift() : currentWord;

	// Проверяем, правильное ли слово
	if (isCorrect(expectedWord)) {
			correct.textContent = 'Правильно!';
			correct.style.color = 'green';
			count += 1; // Увеличиваем счетчик правильных ответов
	} else {
			correct.textContent = 'Неправильно!';
			correctWord.textContent = currentWord; // Показываем правильное слово
			correct.style.color = 'red';
			if (number === 0) {
					wrongWords.push([shuffleWords[counter][0], shuffleWords[counter][1]]);
			}
	}
};

const checkArray = (array) => {
	if (counter === array.length) {
		if (array === shuffleWords) {
			screens[3].classList.add('up');
			firstStat.innerHTML = `${count} из ${array.length}`;
			if (wrongWords.length === 0) {
				repeatWords.innerHTML = `
				<p>Вернуться в главное меню</p>
				<a href="/index.html" class="comeback-btn">Вернуться</a>
				`
			};

		} else if (array === wrongWords) {
			screens[3].classList.add('up');
			hide.classList.remove('hide');
			lastStat.innerHTML = `${count} из ${wrongWords.length}`;
			repeatWords.innerHTML = `
			<p>Вернуться в главное меню</p>
			<a href="/index.html" class="comeback-btn">Вернуться</a>
			`;
		}
	}
	// <button id="comeback-btn" onclick="location.reload(); return false;">Вернуться</button>
	 
	checkInput(array);
};

const returnArray = (number) => {
	if (number === 0) {
		return checkArray(shuffleWords);
	} else {
		return checkArray(wrongWords);
	}
};


//time
const stopwatch = () => {
	let stopInterval = setInterval(() => {
		time += 1;
		if (counter === shuffleWords.length) {
			clearInterval(stopInterval);
			secConverter(time);
			
		};
	 }, 1000);
};

const secConverter = (time) => {

	const minResult = Math.floor(time / 60);
	const secResult = time % 60;

	timeEl.innerHTML = `${minResult} мин ${secResult} сек`;
};