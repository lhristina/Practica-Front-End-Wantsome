


// const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


const btn = document.querySelector('#xhr');
// btn.addEventListener('click', getQuote('https://ron-swanson-quotes.herokuapp.com/v2/quotes', '#quote'));
btn.addEventListener('click', function () {
    const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
    const HTMLid= "#quote"
    const myReq = new XMLHttpRequest();
    const HTMLelement = document.querySelector(HTMLid)
    myReq.addEventListener('load', function () {
        const data = JSON.parse(this.responseText)
        HTMLelement.innerHTML = data[0]
    });
    myReq.addEventListener('error', function () {
    });
    myReq.open('get', url)
    myReq.send();
});












// const req = () => {
//     const xmlReq = new XMLHttpRequest();
//     xmlReq.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
//     xmlReq.onload = () => {
//       const serverResponse = JSON.parse(xmlReq.response);
//       console.log(serverResponse.squadName);
//       // JSON.stringify(javaScriptObj)
//       const body = document.getElementsByTagName('body')[0];
//       body.innerHTML = serverResponse.squadName;
//     };
//     xmlReq.send();
//   };

//   req();