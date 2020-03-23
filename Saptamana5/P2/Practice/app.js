//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.

function multiplyByTen(number) {
    let result = number * 10;
    return result;
}

//Ex2
//Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"

function myNameIs(name) {
    let result = `Numele meu este ${name}`;
    return result;
}

//Ex3 
//Scrieti o functie care sa transforme un numar in string.

function numberToString(num) {
    return num.toString()
}

//Ex4 
//Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.

function square(number) {
    let result = number * number
    return result;
}
//

function square2(number) {
    let result = Math.pow(number, 2);
    return result;
}

//Ex5
// //Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - 
// ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
// //Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.

function findOutTheFuture(jobTitle, company, years, money) {
    let result = `Eu voi fi ${jobTitle} la ${company} in ${years}ani si voi castiga ${money}bani`;
    return result;
}

//Ex6
//Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
// functia are 1 singur parametru - deci va accepta 1 singur argument.
// Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
//BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.

function convertToCatYears(number) {
    let result = `Pisica mea are ${number * 7} ani in ani pisicesti` //cat`s age 
    return result;
}
//Ex7
// Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
// Functia accepta ca parametrii years si coffePerDay.
// Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"

function computeCoffyConsumption(years, coffePerDay) {
    let totalCoffe = coffePerDay * (years * 365);
    let result = `In urmatorii ani ${years} voi bea in total ${totalCoffe} cani de cafea`;
    return result;
}


//EX8 BONUS 
// Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
// rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
// folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.

function calculateCelsiusToFarenheit(celsius) {
    let result = `${celsius} grad Celsius represinta ${((celsius / 5) * 9) + 32} Ferenhite`;
    return result;
}

function calculateFarenheitToCelsius(farenhite) {
    let result = `${farenhite} reprezinta ${((farenhite - 32) * 5) / 9} grade celsius`;
    return result;

}


//STRINGS 

//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
let str = "Daca te simti bine, nu te ingrijora, trece!";
str.indexOf(trece);
//Raspuns: 37



// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
let fruit = "Apple, Lemon, Plum, Kiwi";
fruit.slice(20);


// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
var moreFruits = "Apple, Lemon, Plum, Kiwi";
moreFruits.substring(14, 17);


// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
let replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
replaceName.replace('Mia Kalifa', 'Cristina');

let bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
let re = /Sasha/gi;
bonusName.replace(re, 'Cristina');

// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
text.toLocaleLowerCase();
text.toLocaleUpperCase();

// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
var text1 = "Când ai un";
var text2 = "ciocan";
var text3 = "in mana toate lucrurile ti se par";
var text4 = "cuie";
let result = `${text1} ${text2} ${text3} ${text4}`;
return result;

// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
var word = "Mamaliga"
word[6];
word.charCodeAt(6)

// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
let myCars = cars.split('|')


//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
var firstWord = 'Nu exista';
var secondWord = 'raspunsuri proaste';
let result = `${firstWord.toUpperCase()} ${secondWord.replace('raspunsuri', 'intrebari').toUpperCase()}.`

//HOMEWORK
1.Scrieti o functie care verifica daca un input este sau nu de tip string.
    console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false

function is_string(input) {
    let result = typeof (input);
    if (result === 'string') {
        return true
    }
    else { return false }
}

2.Scrieti o functie care verifica daca un string este gol sau nu.
    console.log(is_Blank(''));
console.log(is_Blank('abc'));
true false

function is_Blank(input) {
    let result = input.length
    if (result === 0) {
        return true
    }
    else { return false }
}

3.Scrieti o functie accepta ca input un string si il transforma intr - un array de cuvinte:
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]

function string_to_array(input) {
    let result = input.split(' ');
    return result;
}

4.Scrieti o functie care transforma un string in forma abreviata:
console.log(abbrev_name("Robin Singh")); "Robin S."

function abbrev_name(name) {
    let lastNameAbb = name.split(' ')[1][0].toLocaleUpperCase();
    let firstName = name.split(' ')[0];
    let result = `${firstName} ${lastNameAbb}.`;
    return result;
}

5.Scrieti o functie care face prima litera a unui string sa fie de tip capital(litera mare):
console.log(capitalize('js string exercises'));
"Js string exercises"

function capitalize(input) {
    let phrase = input[0].toUpperCase();
    let restOfPhrase = input.slice(1);
    let result = `${phrase}${restOfPhrase}.`
    return result;
}


6.Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string - ului:
console.log(truncate_string("Robin Singh", 4));
"Robi"

function truncate_string(name, number) {
    let result = name.slice(0, number);

    return result;
}


7.Scrieti o functie care specifica daca caracterul de la o anumita pozitie specificata dintr - un string este litera mare sau nu:
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false

function isUpperCaseAt(input, number) {
    if (input.charAt(number) === input.charAt(number).toUpperCase()) {
        return true;
    }
    else { return false };
}


8.Scrieti o functie care insereaza un string la o anumita pozitie intr - un alt string:
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."


function insert(phrase, phraseToAdd, position) {
    let phraseArray = phrase.split(' ')
    phraseArray.splice(position, 0, phraseToAdd);
    let result = phraseArray.join(' ');
    return result;
}

9.Scrieti o functie care elimina prima aparitie a unui string dintr - un alt string:
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
"The quick brown fox jumps over lazy dog"

function remove_first_occurance(phrase,wordToRemove){
    let newPhrase= phrase.split(" ");
    let wordToBeRemovedPosition= newPhrase.indexOf(wordToRemove)
    newPhrase.splice(wordToBeRemovedPosition,1)
    let result= newPhrase.join(' ');

    return result;
    
}




9.Scrieti o functie care compara doua string - uri case -insensitive:
console.log(compare_strings('abcd', 'AbcD'));
true;

function compare_string(stringA, stringB) {
    if (stringA.toUpperCase() === stringB.toUpperCase()) {
        return true
    }
    else {
        return false
    }
}





9.Scrieti o functie care face ca primul caracter a unui stringsa fie de tip uncapital:
console.log(Uncapitalize('Js string exercises'));
"js string exercises"

function uncapitalized(input, number) {
    if (input.charAt(number) === input.charAt(number).toLowerCase()) {
        return true;
    }
    else { return false };
}




