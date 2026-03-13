// select all editable cells
const editableCells = document.querySelectorAll('[contenteditable="true"]');

// load saved data
window.onload = function () {

let savedData = JSON.parse(localStorage.getItem("budgetData"));

if(savedData){

editableCells.forEach((cell, index) => {

if(savedData[index]){
cell.innerText = savedData[index];
}

});

}

};

// save data whenever user edits
editableCells.forEach((cell, index) => {

cell.addEventListener("input", () => {

let data = [];

editableCells.forEach(c => {
data.push(c.innerText);
});

localStorage.setItem("budgetData", JSON.stringify(data));

});

}); 

