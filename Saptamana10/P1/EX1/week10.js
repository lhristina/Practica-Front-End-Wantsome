// EX1

/* 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/


const buttonAlert = document.getElementById('button');
buttonAlert.addEventListener('click', function () {
  alert("You have clicked the button ");
});



/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/


const textInput = document.getElementById('newinput');
textInput.addEventListener('keydown', function () {
  alert("You have change the input text!");
});





/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/

const cameleon = ['red', 'orange', 'blue', 'green', 'purple', 'pink']

const p = document.querySelector('p')

const cameleonEventHandler = function () {
const index= Math.floor(Math.random() * 6)
p.style.color=cameleon[index]
}
document.getElementById('newinput').addEventListener('keypress', cameleonEventHandler);

