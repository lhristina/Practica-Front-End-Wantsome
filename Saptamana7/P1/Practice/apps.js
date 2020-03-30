// 1.Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul:
//  “Sunt la iteratia numarul [index]” 
// - Scrieti codul in doua variante

const newArray = function (number) {

    for (let i = 1; i < number; i++)

        console.log('Sunt la iteratia ' + i)

}



function otherArray(numb) {

    let count = 1;
    while (count <= numb) {
        console.log('Sunt la iteratia ' + count)
        count++
    }
}

function otherArray2(numb) {
    let count = 1;
    while (true) {
        if (count <= numb) {
            console.log('Sunt la iteratia ' + count)
            count++
        } else {
            break
        }
    }
}

// 2.Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa
// Scrieti codul in doua variante




function printElements(input) {

    for (let i = 0; i < input.length; i++) {
        console.log(input[i])
    }
}

function printElements2(input) {

    let count = 0;
    while (true) {
        if (count < input.length) {
            console.log(input[count])
            count++
        }
        else {
            break
        }
    }
}


// 3.Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa - 
// scrieti codul in doua variante;

const specialObject = function (input) {

    for (let key of Object.keys(input)) {
        console.log(key, input[key]);
    }
}

function specialObject2(input) {

    for (let key in input) {
        console.log(key, input[key]);
    }
}

// Cerinte: 
// 1.0 100 200 300 400 500 600 700 800 900 1000
// 2.1 2 4 8 16 32 64 128
// 3.0 2 4 6 8 10
// 4.3 6 9 12 15
// 5.9 8 7 6 5 4 3 2 1 0
// 6.1 1 1 2 2 2 3 3 3 4 4 4
// 7.0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

//Ex1

for (let i = 0; i <= 10; i++) {
    console.log(i * 100)
}

//Ex2
for (let i = 0; i < 8; i++) {
    console.log(Math.pow(2, i))
}

//Ex3
for (let i = 0; i < 6; i++) {
    console.log(i * 2)
}


//EX4
for (let i = 1; i <= 5; i++) {
    console.log(3 * i)
}


//Ex5
for (let i = 10; i >= 0; i--) {
    console.log(i)
}


//Ex6
for (let i = 1; i <= 4; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i)
    }
}

//Ex7
for (let i = 0; i < 3; i++) {
    console.log(`parent ` + (i))
    for (let j = 0; j <= 4; j++) {
        console.log(j)
    }
}


// PRACTICE: LoopsCerinte: 
// Implementati functia stream. 
// Trebuie sa: 
// ●accepte ca argumente 2 functii: conditionalFn, actionFn.
// ●apeleaza actionFn pana cand conditionalFn returneaza fals
// ●nu returneaza nimic



conditionalFn = function () { return false; };
actionFn = function () {
    console.log("Vreau sa ies la  tabla!");
};


function stream(conditionalFn, actionFn) {
    while (conditionalFn()) {
        actionFn()
    }
};

actionFn = function () {
    console.log("Vreau sa ies la  tabla!");
};
counter = 10;
conditionalFn = function () {
    counter--;
    return counter >= 0;
};


function stream(conditionalFn, actionFn) {
    for (let i = 0; i < 10; i++) {

        if (conditionalFn()) {
            actionFn()
        }
    }
}

// Cerinta: 
// Implementati functia computeSumOfArrayElements. 
// Trebuie sa:
// ●accepte ca argument un array format din numere
// ●returneze suma numerelor din array
// ●foloseasca instructiunea while

function computeSumOfArrayElements(input) {
    let counter = 0
    let sum = 0
    while (counter < input.length) {
        sum += input[counter]
        counter++
    }
    return sum
}

function computeSumOfArrayElements2(input) {
    let sum = 0
    for (i = 0; i < input.length; i++) {
        // sum = sum + input[i]
        sum += input[i]

    }
    return sum
}

//Homework week 7 

// 1.Scrieti un for care itereaza de la 0 la 20.
//  Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va raporta acest lucru in consola. 
//  (exemplu: “2 este numar par”); 
//  Scrieti functia in doua variante: while si for

for (let i = 0; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(`this number ${i} is even`)
    }
    else {
        console.log(`this number ${i} is odd`)
    }
}

//contruiesc o variabila count, ma folosesc de while - ca sa zic ca atata timp cat countul este mai mic de 20;
//folosesc %2 ca sa vada daca un numar este par sau impar ca mai apoi sa-l afisez in consola


let count = 0
while (count < 20) {
    count++
    if (count % 2 === 0) {
        console.log(`this number ${count} is even`)
    }
    else {
        console.log(`this number ${count} is odd`)
    }
}


//  2.Scrieti un for care itereaza de la 0 la 10. 
//  Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa rezultatul. 
//  (exemplu: “3*9=27”). 
//  Scrieti functia in doua variante: while si for  



for(i=0; i<=10; i++){
    console.log(`${i}*9=${i*9}`)
}

let number=0
while(number<=10){
    number++
    console.log(`${number}*9=${number*9}`)
}


 
//  3.Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
//   (exemplu: 1 * 0 = 0      1 * 1 = 1      ...      1 * 10 = 10 ) 
//   Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”

for(i=0; i<=10; i++){
    console.log(`${1}*${i} = ${i*1}`)
}

// Cerinte: 4.Pentru functia dezvoltata la cerinta 2 de la tema anterioara,
//  verificati si afisati in consola fiecare calificativ care se poate obtine pentru punctajele incepand de 1 la 10. 
//  (exemplu: “Pentru 2, obtii calificativul E. \n  Pentru 7, obtii calificativul B \n ...samd “). 
// Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei dezvoltate la tema anterioara ! 


    const grades = function (x) {

        if (x >= 1 && x <= 3) {
            return `Calificatul corespunzator punctajului ${x} este ${'E'}`
        }
        else if (x > 3 && x <= 6) {
            return `Calificatul corespunzator punctajului ${x} este ${'D'}`
        }
        else if (x >= 7 && x <= 8) {
            return `Calificatul corespunzator punctajului ${x} este ${'B'}`
        }
        else if (x === 9) {
            return `Calificatul corespunzator punctajului ${x} este ${'A'}`
        }
        else if (x === 10) {
            return `Calificatul corespunzator punctajului ${x} este ${'A+'}`
        }
        else {
        return  'Invalid number, check again!'
        }

    }

//definesc o variabila careia ii dau valoarea 1 , atata timp cat 1 este mai mic decat 10 =>
//afiseaza functia grades cu valoare 1 ca mai apoi la valoarea 1, la fiecare iteratie  sa se incrementa cu 1 pana ajunge la 10=10

let a=1
while(a<=10){
    console.log(grades(a))
    a++
}

// for(i=1;i<=10; i++){
//     console.log(grades(i))

// }