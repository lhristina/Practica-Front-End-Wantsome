//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

const sumOfNum = function (a, b) {
    if (a !== b) {
        return a + b;
    }
    else {
        return 5 * (a + b);
    }
}





//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

const testFunction = function (n1, n2) {
    if (n1 + n2 === 30 || (n1 === 30 && n2 === 30)) {
        return true;
    }
    else {
        return false;
    }
}



//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

const findJs = function (str) {

    if (str[0] + str[1] !== 'JS') {
        return `JS${str}`
    }
    else {
        return str;
    }
}

const findJs1 = function (str) {

    if (str.substring(0, 2) !== 'JS') {
        return `JS${str}`
    }
    else {
        return str;
    }
}

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

const removeDuplicates = function (input) {
    let collection = input.toString().split('')
    let newArray = []
    for (let item of collection) {
        if (!newArray.includes(item)) {
            newArray.push(item)
        }
        else {
            continue
        }
    }
    if (parseInt(newArray.join(''))) {
        return parseInt(newArray.join(''))
    } else {
        return newArray.join('');
    }
}




//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const findLongestString = function (str) {
    let strSplit = str.split(' ');
    let result = '';
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            result = strSplit[i];
        }
    }
    return result;
}




//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  


const litteStar = function (input) {
    let result = ""

    for (let i = 0; i < 5; i++) {
        result += '*'
        console.log(result)
    }
}

//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above

}
extractNegativeNumbers([1, 2, -5, 4, -6])
/////////////////////////////////////////////////////////////////////////////////////////
const negativeNumbers = [];

const extractNegativeNumbers = function (array) {
    for (let negNumb of array) {
        if (negNumb <= 0)
            negativeNumbers.push(negNumb)
    }
    return negativeNumbers;
}



//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

const calculate = function (n1, n2, operator) {
    if (operator === 'add') {
        return n1 + n2;
    }
    else if (operator === 'substract') {
        return n1 - n2;
    }
    else if (operator === 'multiply') {
        return n1 * n2;
    }
    else if (operator === 'divide') {
        return n1 / n2;
    }
}



//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7


const isDiv = function (number) {
    if ((Number.isInteger(number / 5)) && (Number.isInteger(number / 3))) {
        return 'BOTH';
    }
    else if (Number.isInteger(number / 3)) {
        return 'THREE';
    }
    else if (Number.isInteger(number / 5)) {
        return 'FIVE';
    }
    else {
        return number;
    }
}


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

const findTime = function (date) {

    switch (new Date(date).getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";

    }
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    let d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let result = `Today is: ${day}\nThe Hour is: ${h}: ${m} :${s}`
    return result;

}





//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. 
// Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

const validPin = function (input) {
    if (input.length === 4 || input.lenght === 6) {
        if (!isNaN(input)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}




//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"


//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false


const isSquareNumber = function (input) {
    if (Number.isInteger(Math.sqrt(input))) {
        return true;
    }
    else return false;
}


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama
// - daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

const isAnagram = function (str1, str2) {
    let newCol1 = str1.toLowerCase().split('');
    let newCol2 = str2.toLowerCase().split('');
    for (let letter of newCol1) {
        if (!newCol2.includes(letter)) {
            return false;
        }
    }
    return true;

}

//WEEK 8 PART 2

//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

const addNumber2 = (input) => {

    let result = 0;
    for (let numb of input) {
        result += 1;
    }
    return result;
}


/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/


const findLongestString = str => {
    let strSplit = str.split(' ');
    let result = '';
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            result = strSplit[i];
        }
    }
    return result;
}

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

const reversedWord = input => {
    let newWord = '';
    for (let i = input.length - 1; i >= 0; i--) {
        newWord += input[i];
    }
    return newWord;
}

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta 
cu urmatoarea litera din alfabet
*/

const replaceWithNextLetter = input => {
    let alfabet = 'abcdefghijklmnopqrstuvxzywABCDEFGHIJKLMNOPQRSTUVXZYW'
    let newWord = "";
    for (let i = 0; i < input.length; i++) {
        let curentPosition = alfabet.indexOf(input[i]);
        let nextLetter = alfabet[curentPosition + 1];
        newWord += nextLetter;
    }
    return newWord;
}


/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica 
si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
const convertToTime = input => (`${Math.floor(input / 60)}:${input % 60}`);

/*
6. Implementati o functie care accepta ca parametru un string 
si returneaza string-ul cu toate literele ordonate alfabetic
*/

const sortAlfabethic = input => (input.split('').sort().join(''));

/*
7. Implementati o functie care accepta ca parametru un string si verifica 
daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

const findThePlus = input => {
    for (let i = 0; i < input.length; i++) {
        let nextPosition = i + 1;
        let previosPosition = i - 1;
        //check only if it is a letter
        if (input[i].toLowerCase() != input[i].toUpperCase()) {
            if ((input[nextPosition] != '+') || (input[previosPosition] != '+')) {
                return false;
            }
        }
    }
    return true;
}