const books = [
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        read: true,
        image: "https://i4.books-express.ro/be/9781847946249/the-power-of-habit.jpg"
    },
    {
        title: 'Mindset: The New Psychology of Success',
        author: 'Carol S. Dweck',
        read: false,
        image: "https://gomagcdn.ro/domains/cartidesuflet.ro/files/product/large/1164932.jpg-5013-1303.jpg"
    }];

// Creati o pagina web care are un h1 cu "Book List"

const h1 = document.createElement('h1');
h1.innerText = "Book List"
document.body.appendChild(h1)


// adugati un script style unde sa tinem js-ul


//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul
// si autorul si faceti append in pagina noastra


for (let book of books) {
    const p = document.createElement('p')
    p.innerHTML = `Book <b>${book.title}</b> written by  <b>${book.author}</b>`
    document.body.appendChild(p)
}


//BONUS: folositi ul si li pentru a face display la carti

const bookUl = document.createElement('ul')
for (let book of books) {
    const bookLi = document.createElement('li')
    bookLi.innerHTML = `Book ${book.title} written by  ${book.author}`
    bookUl.appendChild(bookLi)
}
document.body.append(bookUl)



//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii 
//si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii 
//- acolo va fi si poza)


for (let book of books) {
    const p = document.createElement('p')
    p.innerHTML = `Book <b>${book.title}</b> written by  <b>${book.author}</b>`
    const bookImage = document.createElement('img');
    bookImage.src = book.image
    document.body.appendChild(p)
    document.body.appendChild(bookImage)
}

//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

for (let book of books) {
    const p = document.createElement('p');
    p.innerHTML = `Book <b>${book.title}</b> written by  <b>${book.author}</b>`;
    document.body.appendChild(p)
    const bookImage = document.createElement('img');
    bookImage.src = book.image
    document.body.appendChild(bookImage)
    if (book.read === true) {
        console.log(p.style.backgroundColor = 'green');
    }
    else {
        console.log( p.style.backgroundColor = 'red');
    }
}

