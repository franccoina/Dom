//      Document Object Model
// Sibling Of

console.group('Manejo de elementos hermanos')

let main = document.querySelector("#main")
let footer = document.querySelector("#footer")
let header = document.querySelector("#header")

let btnExample = createButton()

let btnPoint = document.querySelector("#btn-point")

//  adding an element BEFORE anything
//main.before(btnExample)

//  adding an element AFTER anything
//main.after(btnExample)

//  adding an element inside of anything, at BEGINNING
//      added before the first child of that anything
//          insertBefore()
main.prepend(btnExample)

//  adding an element inside of anything, at the END
//      added ater the last child of that anything
//          appendChild()
//main.append(btnExample)

//  replacing ALL elements from anything with other elements
//          different to replaceChild()
//main.replaceChildren(btnExample,"hi"," ",true,{1:'ana',2:'xavi'},[2,3,4])

//  replacing the whole anything (children and DAD) with other elements
//main.replaceWith(btnExample,"hi"," ",true,{1:'ana',2:'xavi'},[2,3,4])

//  removing the whole anything
//main.remove()

function createButton(){
    let btn = document.createElement("button")
    btn.classList.add("btn","btn-light","p-2","m-3")
    btn.textContent = "White"
    return btn
}

console.log(main)
console.log(main.children)
console.log(main.parentElement)

console.log(btnPoint)
console.log(btnPoint.parentElement.parentElement.parentElement.parentElement.parentElement)

//or console.log(main.firstChild)
console.log(main.firstElementChild) 
console.log(main.lastElementChild)

console.log(main.previousElementSibling)
console.log(main.nextElementSibling)

console.groupEnd()