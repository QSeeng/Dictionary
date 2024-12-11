const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');

//Button screen[0]
startBtn.addEventListener('click', (event) => {
	event.preventDefault();
	screens[0].classList.add('up');
});