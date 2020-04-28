// Adaugati un tag script la final


// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"

const font = document.querySelector('body')

font.style.fontFamily = "Arial, sans-serif";


// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
const name = document.querySelector('#name');
name.innerText= 'Loghin Cristina';

const drink = document.querySelector('#fav-drink');
drink.innerText = 'Wine';

const bornPlace = document.querySelector('#born-place');
bornPlace.innerText= 'Botosani'



// Iterati prin fiecare "li" si puneti clasa "listitem". 

let allLi = document.querySelectorAll('li');
for (let li of allLi){
    li.className= "listitem"
}


// Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
const allListitem = document.querySelectorAll('.listitem');
const color= 'red';

for(let listitem of allListitem){
    listitem.style.color= color
}



// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. 

const image = document.createElement('img');
image.src = "https://images.unsplash.com/photo-1587629404066-4610cb5ab878?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

// Puneti acest element(append) la pagina noastra.
document.body.appendChild(image);



//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////