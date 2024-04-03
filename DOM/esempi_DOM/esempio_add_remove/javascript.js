var list = document.getElementById("myList"); // collegamento alla lista

var items = ["Elemento 1", "Elemento 2", "Elemento 3"];

function AddElement() {

  items.forEach(function(item) {
    var li = document.createElement("li"); // creare element
    li.textContent = item; // scrvici elemento della lista items
    list.appendChild(li); // iinseriscilo dentro la mia lista
  });
}