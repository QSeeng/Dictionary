const audioList = document.querySelector('#audio-list');
const tbody = document.getElementById('audio-list');

import { irregularVerbs } from "./irregularVerbs-base.js";

let audioId = 0;

audioList.addEventListener('click', (event) => {
	event.preventDefault();
		audioId = event.target.getAttribute('data-word');
	
	if (audioId !== null) {
		const speech = new SpeechSynthesisUtterance(audioId);
		speech.lang = "en-US";
		window.speechSynthesis.speak(speech);
	}
});



irregularVerbs.forEach(verb => {
	// Разбиваем первую часть на отдельные формы
	const forms = verb[0].split(' '); // ['be', 'was/were', 'been']
	const translation = verb[1]; // 'быть, являться'

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
			<span class="word" data-word="${forms[2]}">${forms[2]}</span>
	`;
	row.appendChild(pastParticipleCell);

	// Создаем ячейку для перевода
	const translationCell = document.createElement('td');
	translationCell.setAttribute('data-th', 'Перевод');
	translationCell.innerHTML = `<span class="word">${translation}</span>`;
	row.appendChild(translationCell);

	// Добавляем строку в tbody
	tbody.appendChild(row);
});