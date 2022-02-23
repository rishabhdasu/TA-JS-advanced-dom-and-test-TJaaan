let data = [
    "sports_kabaddi",
    "surfing",
    "kayaking",
    "skateboarding",
    "sledding",
    "sports_rugby",
    "sports_gymnastics",
    "snowshoeing",
    "paragliding",
    "sports_cricket",
    "sports_football",
    "hiking",
    "sports_esports",
    "sports_soccer",
    "catching_pokemon",
    "sports_basketball",
    "sports_tennis",
    "sports_volleyball"
];

let icons = document.querySelector(".icons");
let icons2 = document.querySelector(".icons2");
// let text = document.querySelector(".text");


function createUI() {
    for(let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * data.length);
        let random = data[index];
        let span = document.createElement("span");
        span.classList.add("material-icons", "draggable", "flex",  "align-center" , "justify-center");
        span.innerText = random;
        let attr = document.createAttribute('draggable');
        attr.value = 'true';
        span.setAttributeNode(attr);
        let attr2 = document.createAttribute('draggable');
        attr2.value = 'true';
        let span2 = document.createElement("span");
        span2.setAttributeNode(attr2);
        span2.classList.add("material-icons", "draggable", "flex", "align-center" , "justify-center");
        let texts = document.createElement("div");
        texts.classList.add("texts",  "flex", "align-center" , "justify-center");
        let h2 = document.createElement("h2");  
        h2.innerText = random;
        texts.append(h2);
        let iconsDrop = document.createElement("div");
        iconsDrop.classList.add(".iconsDrop");
        // li.appendChild(document.createTextNode(item));
        icons.append(span);
        iconsDrop.append(span2, texts); "flex",
        icons2.append(iconsDrop);
        addEventsDragAndDrop(span);
        addEventsDragAndDrop(span2);
}
}

function dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  };
  
  function dragEnter(e) {
    this.classList.add('over');
  }
  
  function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
  }
  
  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  
  function dragDrop(e) {
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }
  
  function dragEnd(e) {
    var listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function(item) {
      item.classList.remove('over');
    });
    this.style.opacity = '1';
  }
  
  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
  }

  let listItems = document.querySelectorAll('.draggable');
[].forEach.call(listItems, function(item) {
  addEventsDragAndDrop(item);
});
  

createUI();