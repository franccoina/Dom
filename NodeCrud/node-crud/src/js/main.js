//----------------------------- imports ---------------------------------------

// Import our custom CSS
import '../scss/style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { coders } from '../../public/data/database.js'

import { showSmallAlertSuccess } from './alert.js'

import { index, createCoder, deleteCoderButton, createCoderForm } from './operations.js'

//----------------------------- variables y llamados ---------------------------------------

let tbody = document.querySelector("tbody")
index(coders, tbody)                               //printCodersInnerHTML(coders,tbody)

let btnCreator = document.querySelector("#btn-creator")

let form = document.querySelector("#form")
let nameCoder = document.querySelector("#name")
let lastNameCoder = document.querySelector("#last-name")
let emailCoder = document.querySelector("#email")
let btnSave = document.querySelector("#btn-save")

let table = document.querySelector("table")

let idCoderToEdit
console.log(idCoderToEdit)

//----------------------------- addEventListeners ---------------------------------------

form.addEventListener('submit', (event) => {
    if (idCoderToEdit === undefined) {
        createCoderForm(nameCoder, lastNameCoder, emailCoder, coders)
        showSmallAlertSuccess('saved')
    }else {
        for (const coder of coders) {
            if (coder.id == idCoderToEdit){
                coder.username = username.value
                coder.lastName = lastName.value
                coder.email = email.value
            }
        }
        showSmallAlertSuccess('your coder was edited')
        idCoderToEdit = undefined
    }
    
    form.reset()
    event.preventDefault()
    index(coders, tbody)  
})

table.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-danger')) {
        let idCoderToDelete = event.target.getAttribute('data-id')
        deleteCoderButton(idCoderToDelete, coders)
        showSmallAlertSuccess('coder was deleted')
        index(coders, tbody)
    }

    if (event.target.classList.contains('btn-primary')){
        showSmallAlertSuccess('we are ready to edit')
        idCoderToEdit = event.target.getAttribute('data-id')
        console.log(idCoderToEdit)

        let userFound = coders.find(coder => coder.id == idCoderToEdit)

        username.value = userFound.username
        lastName.value = userFound.lastName
        email.value = userFound.email
    }
})



btnCreator.addEventListener('click', () => {
    createCoder(coders)
    index(coders, tbody)
})

