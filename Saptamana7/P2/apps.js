//1Scrieti o functie care sa protejeze emailul unui userde ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

const myFunction= function(email){
    let arr =email.split('')
    let startPosition = arr.indexOf('.')
    let endPosition= arr.indexOf('@')
    let result=[]
    for(i=0;i<arr.length;i++){
        if (startPosition<=i && endPosition>=i){

            result+='.'    
        }
        else {
            result+=arr[i]
        }
    }
    return result
}



// //2.Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string de 
//ex: myFunction("i am superman") sa printeze "I Am Superman"

//voi forma o functie care accepta un input 
//pt obtinerea unui array voi folosi split 
//creez o variabila result goala unde voi aduna elementele dintr-un for
//ma folosesc de for of pentru a captura fiecare elemant al aray-ului 
//in interiorul careia creez o variabila pentru a scrie litera cu uppercase
//si o alta pentru a captura restul cuvintlui caruia ii voi face slice
//la final dau push la ambele variabile in prima varianta libera 
//joinma va ajuta sa readuc arry-ul la string-ul initial


let writeInUppercase= function(input){
    let newLine= input.split(' ')
    let result = []

    for(let newWrite of newLine){
        let firstLetter= newWrite[0].toUpperCase()
        let restOfWord= newWrite.slice(1)
        result.push(firstLetter+restOfWord)
        
    }
   return result.join(' ')
}



// 3. Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si
// invers:
myFunction("xxXyYzZZ") sa printeze "XXxYyZzz":

const myFunction2 = function (input) {
    let newArray = input.split('')
    let result = []

    for (i = 0; i < newArray.length; i++) {
        if (newArray[i] === newArray[i].toLowerCase()) {

            result += newArray[i].toUpperCase()
        }
        else {
            result += newArray[i].toLowerCase()

        }


    }
    return result
}

// 4. Scrieti o functie care sa concateneze un string de cate ori ii zicemde 
// ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome".

const myFunction = function (input, number) {

    let result = ""

    for (let i = 0; i < number; i++) {

        result += input
    }
    return result
}


// 5. A palindrome is a word or a phrase that is the same whether you read it backward or forwards, 
// for example, the word 'level'.  Scrieti o functie care verifica daca un string este palindrom; 
// Implementati mai multe variante.

const palindrom = function (input) {
    let newWord = ''

    for (let i = input.length - 1; i >= 0; i--) {

        newWord += input[i]

        console.log(input[i])
    }

    if (newWord === input) {

        return 'Your word is a palindrome'
    }
    else {
        return "Your word is not a palindrome "
    }

}

//6 Implementati o functie care accepta ca argument un array compus
//  din mai multe array-uri de valori numerice si
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

const sortNumbers = function (input) {
    let bigNumber = []

    for (let groups of input) {
        groups.sort(function (a, b) {
            return a - b
        })

        bigNumber.push(groups[groups.length - 1])

    }
    return bigNumber;
}

//7. Implementati o functie care face reverse la un string

const reverse = function (input) {
    let reversedWord = ''

    for (let i = input.length - 1; i >= 0; i--) {
        reversedWord += input[i]

    }
    return reversedWord;
}


// 8. Implementati o functie care calculeaza factorialul unui numar.

const factorial = function (input) {
    let result = 1
    for (let i = 1; i <= input; i++) {
        result *= i


    }
    return result

}

// 9. Implementati o functie care accepta ca argumente 
// doua string-uri si verifica daca primul se termina cu cel din urma.

const together = function (str1, str2) {
    let searchPosition = str1.length - 1 - str2.length

    return str1.includes(str2, searchPosition)

}

const together1 = function (string1, string2) {


    let beginCut = string1.indexOf(string2)

    let restWord = string1.slice(beginCut)
    if (string2 === restWord) {
        return (true)
    } else {
        return (false)
    }
}


//10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. 
// Functia returneaza primul element din array care trece testul specificat


function isEven(number) {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

function checkOdd(array, check) {
    let result = ''
    for (let oddNumber of array) {
        result = oddNumber
        if (!check(oddNumber)) {
            break
        }

    }
    return result;
}

//11. Implementati o functie care accepta ca argumente doua string-uri 
// si verifica daca primul string contine toate literele
// celui de-al doilea string

const verifyLetter = function (str1, str2) {
    for (let letter of str2) {

        if (!str1.includes(letter)) {
            return false
        }

    }
    return true
}

// 12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. 
// Functia afiseaza fiecare element al array-ului pana cand intalneste elementul 
// cu valoarea specificata

const verifyNumber = function (array, value) {

    let result = []

    for (let number of array) {
        result.push(number)

        if (number === value) {

            break
        }

    }
    return result
}
// 13. Scrieti o functie care 
// elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

const isFalse = function (input) {
    let result = []

    for (let item of input) {

        if (item != false) {
            result.push(item)

        }
    }
    return result 
}

// 14. Scrieti o functie care repeta un string de n ori specificate

const repeatString = function(input,n){
   let result= input.repeat(n)

   return result
}

const repeatString2 = function (str, n){
    let result = ''

    for(let i=0;i<n; i++){
        result= result+str
  
    }
return result

 }