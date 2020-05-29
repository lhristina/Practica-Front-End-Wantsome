// Cerinte: 1.Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza
//  daca valoarea este mai mica sau mai mare decat 10 - se va face reject /
//  resolve in functie de valoarea de adevar a conditiei de comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

function promiseNumber(number) {
    return new Promise((resolved, rejected) => {
        if (number < 10) {
            resolved(number);
        } else {
            rejected(number);
        }
    })
}
promiseNumber(3)
    .then((result) => {
        console.log(`Numarul ${result} este mai mic`)
    })
    .catch((result) => {
        console.log(`Numarul${result} este mai mare`)
    });


//EX2
// 2.Creati o functie care primeste un string ca si argument si returneaza un Promise 
// care testeaza daca acesta contine sau nu cuvantul “promise” 
// - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

function includePromise(string) {
    return new Promise((resolved, rejected) => {
        const splitString = string.split(" ")
        const includesWord = splitString.includes("promise")
        if (includesWord) {
            resolved(string)
        } else {
            rejected(string)
        }
    })
}

includePromise('This is something else')
    .then((result) => {
        console.log(`'${result}' includes the word 'promise' `)
    })
    .catch((result) => {
        console.log(` '${result}' did not include the word 'promise'`)
    });

//EX3
// 3.Creati o functie care primeste un singur parametru si returneaza un Promise. 
// Folosind setTimeout, dupa 500ms, acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: 
// daca input-ul este un string, Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; 
// daca input-ul nu este un string, Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

function promisedString(input) {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            if (typeof input === "string") {
                resolved(input.toLocaleUpperCase())
            } else {
                rejected(input)
            }
        }, 5000)

    });
}

promisedString(4)
    .then((result) => {
        console.log(`this is the uppercased string ${result}`)
    })
    .catch((error) => {
        console.log(`${error} is not a string`)
    });

//Variante rezolvata de Lucian 
const promiseForString = (inputStr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof inputStr === "string") {
                resolve(inputStr.toUpperCase());
            } else {
                reject(inputStr);
            }
        }, 3000);
    });
};

const returnedPromiseCorrectly = promiseForString("myString");
const returnedPromiseIncorrectly = promiseForString(4);

returnedPromiseCorrectly
    .then((result) => {
        console.log(`String-ul uppercased este:  ${result}`);
    })
    .catch((error) => {
        console.log(`String-ul pentru cazul de eroare este: ${error}`);
    })
    .finally(() => console.log("Promise-ul a fost executat"));

returnedPromiseIncorrectly
    .then((result) => {
        console.log(`String-ul uppercased este:  ${result}`);
    })
    .catch((error) => {
        console.log(`String-ul pentru cazul de eroare este: ${error}`);
    })
    .finally(() => console.log("Promise-ul a fost executat"));



//EX4
// 4.Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). 
// Prima functie, capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea. 
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise 
// si va sorta cuvintele in ordine alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.

const capitalizeWords = function (array) {
    return new Promise((resolve, reject) => {
        let capitaziled = array.map(function (n) {
            if (typeof (n) === "string") {
                return n.toUpperCase()
            }
            else {
                reject(`Not a string`)
            }
        })
        if (capitaziled) {
            resolve(capitaziled)
        }
    })
}


const sortWords = function (array) {
    return new Promise((resolve, reject) => {
        const sort = array.sort()
        if (sort) {
            resolve(sort)
        }
        else {
            reject(`Not sorted`);
        }
    })
}

capitalizeWords(["ana", "vrea", "mere", 1])
    .then((result) => {
        console.log(result)
        return sortWords(result)
    })
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });





//EX5
//5.Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere ( cel putin 3 )


const url = "http://swapi.dev/api/planets/?page=2"


const getPlanetsName = function (url) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open('GET', url)
    request.onload = function () {
      const data = JSON.parse(this.responseText)
      let result = data.results.map(function (n) {
        return n.name
      })
      if (request.status == 200) {

        resolve(result)
      }
      else {
        reject(Error(this.statusText))
      }
    };
    request.onerror = function () {
      reject(Error("Network Error"))
    }
    request.send();
  });
}

getPlanetsName(url).then(function (response) {
  console.log("Success!", response);
}, function (error) {
  console.error("Failed!", error);
})



//part2

const url2= "http://dummy.restapiexample.com/api/v1/employees"

const employeeName = function (url2) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open('GET', url2)
    request.onload = function () {
      const data = JSON.parse(this.responseText)
      let result = data.data.map(function (n) {
        return n.employee_name
      })
      if (request.status == 200) {
        resolve(result)
      }
      else {

        reject(Error(this.statusText))
      }
    };
    request.onerror = function () {
      reject(Error("Network Error"))
    }
    request.send();
  });
}

employeeName(url2)
.then((response)=> {
  return sortWords(response);
})
.then((response)=>{
  console.log(response);
})
.catch((error)=>{
  console.log(error)
})
