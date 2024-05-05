//      Document Object Model
// Insert Me

console.group('Inserción')

//          Primero llamamos a nuestro contenedor padre para poder meter lo que
//          queremos crear dentro de este

const main = document.querySelector('main');

//          Ahora si creamos nuestro elemento y le agregamos sus atributos

//const ragdollCat = document.createElement('img')

//ragdollCat.id = 'ragdoll-cat'
//ragdollCat.src = './public/img/ragdoll-cat.webp';
//ragdollCat.alt = 'ragdoll-cat';
//ragdollCat.setAttribute('width','300px');

//main.appendChild(ragdollCat)

//          Agregaremos clases a nuestro gato americano

const card = document.querySelector('.card')

//card.classList.remove('border')

//card.classList.add('text-center')

//          Si quisieramos que un bloque html se clone varias veces, desde aca podemos

for (let i = 0; i < 10; i++) {
    main.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="./public/img/american-cat.webp" id ="american-cat" class="card-img-top" alt="american-cat">
            <div class="card-body">
                <h3 class="text-capitalize">scott</h3>
                <p class="card-text">
                    <strong>raza: </strong><span>american cat</span><br>
                    <strong>edad: </strong><span>2</span></p>
                </p>
                <button class="btn btn-danger" type="button">Ver detalles</button>
            </div>
        </div>`;
}
console.groupEnd()