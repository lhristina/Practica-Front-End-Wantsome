/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];


const newdata = myData.filter(n=> n.active)



/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate items cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]

const miledistance = arr => arr.map(road => `${road.distance * 0.621371}miles`)
console.log(miledistance(distances))


//EX3
// Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos:

const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const newRel= releases.map(n=> `${n.id} ${n.title}`)




//EX4
// Returnati id-urile videourilor care au rating 5.0
const newReleases2 = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];
const ratingVideo= newReleases2.filter(n=> n.rating ===5.0)

//EX5
// Vreau la final sa am o lista de video ids

const movieLists1 = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];
const videos= movieLists1.map(n=>n.videos).map(m=>m.map(l=>`${l.id}${l.title}`))

//EX6

//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieLists2 = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

const video = movieLists2.map(n=>n.videos).flat()
let finalList= video.map(item=>{
    let img150= item.boxarts.filter(box=>box.width===150)[0];
    return {
        id:item.id,
        title:item.title,
        img:img150,
        url:item.url}
});


//EX7

//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()


const moveLetters = function (string) {
    let newarray = string.split('')
    let position = newarray.map(function(n) {
        let newletter = String.fromCharCode(n.charCodeAt(0) + 1)
        return newletter
    })
    return position.join('')
}
}

// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"


const changeWordCase = function(string){
    let splitString= string.split(' ')
    let result= splitString.map(function(n,index){
        if (index%2===0){
            return n.toUpperCase()
        }
        else{
            return n.toLowerCase()
        }   
    })
    return result.join(' ')
}

//EX8
// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats= arr.map(function(n){
    return{
        this:name=name,
        this:sex=sex,
        this:age=age,
        this:species=species
    }
})



// let allCats =  code
// let allHumans =  code
// let allFemales =  code
// let totalOfAllAges =  code
// let averageAgeOfCats =  code
// let averageAgeOfHumans = code
// let avgLengthOfNames = code

let allCats = arr.filter(n => n.species === "cat")
let allHumans = arr.filter(n => n.species === 'human')
let allFemales = arr.filter(n => n.sex === 'f' && n.species === 'human')
let totalOfAllAges = arr.reduce((a, b) => (a + b.age), 0);

let averageAgeOfCats = arr.reduce((a, b) => {
    if (b.species === 'cat') return a +b.age;
    return a
},0) / allCats.length;

let averageAgeOfHumans= arr.reduce((a,b)=>{
    if(b.species==='human')return a+b.age;
    return a
},0)/ allHumans.length;

let avgLengthOfNames = arr.reduce((a,b)=>{
  return a+ b.name.length

},0) /arr.length



//Practice 

//Ex1

array = ["john", "JACOB", "jinGleHeimer", "schmidt"]

function capitalizedNames(array) {
    const capitalize = array.map(function (n) {
        const lower = n.toLowerCase()
        const upper = lower[0].toUpperCase()
        return upper + lower.slice(1)

    })
    return capitalize
};


//Ex2

//Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca argument

let array = [2, '5', 100, '100', 'blabla'];

function doubleEachNumber(array){
    let double = array.map(function (n) {
        if (typeof (n) === 'number') {
            return n + n
        }
        else {
            return n
        }
    })
return double
};

//EX3

function getPersonsNames(arr){
    const getPerson = arr.map(function(n){
        return `${n.name} ${n.surname}`
    })
    return getPerson 
};

console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80,
    },
{
    name: "Eric",
    surname: "Jones",
    age: 27
},]));


// ["Angelina Jolie", "Eric Jones"]

//EX4

function computeExamPass(arr) {
    return arr.map(n => n.grade > 5 ? `${n.name} ${n.surname} passed the exam` : `${n.name} ${n.surname} did not pass the exam`)
}



console.log(computeExamPass([
    {
        name: "Angelina",
        surname: "Jolie",
        grade: 7
    },
    {
        name: "Eric",
        surname: "Jones",
        grade: 3
    },]));



["Angelina Jolie has passed the exam", "Eric Jones has not passed the exam"]

//Ex5
function getPersonsDomElements(arr) {
    const getName = arr.map(function (n) {
        return `<h1>${n.name} ${n.surname}</h1> <h2> ${n.age}</h2>`
    })
    const h1inDom= document.createElement('h1')
    const body= document.querySelector('body')
    h1inDom.innerHTML= getName
    body.appendChild(h1inDom)

    return getName
}



console.log(getPersonsDomElements([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: 'Jones',
        age: 35
    },

]));