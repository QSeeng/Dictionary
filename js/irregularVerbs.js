import {irregularVerbs} from "../data-base/irregularVerbs-base.js";
import {getRandomItems, quiz} from "../js-tools/create-array.js";

const screens = document.querySelectorAll('.screen');
const form = document.querySelector('#form');
const inputCheck = document.querySelector('input');
const wrap = document.querySelector('#words', '.correct');
const checkBtn = document.querySelector('#check-btn');
const verbsBtn = document.querySelector('#verbs-btn');

let amount = 0;
let shuffleWords = 0;

 verbsBtn.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.classList.contains('verbs')) {
		amount = parseInt(event.target.getAttribute('data-verbs'));
		shuffleWords = getRandomItems(irregularVerbs, amount);
		quiz(shuffleWords, wrap, form, inputCheck, checkBtn);
		screens[0].classList.add('up');
	}
});