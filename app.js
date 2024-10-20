import { shuffle, words } from "./word-base/word-base.js"
import { getRandomItems } from "./word-base/word-base.js"
import { swap } from "./word-base/word-base.js"

const startBtn = document.querySelector('#start')
const swapBtn = document.querySelector('#swap-list')
const btnList = document.querySelector('#btn-list')
const screens = document.querySelectorAll('.screen')
const form = document.querySelector('#form')
const input = document.querySelector('input')
const btn = document.querySelector('#check-btn')
const timeEl = document.querySelector('#time')
const countEl = document.querySelector('#first-stat')
const lastStat = document.querySelector('#last-stat')
const wrongBtn = document.querySelector('#wrong-btn')
const wrap = document.querySelector('#words', '.correct')

let number = 0
let time = 0
let amount = 0
let counter = 0
let count = 0
let shuffleWords = 0
let rusEng = 0
let wrongWords = []

//first screen
startBtn.addEventListener('click', (event) => {
	event.preventDefault()
	screens[0].classList.add('up')
})

//second screen
swapBtn.addEventListener('click', (event) => {
	event.preventDefault()
	rusEng = parseInt(event.target.getAttribute('data-lang'))
	if (rusEng === 1) {
		swap(words)
	}
	screens[1].classList.add('up')
})

//third screen
btnList.addEventListener('click', (event) => {
	event.preventDefault()
	if (event.target.classList.contains('word-btn')) {
		amount = parseInt(event.target.getAttribute('data-word'))
		shuffleWords = getRandomItems(words, amount)
		createWord(shuffleWords)
		screens[2].classList.add('up')
		stopWatch()
	}
})

// 
wrongBtn.addEventListener('click', (event) => {
	event.preventDefault()
	count = 0
	counter = 0
	number = 1
	createWord(wrongWords)
	btn.textContent = 'Начать сначала'
	screens[3].classList.remove('up')
	// setTimeout(() => {screens[4].classList.add('down')}, 500);
})

const check = (array) => {
	if (btn.classList.contains('check-btn')) {
		checkWord(input.value.toLocaleLowerCase().trim(), array)
		btn.textContent = 'Далее'
		btn.classList.remove('check-btn')
		counter += 1
	} else {
		btn.textContent = 'Проверить'
		btn.classList.add('check-btn')
		input.value = ''
		createWord(array)
	}
}

form.addEventListener('submit', (event) =>  {
	event.preventDefault()
	finalFunc(number)
})


const createWord = (array) => {
	wrap.innerHTML = `
	<i>${counter + 1}/${array.length}</i>
	<b>${array[counter][1]}</b>
	<i class="correct-word"></i>
	<h2 class="correct"></h2>`
	wrap.className = ''
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
		if (number === 0) {
			wrongWords.push([shuffleWords[counter][0], shuffleWords[counter][1]])
		}
	}
}

const stopWatch = () => {
	let stopInterval = setInterval(() => {
		time += 1
		if (counter === shuffleWords.length) {
			clearInterval(stopInterval)
			secConverter(time)
			
		}
	 }, 1000);
}


const secConverter = (time) => {

	const minResult = Math.floor(time / 60)
	const secResult = time % 60

	timeEl.innerHTML = `${minResult} мин ${secResult} сек`
}

// Test

const testFunction = (array) => {
	if (counter === array.length) {
		if (array === shuffleWords) {
			screens[3].classList.add('up')
		countEl.innerHTML = `${count} из ${array.length}`
		return
		} else if (array === wrongWords) {
			screens[3].classList.add('up')
			lastStat.innerHTML = `${count} из ${array.length}`
		}
	}
	 
	check(array)
}

const finalFunc = (number) => {
	if (number === 0) {
		return testFunction(shuffleWords)
	} else {
		return testFunction(wrongWords)
	}
}

// setTimeout(() => {screens[4].classList.add('down')}, 500);