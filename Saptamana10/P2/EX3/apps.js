// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail




const puppies = 'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true'

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    const myFirstRequest = new XMLHttpRequest;
    myFirstRequest.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        const randomImage = Math.floor(Math.random() * data.data.children.length)
        const imageToAppend = data.data.children[randomImage].data.thumbnail;
        const image = document.createElement('img')
        image.src = imageToAppend;
        const replaceWithImage = document.querySelector('.text')
        replaceWithImage.innerHTML = null;
        const h1 = document.createElement('h1')
        h1.innerText = data.data.children[randomImage].data.title
        replaceWithImage.append(h1)
        replaceWithImage.append(image);

    });
    myFirstRequest.addEventListener('error', function () {
    });
    myFirstRequest.open('get', puppies)
    myFirstRequest.send();

});

