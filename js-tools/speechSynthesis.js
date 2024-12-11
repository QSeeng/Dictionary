const audioList = document.querySelector('#audio-list');

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