let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    const ul = document.createElement("ul");
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(ul);
    ul.style.listStyle = "none";
    btn.textContent = "Dodaj 10 elementów";
    btnReset.textContent = "Wyczyść";
    btn.style.fontSize = "28px";
    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);

}

const createLiElements = () => {
    for ( let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);
    }

 }



const cleanList = () => {
    document.querySelector('ul').textContent = "";
    orderElement = 1;
    size = 10;

}

init()