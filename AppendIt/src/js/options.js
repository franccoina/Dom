//      Document Object Model
// Append It: Options

console.group('Inserción a partir de otras maneras')

let btn = document.createElement("button");
btn.classList.add("btn","btn-danger","m-2","rounded","border","border-light");

btn.innerHTML = `
    <button type="button" class="btn border border-light btn-secondary m-2">
        <span>YOU</span>
    </button>` 

let main = document.querySelector("main")

//main.before(btn)

main.after(btn)

console.groupEnd()