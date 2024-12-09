import {swap, getRandomItems} from "./word-practice/create-array.js"
import { words } from "./word-practice/word-base/word-base1.js"

const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const form = document.querySelector('#form')
const input = document.querySelector('input')
const wrap = document.querySelector('#words', '.correct')
const checkBtn = document.querySelector('#check-btn')
const inputs = document.querySelectorAll('.checkbox__inp')
const inputCheck = document.querySelector('.input__check')
let amount = 0
let counter = 0
let count = 0
let shuffleWords = 0
let rusEng = 0

startBtn.addEventListener('click', (event) => {
	event.preventDefault()
		sortInput()
		if (rusEng === 'en') {
			swap(words)
		}
		shuffleWords = getRandomItems(words, amount)
		createVerbs(shuffleWords)
		if (rusEng.length > 0) {
			screens[0].classList.add('up')
		}

})

const sortInput = () => {
	for (let i = 0; inputs.length > i; i += 1) {
		if (inputs[i].checked) {
			amount = inputs[i].getAttribute('data-atr')
			if (amount === 'ru' || amount === 'en') {
				rusEng = amount
			}
		}
	}
}


 const createVerbs = (array) => {
	wrap.innerHTML = `
	<i>${counter + 1}/${array.length}</i>
	<b>${array[counter][1]}</b>
	<i class="correct-word"></i>
	<h2 class="correct"></h2>`
	wrap.className = ''
}

form.addEventListener('submit', (event) =>  {
	event.preventDefault()
	checkArray(shuffleWords)
})

const checkInput = (array) => {
	if (checkBtn.classList.contains('check-btn')) {
		checkWord(inputCheck.value.toLocaleLowerCase().trim(), array)
		checkBtn.textContent = 'Далее'
		checkBtn.classList.remove('check-btn')
		counter += 1
	} else {
		checkBtn.textContent = 'Проверить'
		checkBtn.classList.add('check-btn')
		inputCheck.value = ''
		createVerbs(array)
	}
}

const checkWord = (word, array) => {
	const correct = document.querySelector('.correct')
	const correctWord = document.querySelector('.correct-word')

		if (word === array[counter][0]) {
			correct.textContent = 'Правильно!'
			correct.style.color = 'green'
			count += 1
	
		} else {
			correct.textContent = 'Неправильно!'
			correctWord.textContent = array[counter][0]
			correct.style.color = 'red'
		}
	}

const checkArray = (array) => {
	if (counter === array.length) {
			alert(`Количество правильных ответов: ${count}`)
			return
		}
		checkInput(array)
	}