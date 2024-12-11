import { quiz, getRandomItems } from "../js-tools/create-array.js";
import { phrases } from "../data-base/phrases-base.js";

const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const form = document.querySelector('#form');
const wrap = document.querySelector('#words', '.correct');
const inputCheck = document.querySelector('#input');
const checkBtn = document.querySelector('#check-btn');
const inputs = document.querySelectorAll('.checkbox__inp');

let amount = 0;
let shuffleWords = 0;

startBtn.addEventListener('click', (event) => {
	event.preventDefault();
	sortInput(inputs);
	shuffleWords = getRandomItems(phrases, amount)
	quiz(shuffleWords, wrap, form, inputCheck, checkBtn, true)
	screens[0].classList.add('up');
});

const sortInput = (inputs) => {
	inputs.forEach(input => {
		if (input.checked) {
			amount = input.getAttribute('data-atr');
		}
	});
}