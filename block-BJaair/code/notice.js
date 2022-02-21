let ul = document.querySelector(".notice-root");
let button = document.querySelector("button");
let form = document.querySelector("form");

let cardsData = JSON.parse(localStorage.getItem("cards")) || [];


let titleTarget = document.getElementById("title");
titleTarget.placeholder = "Enter a title";
let categoryTarget = document.getElementById("category");
categoryTarget.placeholder = "Enter a category";


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    cardsData.push({category, title});
    localStorage.setItem("cards", JSON.stringify(cardsData));
    createUI(cardsData, ul);
    titleTarget.value = "";
    categoryTarget.value = "";
});

function handleEdit(event, info, id, label) {
    let elm = event.target;
    let input = document.createElement("input");
    input.value = info;
    input.addEventListener("keyup", (e) => {
        if(e.keyCode === 13) {
            let updatedVal = e.target.value;
            cardsData[id][label] = updatedVal;
            console.log(updatedVal);
            createUI();
            localStorage.setItem("cards", JSON.stringify(cardsData));
        }
    });
    input.addEventListener("blur", (e) => {
            let updatedVal = e.target.value;
            cardsData[id][label] = updatedVal;
            createUI();
            localStorage.setItem("cards", JSON.stringify(cardsData));
    });
    let parent = event.target.parentElement;
    parent.replaceChild(input, elm);
}

function createUI(data = cardsData, root = ul) {
    ul.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((cardInfo, index) => {
        let li = document.createElement("li");
        li.classList.add("theme", "each-card", "flex-24");
        let p = document.createElement("p");
        p.innerText = cardInfo.category;
        p.addEventListener("dblclick", (event) => 
        handleEdit(event, cardInfo.category, index, "category"));
        let h2 = document.createElement("h2");
        h2.innerText = cardInfo.title;
        h2.addEventListener("dblclick", (event) => 
        handleEdit(event, cardInfo.title, index, "title")
        )
        li.append(p, h2)                    
        fragment.appendChild(li);
    })
    root.append(fragment);
}


createUI(cardsData, ul);

