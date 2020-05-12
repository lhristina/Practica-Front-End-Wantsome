





const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    const section = document.querySelector('section')
    for (let color in data) {
        const hexCodeColor = data[color];
        const parentBoxDiv = document.createElement('div');
        const childBoxDiv = document.createElement('div');
        parentBoxDiv.classList.add('parentBox')
        childBoxDiv.classList.add('square');
        childBoxDiv.style.backgroundColor = hexCodeColor
        parentBoxDiv.appendChild(childBoxDiv);
        const textBox = document.createElement('div')
        textBox.innerText = color;
        textBox.classList.add('text')
        parentBoxDiv.appendChild(textBox)




        section.appendChild(parentBoxDiv);

    }
});
firstReq.addEventListener('error', function () {
});
firstReq.open('get', 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json')
firstReq.send();