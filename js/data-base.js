import { words } from "../data-base/word-base1.js";
import { irregularVerbs } from "../data-base/irregularVerbs-base.js";
import { phrases } from "../data-base/phrases-base.js";

const movieWordsBtn = document.querySelector('#movie-words');
const irregularVerbsBtn = document.querySelector('#irregular-verbs');
const phrasalVerbsBtn = document.querySelector('#phrasal-verbs');
const popularPhrasesBtn = document.querySelector('#popular-phrases');
const tableContainer = document.querySelector('#table-container');


movieWordsBtn.addEventListener('click', (event) => {
	const table = createMovieWordsTable(words);
	tableContainer.innerHTML = '';
	tableContainer.appendChild(table);
});

irregularVerbsBtn.addEventListener('click', (event) => {
	const table = createIrregularVerbsTable(irregularVerbs);
	tableContainer.innerHTML = '';
	tableContainer.appendChild(table);
});

popularPhrasesBtn.addEventListener('click', (event) => {
	const table = createPopularPhraseTable(phrases)
	tableContainer.innerHTML = '';
	tableContainer.appendChild(table);
});

phrasalVerbsBtn.addEventListener('click',(event) => {
	tableContainer.innerHTML = '';
});



const createMovieWordsTable = (words) => {
	const table = document.createElement('table');
	table.classList.add('table');
	
	// Создание заголовков
	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');
	const tbody = document.createElement('tbody');

	headerRow.innerHTML = `<th>Word</th><th>Translation</th>`;
	thead.appendChild(headerRow)
	table.appendChild(thead);

	words.forEach(word => {
			const row = document.createElement('tr');
			row.innerHTML = `<td>${word[0]}</td><td>${word[1]}</td>`;
			tbody.appendChild(row);
			table.appendChild(tbody);
	});

	return table;
};



const createIrregularVerbsTable = (wordsArray) => {

	const table = document.createElement('table');
	table.classList.add('table');
	
		const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
		const tbody = document.createElement('tbody');
		tbody.setAttribute('id', 'audio-list')

    headerRow.innerHTML = `
        <th>Infinitive</th>
        <th>Past Simple</th>
        <th>Past Participle</th>
        <th>Перевод</th>`;
    thead.appendChild(headerRow);
    table.appendChild(thead);


	wordsArray.forEach(verb => {
		// Разбиваем первую часть на отдельные формы
		const forms = verb[0].split(' '); // ['be', 'was/were', 'been']
		const translation = verb[1];
	
		// Создаем строку таблицы
		const row = document.createElement('tr');
	
		// Создаем ячейку для Infinitive
		const infinitiveCell = document.createElement('td');
		infinitiveCell.setAttribute('data-th', 'Infinitive');
		infinitiveCell.innerHTML = `
				<button class="sound-btn" data-word="${forms[0]}"></button>
				<span class="word" data-word="${forms[0]}">${forms[0]}</span>
		`;
		row.appendChild(infinitiveCell);
	
		// Создаем ячейку для Past Simple
		const pastSimpleCell = document.createElement('td');
		pastSimpleCell.setAttribute('data-th', 'Past-Simple');
		pastSimpleCell.innerHTML = `
				<button class="sound-btn" data-word="${forms[1]}"></button>
				<span class="word" data-word="${forms[1]}">${forms[1]}</span>
		`;
		row.appendChild(pastSimpleCell);
	
		// Создаем ячейку для Past Participle
		const pastParticipleCell = document.createElement('td');
		pastParticipleCell.setAttribute('data-th', 'Past-Participle');
		pastParticipleCell.innerHTML = `
				<button class="sound-btn" data-word="${forms[2]}"></button>
				<span class="word" data-word="${forms[2]}">${forms[2]}</span>`;
		row.appendChild(pastParticipleCell);
	
		// Создаем ячейку для перевода
		const translationCell = document.createElement('td');
		translationCell.setAttribute('data-th', 'Перевод');
		translationCell.innerHTML = `<span class="word">${translation}</span>`;
		row.appendChild(translationCell);
	
		// Добавляем строку в tbody

		tbody.appendChild(row);
	});

	table.appendChild(tbody);

	 // Добавляем обработчик событий для кнопок
	 const soundButtons = table.querySelectorAll('.sound-btn');
	 soundButtons.forEach(button => {
			 button.addEventListener('click', (event) => {
					 const audioId = event.target.getAttribute('data-word');
					 if (audioId) {
							console.log(audioId)
							 const speech = new SpeechSynthesisUtterance(audioId);
							 speech.lang = "en-US";
							 window.speechSynthesis.speak(speech);
					 }
			 });
	 });

	return table;
};


const createPopularPhraseTable = (words) => {
	const table = document.createElement('table');
	table.classList.add('table');
	
	// Создание заголовков
	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');
	const tbody = document.createElement('tbody');

	headerRow.innerHTML = `<th>Word</th><th>Translation</th>`;
	thead.appendChild(headerRow)
	table.appendChild(thead);

	words.forEach(word => {
			const row = document.createElement('tr');
			row.innerHTML = `<td>${word[0]}</td><td>${word[1]}</td>`;
			tbody.appendChild(row);
			table.appendChild(tbody);
	});

	return table;
};
