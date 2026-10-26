let myNodelist = document.getElementsByTagName("LI");

// for (let i = 0; i < myNodelist.length; i++) {
//   let btn = document.createElement("BUTTON");
//   let txt = document.createTextNode("Delete");
//   btn.className = "close";
//   btn.appendChild(txt);
//   myNodelist[i].appendChild(btn);
// }

for (let singleNode of myNodelist) {
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete!"
    deleteBtn.className = "close"
    singleNode.appendChild(deleteBtn);
}




let allCloseBtns = document.getElementsByClassName("close");

for (let eachCloseBtn of allCloseBtns) {
    eachCloseBtn.addEventListener('click', function () {
        this.parentElement.style.display = "none"
    });
}

// function hideItems(){
//     this.parentElement.style.display = "none"
// }

// for(eachCloseBtn of allCloseBtns){
//     eachCloseBtn.onclick = hideItems
// }



let list = document.querySelector('ul');

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});


function newTask() {
    let input = document.getElementById("myInput");
    let text = input.value;

    if (text === "") {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = text;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete!";
    deleteBtn.className = "close";
    deleteBtn.addEventListener('click', function () {
        this.parentElement.style.display = "none";
    });
    li.appendChild(deleteBtn);

    document.getElementById("myUL").appendChild(li);
    input.value = "";
}
