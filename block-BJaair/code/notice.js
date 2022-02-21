let root = document.querySelector(".notice-root");
let title = document.querySelector(".title");
let category = document.querySelector(".category");
let button = document.querySelector("button");

function addItems(event) {
    event.preventDefault();
    let h2 = document.createElement("h2");
    h2.innerText = category.value;
    h2.contentEditable = true;
    let p = document.createElement("p");
    p.innerText = title.value;
    p.contentEditable = true;
    root.append(h2, p);
}


button.addEventListener("onsubmit", addItems);

addItems();

