// //EX1

// // PRE: create separate module to import fetch function(request) in index.js

// //Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
// //.then - returnam user names si city
// //hint nu uitati sa transformati primul raspuns ca si json
// const url = "https://jsonplaceholder.typicode.com/users"


// fetch(url).then((response) => response.json())
//     .then((data) => data.map(n => console.log(n.username, n.id))
//     )



// // //EX2
// // // PRE: create separate module to import fetch function(request) in index.js
// // //1. fetch some horror books
// // //2. save the ones that have more than 230 pages
// // //3. display the ones that have more than one author
// // url = 'https://www.googleapis.com/books/v1/volumes?q=horror';

// const url2 = 'https://www.googleapis.com/books/v1/volumes?q=horror';
// fetch(url2)
//     .then((response) => response.json())
//     .then((data) => console.log(data.items.map(n => n.volumeInfo).filter(n => n.pageCount > 230).filter(n => n.authors.length > 1))
//     )




// //EX3
// // PRE: vom implementa metoda separat si apoi o importam in index.js
// // folosind fetch() vom face un post catre url-ul de mai jos
// // trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.


// // const url3 = 'https://jsonplaceholder.typicode.com/posts';
// // const myPost = {
// //   title: 'Javascript Post is awesome',
// //   body: 'lorem ipsum etc',
// //   userId: 1
// // }

// // const options = {
// //   method: //,
// //   body:// ,
// //   headers: //,
// // };



// async function postData(url = 'https://jsonplaceholder.typicode.com/posts', data = {}) {
    
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
//     return response.json();
//   }
//   postData('https://jsonplaceholder.typicode.com/posts', {
//       title: 'Javascript Post is awesome',
//       body: 'lorem ipsum etc',
//       userId: 1
//     })
//     .then(data => {
//       console.log(data)
//     })


// // //EX2
// // //***bonus***//
// // //Folosind url-ul gresit tratati cazul in care vom avea eroare
// // // trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()


// fetch('https://jsonplaceholder.typicode.com/pofrtrytrsts')
// .then((response)=>{
//     if(!response.ok)
//     throw new Error(`Status Code Error: ${response.status}`)
//     return response.json()
// })
// .then((response)=>console.log(response))

// // //Cookies

// // //Ex1. 
// // //Setati 3 cookie-uri cu numele, profesia si varsta voastra
// // //Stocatile in 3 variabile dupa si afisatile in consola
// // //Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// // // Stocatile si pe astea in alte 2 variabile
// // // La final vrem sa vedem 5 cookieuri in console.log


// // document.cookie1='name= Cristina'
// // document.cookie2='occupation= Technical Support engineer'
// // document.cookie3='age=31'
// // document.cookie4='day=Th, expires=Th, 14 May 2020 23:59:59 GMT'
// // document.cookie5='year=2020; expires Th, 14 May 2020 23:59:59 GMT'


// // const myCookie1= document.cookie1
// // const myCookie2= document.cookie2
// // const myCookie3=document.cookie3
// // const myCookieExpires4=document.cookie4
// // const myCookieExpires5=document.cookie5

// // console.log(myCookie1)
// // console.log(myCookie2)
// // console.log(myCookie3)
// // console.log(myCookieExpires4)
// // console.log(myCookieExpires5)


// //Ex2. 
// //Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
// //stocatile in 3 variabile diferite
// // folositile pentru a construi un patrat cu ele


// localStorage.setItem ("width","100px");
// localStorage.setItem("height","100px");
// localStorage.setItem("background-color", "green");

// const width=localStorage.getItem("width")
// const height=localStorage.getItem("height")
// const backgroundcolor= localStorage.getItem("background-color")

// const div= document.createElement('div')
// div.style.width=width;
// div.style.height= height
// div.style.background= backgroundcolor
// document.body.appendChild(div)




// //Ex3

// //Obiectul de mai jos il puneti intr-un fisier separat "world.json"
// //faceti fech intr-un fisier separat de index.js
// // //importati fetch-ul in index.js
// // // stocati tot raspunsul in localStorage - hint - stringify
// // // Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// // // in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *

// // [
// //     {"youtubeVideo": "https://www.youtube.com/watch?v=CBwKJfrm5-U",
// //       "title": "Bali Travel Guide - How to travel Bali",
// //       "author": "Allan Su",
// //       "rating": 4
// //     },
// //     {"youtubeVideo": "https://www.youtube.com/watch?v=oSexfR0Ubzw",
// //       "title": "Rome in 4k",
// //       "author": "Around The World 4k",
// //       "rating": 5
// //     },
// //     {"youtubeVideo": "https://www.youtube.com/watch?v=k7ZqiSKIB9g",
// //       "title": "Glasgow Vacation Travel Guid",
// //       "author": "Expedia",
// //       "rating": 3
// //     },
// //     {"youtubeVideo": "https://www.youtube.com/watch?v=xl3QM22kWV0",
// //       "title": "Around Malaysia",
// //       "author": "Drone Around The world",
// //       "rating": 2
// //     }
// //   ]


// //EX4

// //   function setCookie(cookieName,cookieValue,daysToExpire){
// //     // create date
// //     // create cookie 
// //       }
// // function getCookie(cookieName){
// //        // access cookie
// //       }
// // function verifiyCookie(){
// //       // verify cookie
// //       // use prompt messages 
// //       // if cookie doesnt exist use prompt to show message "Hello, please insert your name"
// //       // if cookie exist show message "Hello {name}"
// //       }
