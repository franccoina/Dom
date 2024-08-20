//      Document Object Model
// Append It

console.group('Inserción a partir de appendChild')

//------------------------- Definicion botones principales -----------------------------------------

let btnExecute = document.querySelector("#btn-execute")
btnExecute.classList.add("m-2")
let btnReplacer = document.querySelector("#btn-replacer")
btnReplacer.classList.add("m-2")
let btnKiller = document.querySelector("#btn-killer")
btnKiller.classList.add("m-2")
let main = document.querySelector("main")

function createBtnExample(){
    //------------------------- Button to create construction --------------------------------------

    let btnExample = document.createElement("button")

    //add atributes: clasical option
    btnExample.setAttribute("type", "button")
    //add atributes: common option
    btnExample.type="button"
    //add atributes: when many classes
    btnExample.classList.add("btn","btn-secondary","m-2")
    //add element content
    btnExample.textContent = "[blank]"

    return btnExample
}

//----------------------------- Appending to main when 'click' btnExecute --------------------------

btnExecute.addEventListener('click', () => {
    let btnExample = createBtnExample()
    main.appendChild(btnExample)
})

//el insertBefore(new,x), inserta pero antes de un elemento x

function callBtnToKill(){
    //------------------------- Button to kill construction ---------------------------------------
    let btnToKill = document.querySelector(".btn-light")
    return btnToKill
}

//----------------------------- Removing from main when 'click' btnKiller -------------------------

btnKiller.addEventListener('click', () => {
    let btnExample = callBtnToKill()
    main.removeChild(btnExample)
})

function callBtnToReplace(){
    //------------------------- Button to kill construction ---------------------------------------
    let btnToReplace = document.querySelector(".btn-success")
    return btnToReplace
}

//----------------------------- Removing from main when 'click' btnKiller -------------------------

btnReplacer.addEventListener('click', () => {
    let btnToReplace = callBtnToReplace()
    let btnNew = createBtnExample()
    //primero va el nuevo, luego el que se reemplazara
    main.replaceChild(btnNew,btnToReplace)
})

console.groupEnd()