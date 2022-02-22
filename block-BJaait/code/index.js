let input = document.querySelector("input");
let ul = document.querySelector(".root");
let addBtn = document.querySelector(".add-btn");


let data = JSON.parse(localStorage.getItem("item")) || [];

input.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        let items = e.target.value;
        data.push(items);
        localStorage.setItem("item", JSON.stringify(data));
        createUI(data, ul);
        document.getElementById("input").value = "";
    }
});

function createUI(data, root = ul) {
    ul.innerHTML = "";
    data.forEach((item, index, event) => {
        let li = document.createElement("li");
        li.innerText = item;
        li.classList.add("box");
        li.draggable = true;
        root.append(li);
    })
}


createUI(data, ul);

// localStorage.clear();