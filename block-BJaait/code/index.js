// function dragger() {
// let input = document.querySelector("input");
// let ul = document.querySelector(".root");
// let addBtn = document.querySelector(".add-btn");
// let val = input.value;


// let data = JSON.parse(localStorage.getItem("item")) || [];

// input.addEventListener("keyup", (e) => {
//     function addEvent() {
//         if(e.keyCode === 13) {
//             let items = e.target.value;
//             if( items.length !== 0 && items.trim()) {
//                 data.push(items);
//                 localStorage.setItem("item", JSON.stringify(data));
//                 createUI(data, ul);
//                 document.getElementById("input").value = "";
//             }
//         }
//     }
//     addEvent();
// });

// addBtn.addEventListener("click", (e) => {
//     let items = document.getElementById("input").value;
//     function addEvent() {
//             if( items.length !== 0 && items.trim()) {
//                 data.push(items);
//                 localStorage.setItem("item", JSON.stringify(data));
//                 createUI(data, ul);
//                 document.getElementById("input").value = "";
//             }
//     }
//     addEvent();
// });

// function createUI(data, root = ul) {
//     ul.innerHTML = "";
//     data.forEach((item) => {
//             let li = document.createElement("li");
//             li.innerText = item;
//             li.classList.add("box", "draggable");
            // let attr = document.createAttribute('draggable');
            // attr.value = 'true';
            // li.setAttributeNode(attr);
            // // li.appendChild(document.createTextNode(item));
            // root.append(li);
            // addEventsDragAndDrop(li);
//         })
// }

// function dragStart(e) {
//     this.style.opacity = '0.4';
//     dragSrcEl = this;
//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.innerHTML);
//   };
  
//   function dragEnter(e) {
//     this.classList.add('over');
//   }
  
//   function dragLeave(e) {
//     e.stopPropagation();
//     this.classList.remove('over');
//   }
  
//   function dragOver(e) {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//     return false;
//   }
  
//   function dragDrop(e) {
//     if (dragSrcEl != this) {
//       dragSrcEl.innerHTML = this.innerHTML;
//       this.innerHTML = e.dataTransfer.getData('text/html');
//     }
//     return false;
//   }
  
//   function dragEnd(e) {
//     var listItems = document.querySelectorAll('.draggable');
//     [].forEach.call(listItems, function(item) {
//       item.classList.remove('over');
//     });
//     this.style.opacity = '1';
//   }
  
//   function addEventsDragAndDrop(el) {
//     el.addEventListener('dragstart', dragStart, false);
//     el.addEventListener('dragenter', dragEnter, false);
//     el.addEventListener('dragover', dragOver, false);
//     el.addEventListener('dragleave', dragLeave, false);
//     el.addEventListener('drop', dragDrop, false);
//     el.addEventListener('dragend', dragEnd, false);
//   }

//   let listItems = document.querySelectorAll('.draggable');
// [].forEach.call(listItems, function(item) {
//   addEventsDragAndDrop(item);
// });

// createUI(data, ul);

// // localStorage.clear();
// }

// dragger();