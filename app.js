import { words } from "./word-base/word-base.js"
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
const countEl = document.querySelector('#count')

let time = 0
let amount = 0
let counter = 0
let count = 0
let shuffleWords = 0
let rusEng = 0

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
		createWord()
		screens[2].classList.add('up')
		stopWatch()
	}
})


const check = () => {
	if (btn.classList.contains('check-btn')) {
		checkWord(input.value.toLocaleLowerCase().trim())
		btn.textContent = 'Далее'
		btn.classList.remove('check-btn')
		counter += 1
	} else {
		btn.textContent = 'Проверить'
		btn.classList.add('check-btn')
		input.value = ''
		createWord()
	}
}

form.addEventListener('submit', (event) => {
	event.preventDefault()

	if (counter === shuffleWords.length) {
		screens[3].classList.add('up')
		countEl.innerHTML = `${count} из ${shuffleWords.length}`
		return
	}
	check()
})



const createWord = () => {
	const wrap = document.querySelector('#words', '.correct')
	wrap.innerHTML = `
	<i>${counter + 1}/${shuffleWords.length}</i>
	<b>${shuffleWords[counter][1]}</b>
	<i class="correct-word"></i>
	<h2 class="correct"></h2>`
	wrap.className = ''
}


const checkWord = (word) => {
	const correct = document.querySelector('.correct')
	const correctWord = document.querySelector('.correct-word')
	if (word === shuffleWords[counter][0]) {
		correct.textContent = 'Правильно!'
		correct.style.color = 'green'
		count += 1

	} else {
		correct.textContent = 'Неправильно!'
		correctWord.textContent = shuffleWords[counter][0]
		correct.style.color = 'red'
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
