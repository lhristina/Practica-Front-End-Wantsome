
// //Obiectul de mai jos il puneti intr-un fisier separat "world.json"
// //faceti fech intr-un fisier separat de index.js
// // //importati fetch-ul in index.js
// // // stocati tot raspunsul in localStorage - hint - stringify
// // // Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// // // in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *



fetch('http://localhost:3000/world')
    .then(res => res.json())
    .then(data => {
        let dataToStore = JSON.stringify(data);
        localStorage.setItem('someData', dataToStore);
    })
    .catch(err => console.error(err));

const data1 = JSON.parse(localStorage.getItem('someData'))
console.log(data1)



let displayVideo = function (array) {
    let body = document.querySelector('body')
    array.forEach(element => {
        let mainContainer= document.createElement('div')
        mainContainer.classList="mainContainer"
        let videoFromYoutube = document.createElement('iframe')
        videoFromYoutube.src = element.youtubeVideo
        let text = document.createElement('div')
        mainContainer.appendChild(text)
        text.innerText= element.title;
        mainContainer.appendChild(videoFromYoutube)
        body.append(mainContainer)
    })
}
displayVideo(data1)

