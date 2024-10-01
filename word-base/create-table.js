import { words } from "./word-base.js"


const table = document.querySelector('.table')
table.innerHTML = `<table class="table"></table>`

for (let i = 0; i < words.length; i+= 1) {
	let row = document.createElement('tr')
	row.innerHTML = `
	<td>${words[i][0]}</td>
	<td>${words[i][1]}</td>
	`
	table.appendChild(row)
}
