//      Document Object Model
// Go Fishing

console.group('ElementBy')

// Calling byId
let one = document.getElementById('btn-one');
let five = document.getElementById('btn-five');
let six = document.getElementById('btn-six');
let seven = document.getElementById('btn-seven');
let eight = document.getElementById('btn-eight');

console.log(one)
console.log(five, six, seven, eight)
one.textContent = 'ONE, but written from JS'
// Calling byClassName (two and four)
let pair = document.getElementsByClassName('pair-class')
console.log(pair)
console.log(pair[0])

// Calling byName
let tre = document.getElementsByName('tre-name');
console.log(tre)

// Calling byTagName
let all = document.getElementsByTagName('button')
console.log(all)
console.log(all[7])
console.groupEnd()
console.log('')

console.group('querySelector')

//Calling with querySelector
let alfa = document.querySelector("#btn-alfa")
let bravo = document.querySelector("#btn-bravo")
let costa = document.querySelector("#btn-costa")
let doll = document.querySelector("#btn-doll")

console.log(costa)
alfa.textContent = 'Costa'
costa.textContent = 'Alfa'
doll.textContent = 'Bravo'
bravo.textContent = 'Doll'

//Calling with querySelectorAll
let threesome = document.querySelectorAll(".abc-class")

console.log(threesome)
console.groupEnd()






