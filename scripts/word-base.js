export let words = [
	// A
	['abroad', 'за границей'],
	['acquire', 'приобретать'],
	['advice', 'cовет'],
	['admire', 'восхищаться'],
	['afford', 'позволить себе'],
	['ahead', 'впереди'],
	['aisle', 'ряд'],
	['apologies', 'извинения'],
	['argue', 'спорить'],
	['aside', 'в сторону'],
	['assault', 'нападение'],
	['atone', 'искупить вину'],
	['attitude', 'отношение к чему либо (настрой)'],
	['awkward', 'неуклюжий'],
	// B
	['barely', 'едва'],
	['blank', 'пустой (бумага)'],
	['blow up', 'взорвать'],
	['both', 'оба'],
	['bother', 'беспокоить'],
	['brave', 'храбрый'],
	['bury', 'хоронить'],
	['bush', 'куст'],
	// C
	['capable', 'способный'],
	['cheap', 'дешевый'],
	['circumstances', 'обстоятельства'],
	['commitment', 'обязательство'],
	['convince', 'убеждать'],
	['consider', 'считать, рассматривать'],
	['crew', 'экипаж'],
	// D
	['no will dare', 'не смей'],
	['decision', 'решение'],
	['deck', 'колода'],
	['degree', 'степень'],
	['demand', 'требовать'],
	['depends', 'зависит от'],
	['determined', 'определенный'],
	['descretion', 'усмотрение'],
	['destiny', 'судьба (предназначение)'],
	['disrapte', 'нарушать'],
	['distress', 'бедствие'],
	['doubt', 'сомневаться'],
	// E
	['each', 'каждый, конкретный'],
	['engaged', 'вовлеченный'],
	['exist', 'существовать'],
	// F
	['fair', 'справедливый'],
	['fraith', 'вера'],
	['fate', 'судьба (неизбежно)'],
	['fatigure', 'усталость'],
	['favor', 'одолжение'],
	['flea', 'блоха'],
	['forgive', 'простить'],
	['fraud', 'мошенничество'],
	['funeral', 'похороны'],
	['fuse', 'предохранитель'],
	// G
	['guess', 'предполагать (пальцем в небо)'],
	['guilty', 'виноватый'],
	// H
	['hanging out', 'тусоваться'],
	['harash', 'суровый'],
	['hatch', 'люк'],
	['haul', 'тащить'],
	['headache', 'головная боль'],
	['hug', 'обнимать'],
	['hustle', 'суетиться'],
	// I
	['injury', 'травма'],
	['innocent', 'невиный'],
	['insanity', 'безумие'],
	['insignificant', 'незначительный'],
	['insurance', 'страховка'],
	['insurgency', 'мятеж'],
	['intense', 'напряженный'],
	['intent', 'намерение'],
	// J
	['jail', 'тюрьма'],
	['judging', 'судить'],
	// L
	['lay', 'класть'],
	['lead', 'вести'],
	// M
	['martyr', 'мученик'],
	['misery', 'страдание (несчастье)'],
	['mitigate', 'смягчать'],
	['monsoon', 'сезон дождей'],
	['mosque', 'мечеть'],
	// N
	['noble', 'благородный'],
	['numbness', 'онемение'],
	['no will dare', 'не смей'],
	['nourishment', 'питание'],
	// O
	['obsence', 'навязчивость'],
	['obsession', 'одержимый'],
	['obvious', 'очевидный'],
	['odds', 'шансы'],
	['overzealous', 'чрезмерно усердный'],
	// P
	['particular', 'особый'],
	['perhabs', 'возможно'],
	['pregnant', 'беременная'],
	['presence', 'нахождение'],
	['prey', 'добыча'],
	['priest', 'священник'],
	['proper', 'правильный'],
	['punishment', 'наказание'],
	['purpose', 'цель (не материальная)'],
	// R
	['rear', 'тыл'],
	['rescue', 'спасать'],
	['resonable', 'разумный'],
	['responsible', 'ответственный'],
	['ridiculously', 'нелепо'],
	['rip', 'рвать'],
	['rot', 'гнить'],
	['rudder', 'руль'],
	['rude', 'грубый'],
	// S
	['sacrifice', 'жертва'],
	['scar', 'шрам'],
	['scissors', 'ножницы'],
	['seduce', 'соблазнять'],
	['sick', 'больной'],
	['significant', 'значительный'],
	['since', 'с (прошлое)'],
	['sinking', 'тонуть'],
	['slave', 'раб'],
	['somehow', 'как-то'],
	['smuggler', 'контрабандист'],
	['spike', 'шип'],
	['steer', 'рулить'],
	['still', 'все еще'],
	['stolen', 'украденный'],
	['stripped', 'раздетый'],
	['suffer', 'страдать'],
	['suggest', 'предлагать'],
	['suppose', 'предполагать (обоснованно)'],
	// T
	['tantrum', 'истерика'],
	['taunt', 'насмешка'],
	['tight', 'тугой'],
	['take off', 'снять'],
	['tube', 'трубка'],
	['tumor', 'опухоль'],
	// U
	['unless', 'пока не'],
	// V
	['vow', 'клятва'],
	// W
	['weak', 'слабый'],
	['weepy', 'плаксивый'],
	['whine', 'ныть'],
	['wise', 'мудрый'],
	['within', 'в пределах'],
	['withnesses', 'свидетели'],
	['wrap', 'сворачивать'],
	['wreck', 'повреждение'],
	// Y
	['yelling', 'кричать'],
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
