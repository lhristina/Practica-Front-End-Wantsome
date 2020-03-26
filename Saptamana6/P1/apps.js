//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.

let array = ['faith', 'compasion', 'love', 'curage', 'pain'];
array.length

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];

let array3 = `${array1},${array2}`;
let array3 = array1.concat(array2);

return array3;

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
 let array1 = ['faith', 'compasion', 'love', 'curage', 'pain']
 Array.isArray(array1);

 let something= "We need to have patience!"
 Array.isArray(something);

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];

let newArray= numbers.join([' and '])

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];

let newCars= cars.push('Kia','Tico')


//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
let newCars= cars.pop('Tico')
return cars;


//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
 let newCars= cars.unshift('Dodge');

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array;

let newCars= cars.reverse()



//Ex9: Avand in vedere rezultatul anterior,
// Folositi o metoda pe array-uri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();


let cars= ["Kia", "Dacia", "Tesla", "Dodge"];

let newCars=cars.splice(3,0,'Trabant','Lada');


//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];

let newArrayX= arrayNumbers.sort((a,b) =>a-b);
let newArrayX= arrayNumbers.sort((a,b) =>b-a);


//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
let fruitsArrayX= fruitsArray.sort();

//Practice2

// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

const car = {
    name: 'Tesla',
    wheels: 4,

}

car.name= car.name.replace('Tesla','Mercedes')
delete car.name;





//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul 
//"proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

const universe= {
    color:'black',
    quantity:'infinite',
    planets:['Pluto','Venus','Earth','Marte'],
    brightness: 'Sun' 
}

let bigUniverse= Object.keys(universe);
let keysInUpperCase= bigUniverse.join(' ').toLocaleUpperCase().split(' ');
let niceUniverse=Object.value(universe);
let valuesInLowerCase=niceUniverse.join(' ').toLowerCase().split(' ');

`${bigUniverse.join(' ')} represinta Universul`




//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.



function rules (){
    return `${this.name} needs to have ${ this.players}  players in order to have fun!`
}
const game ={
    name:'Catan',
    extension:[5, 6, 7],
    players:[6],
    rules:function(){
        return `${this.name} needs to have ${ this.players}  players in order to have fun!`
    }
}



function nume () {
    return 'rahat'
}



//Objects
//Ex4
// Creati un obiect cu cateva proprietati

applePie = {
    name: 'pie',
    ingredients: ['apples', 'dough', 'sugar'],
    flaveor: 'cinnemon',
    quantity: 1
}



// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila

let appleCake = Object.assign(applePie)

// Pe obiectul nou adaugam 2 noi proprietati
appleCake.decoration = "chocolate";
appleCake.surprise = "cheries";


// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = {
    rooms: 3,
    zone: "Bucium",
    animals: 1
}

let mixCake = Object.assign(applePie, myHouse)

// Ex5
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati

const student = {
    firstName: 'Ioana',
    lastName: 'Popescu',
    strenghts: ['English', 'Music'],
    exams: {
        midTerm: 9,
        final: 10

    }
};


// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.

let examsArray = Object.keys(student.exams)

// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
`${examsArray[0]} si ${examsArray[1]} represinta obiectul Exams`

//Ex6
// Avem obiectul :
myObject = {
    name: "John",
    surname: "Applegate",
}
   //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.

   myObject.sortName = function (){
       let newArray= [];
        newArray.push(this.name, this.surname);
        newArray.sort();

       return newArray;
       
   }


   //Ex7
   //Faceti o functie constructor
 
   


   function flower (name, species, color){

       this.name= name;
       this.species= species;
       this.color=color

   }

  
    // Cu functia constructor creati 3 obiecte cu valori diferite

    let MyFlower= new flower ('Rose','intepatoare', 'red');
    let MyFlower2= new flower ('Calendula', 'C. officinalis', 'Yellow');
    let MyFlower3= new flower ('Sage','Lamiaceae', 'green')

    // Pentru toate valorile din acele obiecte transformati-le in litere mari.

    function flower (name, species, color){

        this.name= name.toUpperCase;
        this.species= species.toUpperCase;
        this.color=color.toUpeerCase;
 
    }