var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector('ul');
var listItems = document.getElementsByTagName("LI");


for (var i = 0; i < listItems.length; i++) {
    var span = document.createElement("span");
    var delBtn = document.createElement("button");
    delBtn.className = "removeButton";
    span.className = "btn-margin";
    delBtn.innerHTML = "Remove";
    span.appendChild(delBtn);
    listItems[i].appendChild(span);
}

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
}, false);

function newListElement() {
    var listItem = document.createElement("li");
    var inputValue = input.value;
    var text = document.createTextNode(inputValue);
    listItem.appendChild(text);
    if (inputValue === "") {
        alert("You must write something!");
    } else {
        list.appendChild(listItem);
    }
    input.value = "";

    var span = document.createElement("span");
    var delBtn = document.createElement("button");
    delBtn.className = "removeButton";
    span.className = "btn-margin";
    delBtn.innerHTML = "Remove";
    span.appendChild(delBtn);
    listItem.appendChild(span);

}

list.addEventListener('click', function(event) {
    if (event.target.className === "removeButton") {
        event.target.parentNode.parentNode.remove();
    }
});

function addAfterClick() {
    if (input.value.length > 0) {
        newListElement();
    }
}

function addAfterKey(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        newListElement();
    }
}


button.addEventListener('click', addAfterClick);
input.addEventListener('keydown', addAfterKey);