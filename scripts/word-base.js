export let words = [
	['exist', 'существовать'],
	['degree', 'степень'],
	['flea', 'блоха'],
	['advice', 'совет'],
	['ahead', 'впереди'],
	['awkward', 'неуклюжий'],
	['brave', 'храбрый'],
	['convince', 'убеждать'],
	['disrapte', 'нарушать'],
	['distress', 'бедствие'],
	['fatigure', 'усталость'],
	['favor', 'одолжение'],
	['forgive', 'простить'],
	['funeral', 'похороны'],
	['hatch', 'люк'],
]



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
	const newArray = []
 	shuffle(array)
  for (let i = 0; i < length; i += 1) {
    newArray.push(array[i])
  }
  return newArray
}
