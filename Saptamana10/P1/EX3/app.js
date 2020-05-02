//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle


//2 pentru fiecare button aveti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei


const square = document.querySelector('#sqr-btn')

const calculateTheSquare = () => {
    const number = document.querySelector('#square').value
    alert(number * number)
}
square.addEventListener('click', calculateTheSquare)

// 

const btnHalf = document.querySelector("#half-btn")

const halfNum = () => {
    const half = document.querySelector("#half").value
    alert(half / 2)
}
btnHalf.addEventListener('click', halfNum)


// 

const prcBtn = document.querySelector('#prc-btn')

const percentNumb = () => {
    const percent1 = document.querySelector('#percent1').value;
    const percent2 = document.querySelector('#percent2').value;

    alert((percent2 / percent1) / 100);
}

prcBtn.addEventListener('click', percentNumb)


//

const areaBtn = document.querySelector("#area-btn")

const areaCircle= ()=>{
    const area = document.querySelector("#area").value;
    alert(Math.PI* area* area)
}
 areaBtn.addEventListener('click',areaCircle)


//3
// Bonus: faceti sa functioneze si la key press pe langa click


const areaCircle = () => {
    const area = document.querySelector("#area").value;
    setTimeout(function () {
        }, 200);
alert(Math.PI * area * area)
}

area.addEventListener('keyup', areaCircle)