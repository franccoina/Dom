//----------------------------- print con innerHTML ---------------------------------------

//printCodersInnerHTML(coders,tbody)

export function index(coders, tbody) {
    tbody.innerHTML = ``
    coders.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td class="text-capitalize">${coder.username}</td>
            <td class="text-capitalize">${coder.lastName}</td>
            <td>${coder.email}</td>
            <td>
                <button id="btn-delete" data-id=${coder.id} type="button" class="btn btn-danger">delete</button>
                <button id="btn-edit" data-id=${coder.id} type="button" class="btn btn-primary">edit</button>
                <button id="btn-details" data-id=${coder.id} type="button" class="btn btn-warning">details</button>
            </td>
        </tr> `
    });
}

//index()

//----------------------------- print con basic elements ---------------------------------------

function printCodersBasicElements(coders, tbody) {
    coders.forEach(coder => {
        let tr = document.createElement("tr")
        for (let i = 0; i < 4; i++) {
            let td = document.createElement("td")
            tr.appendChild(td)
        }

        tr.firstElementChild.textContent = coder.id
        tr.firstElementChild.nextElementSibling.textContent = coder.username
        tr.firstElementChild.nextElementSibling.nextElementSibling.textContent = coder.lastName
        tr.lastElementChild.textContent = coder.email

        //tr.children[0].textContent = coder.id
        //tr.children[1].textContent = coder.name
        //tr.children[2].textContent = coder.lastName
        //tr.children[3].textContent = coder.email

        tbody.appendChild(tr)
    });
};

//printCodersBasicElements()

//----------------------------- creador de nuevo coder ---------------------------------------

export function createCoder(coders) {
    let idNew = coders.length + 1
    let nameNew = prompt('Enter your name:')
    let lastNameNew = prompt('Enter your last name:')
    let emailNew = prompt('Enter your email:')

    coders.push({
        id: idNew,
        username: nameNew,
        lastName: lastNameNew,
        email: emailNew
    })
    return coders;
}

//----------------------------- creador de nuevo coder con form ---------------------------------------

export function createCoderForm(usernameCoder, lastNameCoder, emailCoder, coders) {
    let tempCoder = {
        id: Date.now(),
        username: usernameCoder.value,
        lastName: lastNameCoder.value,
        email: emailCoder.value
    }

    coders.push(tempCoder)
}

export function deleteCoderButton(idCoderToDelete, coders) {
    coders.forEach((coder, index) => {
        if (coder.id == idCoderToDelete){
            coders.splice(index,1)
        }
    })
}

