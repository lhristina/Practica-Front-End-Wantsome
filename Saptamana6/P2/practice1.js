
//Ex1
// 1.Scrieti o functie de tip named function denumita greatestNrBetween care:
// -Primeste ca argumente doua numere
// -Returneaza numarul care este mai mare
// -Apelati functia de doua ori si afisati pe ecran textul: 
// “Numarul mai mare dintre 5 si 10 este 10“



function greatestNrBetween(x, y) {

    if (x > y) {
        return `Numarul mai mare dintre ${x} si ${y} este ${x} `
    }
    else if (x < y) {
        return `Numarul mai mare dintre ${x} si ${y} este ${y} `
    }
    else {
        return `Numerele ${x} si ${y} sunt egale`
    }

};


//Ex2
// 2.Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
// -Primeste ca argument codul unei limbi: “en”, “es”, “de”
// -Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi ) 
// -Daca limba nu este specificata, trebuie sa returneze textul pentru limba englezaApelati functia pentru fiecare caz in parte.

const helloWorldInLang = function (language) {

    if (language === 'en') {
        return `Hello!`
    }
    else if (language === 'de') {
        return `Hallo!`
    }
    else if (language === "es") {
        return `Ola!`
    }
    else {
        return `Hello!`
    }
};


// 3.Scrieti o functie numita pluralizeWord care:-accepta doua argumente: 
// un substantiv in engleza si un numar-returneaza numarul si forma de plural corespunzatoare substantivului, 
// precum: “5 cats”, “1 dog” 
// -adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 


const pluralizeWord = function (word, number) {

    if (number === 1) {
        return `${number} ${word}`
    }
    else if (number > 1) {
        if (word.endsWith('o')) {
            return `${number} ${word}es`
        }
        else if (word.endsWith('fe')) {
            return `${number} ${word.slice(0, -2)}ves`
        }

        else {
            return `${number} ${word}s`
        }
    }
    else {
        return `there is no plural`
    }
}


// 4.Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000)
//  si calculeaza taxa corespunzatoare considerand urmatoarele criterii:
// -daca angajatul castiga anual o suma mai mica de $30,000, 
// taxa este 0%
// -daca venitul anual se situeaza intre $50,000 - $99,999,taxa calculata trebuie sa fie 35%
// -pentru venit mai mare de $100,000,taxa se calculeaza ca procentaj de 40%
// Returnati un text care sa aiba un format asemanator:
//  “Pentru un venit anual de x, aveti de platit taxe in valoare de y”

const salaryTax = function (salary) {
    if (salary <= 30000) {
        return `For an anual salary of ${salary}$ your tax is 0%`
    }
    else if (salary >= 50000 && salary <= 99999) {
        return `For an anual salary of ${salary}$ your tax is ${salary * 0.35}$`
    }
    else if (salary > 100000) {
        return `For an anual salary ${salary}$ your Tax is ${salary * 0, 4}$`
    }
    else {
        return `Not calculated tax`
    }
}

// Scrieti in doua variante o functie care accepta ca argument o valoare numerica
//  pentru un parametru numit points si afiseaza:
// - AA if points is greater than 90
// - AB if points is greater than 80  and less than or equal to 90
// - BB if points is greater than 70 and less than or equal to 80
// - BC if points is greater than 60 and less than or equal to 70
// - CC if points is greater than 50 and less than or equal to 60
// - CD if points is greater than 40 and less than or equal to 50
// - DD if points is greater than 30 and less than or equal to 40
// - FF if points is less than or equal to  30


const points = function (pointer) {
    if (pointer > 90) {
        return 'AA'
    }
    else if (pointer > 80 && pointer <= 90) {
        return 'AB'
    }
    else if (pointer > 70 && pointer <= 80) {
        return 'BB'
    }
    else if (pointer > 60 && pointer <= 70) {
        return 'BC'
    }
    else if (pointer > 50 && pointer <= 60) {
        return 'CC'
    }
    else if (pointer > 40 && pointer <= 50) {
        return 'CD'
    }
    else if (pointer > 30 && pointer <= 40) {
        return 'DD'
    }
    else if (pointer <= 30) {
        return 'FF'
    }
    else 'Error'
}


let pointsB = function (pointer) {
    switch (true) {
        case (pointer > 90): return 'AA';
            break;
        case (pointer > 80 && pointer <= 90): return 'AB';
            break;
        case (pointer > 70 && pointer <= 80): return 'BB';
            break;
        case (pointer > 60 && pointer <= 70): return 'BC';
            break;
        case (pointer > 50 && pointer <= 60): return 'CC';
            break;
        case (pointer > 40 && pointer <= 50): return 'CD';
            break;
        case (pointer > 30 && pointer <= 40): return 'DD';
            break;
        case (pointer <= 30): return 'FF';
        default: return "ABCD"
    }
}


// 6. Scrieti o functie care testeaza daca o anumita data introdusa este in weekend: 
// Test Data :console.log(is_weekend('Nov 15, 2014')); 
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));
// Output :"weekend"
// "weekend"undefined

//am creat o functie expression anonimus cu parametru date
//ca sa aflu in ce zi a saptamanii se afla data pe care o pun ca argument am nevoie de object constructor new pt obiectul de tip Date
//acesta imi va retruna in ce zi a saptamanii de la 0 la 6 este  data pe care va urma sa o introduc 
//am captat aceasta valoare intr-o variabila ca apoi sa compar numelerele folosindu`ma de if si else if.


const is_weekend = function (date) {
    let newDate = new Date(date);
    let weekendDay = newDate.getDay();

    if (weekendDay === 0 || weekendDay === 6) {
        return 'It`s weekeend'
    }
    else {
        return 'It is not weekend'
    }
}



//Week 6 Homework

// 1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. 
// In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

//am creat o variabila care a va captura numarul CNP-ului in string,ca mai apoi sa aflu indexul primului caracter al CNP
//dupa captarea primului caracter al stringului folosesc metoda paseInt pentru transformarea stringului in numar
//ma folosesc de operatorul remainder %2 pentru a afla daca numarul este par sau impar  
//daca este impar atunci va fi barbat , par femeie



function extractGender(CnpNumber) {
    let number = CnpNumber.toString()[0];


    if (parseInt(number) % 2 === 1) {
        return "You are a man"
    }
    else if (parseInt(number) % 2 === 0) {

        return "You are a woman"
    }

}

// 2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10
//  si decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".


//am creat o function expression anonimous dand ca argumente valorile necesare pt afisarea punctajului

const grades = function (x) {
    if (x > 1 || x <= 3) {
        return `Calificatul corespunzator punctajului ${x} este ${'E'}`
    }
    else if (x > 3 || x <= 6) {
        return `Calificatul corespunzator punctajului ${x} este ${'D'}`
    }
    else if (x > 7 || x <= 8) {
        return `Calificatul corespunzator punctajului ${x} este ${'B'}`
    }
    else if (x === 9) {
        return `Calificatul corespunzator punctajului ${x} este ${'A'}`
    }
    else if (x === 10) {
        return `Calificatul corespunzator punctajului ${x} este ${'A+'}`
    }
    else {
        'Invalid number, check again!'
    }

}

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma:
//  "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. 
//  In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " 
//  Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. 
//  Una dintre implementari trebuie sa fie bazata pe Object Literals 
// ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )


const cars = function (model) {

    if (model == "Perestroika") {
        return `The model ${model} is made in Rusia`
    }
    else if (model == "Lada Samara") {
        return `The model ${model} is made in Rusia`
    }
    else if (model == "Pyeonghwa") {
        return `The model ${model} is made in North Coreea`
    }
    else if (model == "Plymouth") {
        return `The model ${model} was made in USA`
    }
    else if (model == "Hidustan Ambassador") {
      return  `The model ${model} is made in India `
    }
    else if  (model == "carutaCuCai"){
        return `This model ${model} can be admired in Romania!`
    }

    else{
        return 'This model ${model} is Unknown'
    }

}

function specialCars (model){
    switch(model){
        case "Perestroika": return `The model ${model} is made in Rusia`;
        break;
        case "Lada Samara": return `The model ${model} is made in Rusia`;
        break;
        case "Pyeonghwa" : return `The model ${model} is made in North Coreea`;
        break;
        case "Hidustan Ambassador": return `The model ${model} is made in USA`;
        break;
        case "carutaCuCai": return `This model ${model} can be admired in Romania!`;

        default: return 'This model ${model} is Unknown';
    }
}

function buyCar(model){
    carModels = {

    "Perestroika": 'Rusia',
    "Lada Samara": 'Rusia',
    "Pyeonghwa": 'NorthCoreea',
    "Hidustan Ambassador": 'UnitedStates',
    "carutaCuCai": 'Romania',
    'default': `This model ${model} is Unknown` 

    };
    if (Object.keys(carModels).includes(model)){
   return `This model ${model} is made in ` + (carModels[model])
}
    else {
        return carModels['default']
    }
}

// 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var cars = [
//   {name: "John",  salary: 20000 },
//   { name: "Danny", salary: 30500 },
//   { name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat

//voi crea o functie IIFE
//in interiorul functiei voi apune colectia de obiecte cars 
//voi sorta colectia folosind proprietatea salary a fiecarui obiect din array cu metoda sort 

(function(){
let cars = [

  {name: "John",  salary: 20000 },
  { name: "Danny", salary: 30500 },
  { name: "Bekker", salary: 15000 }

]
    return cars.sort((a,b)=> a.salary - b.salary)
})();



























