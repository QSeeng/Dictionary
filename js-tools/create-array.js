export const quiz = (wordsArray, wrap, form, inputCheck, checkBtn) => {

	let counter = 0;
	let count = 0; 

	const createWords = () => {
			wrap.innerHTML = ` 
					<i>${counter + 1}/${wordsArray.length}</i> 
					<b>${wordsArray[counter][1]}</b> 
					<i class="correct-word"></i> 
					<h2 class="correct"></h2>`;
			wrap.className = '';
	};

	const checkWord = (word) => {
			const correct = wrap.querySelector('.correct');
			const correctWord = wrap.querySelector('.correct-word');
			if (word === wordsArray[counter][0]) {
					correct.textContent = 'Правильно!';
					correct.style.color = 'green';
					count += 1; // Увеличиваем счетчик правильных ответов
			} else {
					correct.textContent = 'Неправильно!';
					correctWord.textContent = wordsArray[counter][0];
					correct.style.color = 'red';
			}
	};

	const checkInput = (inputValue) => {
			if (checkBtn.classList.contains('check-btn')) {

					checkWord(inputValue.toLowerCase().trim());
					checkBtn.textContent = 'Далее';
					checkBtn.classList.remove('check-btn');
					return true; // Переходим к следующему слову
			} else {
					checkBtn.textContent = 'Проверить';
					checkBtn.classList.add('check-btn');
					return false; // Не переходим к следующему слову
			}
	};

	const checkArray = () => {
			if (counter === wordsArray.length) {
					alert(`Количество правильных ответов: ${count}`);
					return; // Завершаем игру
			}
			const inputValue = inputCheck.value;
			const isNext = checkInput(inputValue);
			if (!isNext) {
					createWords(); // Создаем новое слово для ввода
					inputCheck.value = ''; // Очищаем поле ввода
			} else {
					counter += 1; // Переходим к следующему слову
			}
	};

	// Инициализация первого слова
	createWords();

	// Обработчик события отправки формы
	form.addEventListener('submit', (event) => {
			event.preventDefault();
			checkArray();
	});
};

// проверка есть ли слово в инпуте
// if (inputValue.trim() === '') {
// 	alert('Пожалуйста, введите слово!');
// 	return false; // Не переходим к следующему слову
// }





export const swap = (array) => {
	array.forEach(function(e){e.reverse();});
}

//Перемешивание Фишера Йетса
 export const shuffle = (array) => {
  let m = array.length, t, i;

  // Пока есть элементы для перемешивания
  while (m) {

    // Взять оставшийся элемент
    i = Math.floor(Math.random() * m--);

    // И поменять его местами с текущим элементом
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


export const getRandomItems = (array, length) => {
	const newArray = [];
 	shuffle(array);
  for (let i = 0; i < length; i += 1) {
    newArray.push(array[i]);
  }
  return newArray;
};
