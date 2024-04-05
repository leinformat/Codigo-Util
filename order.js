// VARIABLES
let unSorter = document.querySelectorAll('.logo-list__card');
let sorter = unSorter;
let container = document.querySelector('.container');

// EMPTY THE CONTAINER
container.innerHTML='';

// INITIALIZE THE NEW DATA
let data =[];

// CREATE THE NEW DATA
sorter.forEach((value,i) => {
    data[i] = { value, sort: Math.random() };
});

// ORDER THE NEW DATA
data.sort((a, b) => a.sort - b.sort);

// INSERT THE NEW DATA IN THE DOM
data.map((card)=>{
    container.appendChild(card.value);
});
