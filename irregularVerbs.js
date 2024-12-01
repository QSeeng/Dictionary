import {irregularVerbs} from "./irregularVerbs-base.js"

const screens = document.querySelectorAll('.screen')
const form = document.querySelector('#form')
const input = document.querySelector('input')
const wrap = document.querySelector('#words', '.correct')
const checkBtn = document.querySelector('#check-btn')

let number = 0
let time = 0
let amount = 0
let counter = 0
let count = 0
let shuffleWords = 0

const createVerbs = (array) => {
	wrap.innerHTML = `
	<i>${counter + 1}/${array.length}</i>
	<b>${array[counter][1]}</b>
	<i class="correct-word"></i>
	<h2 class="correct"></h2>`
	wrap.className = ''
}

createVerbs(irregularVerbs)

form.addEventListener('submit', (event) =>  {
	event.preventDefault()
	checkArray(irregularVerbs)
})

const checkInput = (array) => {
	if (checkBtn.classList.contains('check-btn')) {
		checkWord(input.value.toLocaleLowerCase().trim(), array)
		checkBtn.textContent = 'Далее'
		checkBtn.classList.remove('check-btn')
		counter += 1
	} else {
		checkBtn.textContent = 'Проверить'
		checkBtn.classList.add('check-btn')
		input.value = ''
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
