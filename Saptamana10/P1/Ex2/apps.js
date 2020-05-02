//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html
//done

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"


const postIt = document.querySelector('#exButton') 

const postTheGossip = function() {
    const name= document.querySelector('#name').value;
    const adjective= document.querySelector('#adjective').value;
    const random= document.querySelector('#random-word').value;
    alert (`${name} is very ${adjective} and crazy like a ${random}`);
}
postIt.addEventListener('click', postTheGossip);


