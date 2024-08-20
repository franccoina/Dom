// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

console.log('uno')
console.log('dos')

setTimeout(() => {
    //alert('ejemplo')
}, 10000);

console.log('tres')
console.log('cuatro')

let tbody = document.querySelector("tbody")
let btnNew = document.querySelector('#nueva-categoria')

btnNew.addEventListener('click', () => {
    create()
})


function create(){
    const newCategories ={
        name:'games',
        image:'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
    }

    let response = fetch("https://api.escuelajs.co/api/v1/categories",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        //con JSON, stringly se convierte el onjeto a JSON
        body: JSON.stringify({
            newCategories
        }),
    })
}

async function consultar(){
    try{
        let respuesta = await fetch('https://api.escuelajs.co/api/v1/categories')
        console.log(respuesta)
        let datos = await respuesta.json()
        console.log(datos)
        if (!respuesta.ok){
            throw {
                status: respuesta.status,
                statusText: respuesta.statusText
            }
        }
        return datos
        }catch (error) {
            let message = error.statusText || 'Ocurrió un error'
            tbody.innerHTML = `<p><b>Error</b>${error.status}:${message}</p>`
        }
}

let info = await consultar()
console.log(info)

function index(datos){
    datos.forEach(category => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${category.id}</th>
            <td class="text-capitalize">${category.name}</td>
            <td><img src="${category.image}" width="100px" alt="Img For ${category.name}"></td>
            <td>${category.creationAt}</td>
            <td>${category.updatedAt}</td>
        </tr>`
    })
}

consultar()
index(info)



//Types of STATUS:
//      200: Success
//      404: Error Not Found, My bad
//      500: Error From Server