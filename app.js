const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')

startBtn.addEventListener('click', (event) => {
	event.preventDefault()
	screens[0].classList.add('up')
})

const words = [
	['exist', 'существовать'],
	['degree', 'степень'],
	['flea', 'блоха']
]

let counter = 0
let count = 0

const createWord = () => {
	const wrap = document.querySelector('#words', '.correct')
	wrap.innerHTML = `
	<i>${counter + 1}/${words.length}</i>
	<b>${words[counter][1]}</b>
	<h2 class="correct"></h2>`
	
	wrap.className = ''
}

createWord()

document.querySelector('#form').addEventListener('submit', (event) => {
	const input = document.querySelector('input')
	const btn = document.querySelector('button')
	event.preventDefault()

	if (counter === words.length) {
		alert(`Колличество правильных ответов: ${count}`)
		return
	}

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
})

const checkWord = (word) => {
	const correct = document.querySelector('.correct')
	if (word === words[counter][0]) {
		correct.textContent = 'Правильно!'
		correct.style.color = 'green'
		count += 1

	} else {
		correct.textContent = 'Неправильно!'
		correct.style.color = 'red'
	}
}

