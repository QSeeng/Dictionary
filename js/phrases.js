import {swap, getRandomItems, quiz} from "./js-tools/create-array.js";
import { phrases } from "./data-base/phrases-base.js";

const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const form = document.querySelector('#form');
const wrap = document.querySelector('#words', '.correct');
const checkBtn = document.querySelector('#check-btn');
const inputs = document.querySelectorAll('.checkbox__inp');
const inputCheck = document.querySelector('.input__check');

let amount = 0;
let shuffleWords = 0;
let rusEng = 0;

startBtn.addEventListener('click', (event) => {
	event.preventDefault();
		sortInput(inputs)
		if (rusEng === 'en') {
			swap(phrases);
		}
		shuffleWords = getRandomItems(phrases, amount);
		quiz(shuffleWords, wrap, form, inputCheck, checkBtn);
		if (rusEng.length > 0) {
			screens[0].classList.add('up')
		}

});

const sortInput = (inputs) => {
	for (let i = 0; inputs.length > i; i += 1) {
		if (inputs[i].checked) {
			amount = inputs[i].getAttribute('data-atr');
			if (amount === 'ru' || amount === 'en') {
				rusEng = amount;
			};
		}
	}
};
