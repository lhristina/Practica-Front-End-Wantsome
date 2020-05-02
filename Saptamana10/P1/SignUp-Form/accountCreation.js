const userName = document.querySelector('#username');

const validateInput = function (inputValue) {
    if (inputValue.length >= 4) {
        for (let letter of inputValue) {
            if (letter.toUpperCase() !== letter.toLowerCase()) {
            }
            else if (!isNaN(letter)) {
            }
            else {
                return false
            }
        }
    }
    else {
        return false
    }
    return true
}
userName.addEventListener('change', function () {
    let validated = validateInput(userName.value);
    if (!validated) {
        const newBox = document.createElement('input');
        newBox.classList.add('redbox');
        username.insertAdjacentElement('beforebegin', newBox)
        newBox.value = 'Please enter a valid Username!'
    }
    else {
        if (document.querySelector('.redbox')) {
            document.querySelector('.redbox').remove()
        }
        else {
        }
    }
});



const email = document.querySelector('#email');
const validateEmail = function (inputText) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}
email.addEventListener('change', function () {
    let validatedEmail = validateEmail(email.value);
    if (!validatedEmail) {
        const emailbox = document.createElement('input');
        emailbox.classList.add('redbox');
        email.insertAdjacentElement('beforebegin', emailbox)
        emailbox.value = 'Please enter a valid Email!'
    }
    else {
        if (document.querySelector('.redbox')) {
            document.querySelector('.redbox').remove()
        }
    }
});

const firstname = document.querySelector('#firstname');
const validateFirstName = function () {
    if (inputValue.length >= 4) {
        for (let letter of inputValue) {
            if (letter.toUpperCase() !== letter.toLowerCase()) {
            }
            else {
                return false
            }
        }
    }
    else {
        return false
    }
    return true
}
firstname.addEventListener('change', function () {
    let validatedFirstName = validateInput(firstname.value);
    if (!validatedFirstName) {
        const firstnameBox = document.createElement('input');
        firstnameBox.classList.add('redbox');
        firstname.insertAdjacentElement('beforebegin', firstnameBox)
        firstnameBox.value = 'Please enter a valid First Name!'
    }
    else {
        if (document.querySelector('.redbox')) {
            document.querySelector('.redbox').remove()
        }
    }
});


const lastname = document.querySelector('#lastname');
const validateLastName = function () {
    if (inputValue.length >= 4) {
        for (let letter of inputValue) {
            if (letter.toUpperCase() !== letter.toLowerCase()) {
            }
            else {
                return false
            }
        }
    }
    else {
        return false
    }
    return true
}
lastname.addEventListener('change', function () {
    let validatedLastName = validateInput(lastname.value);
    if (!validatedLastName) {
        const lastnameBox = document.createElement('input');
        lastnameBox.classList.add('redbox');
        lastname.insertAdjacentElement('beforebegin', lastnameBox)
        lastnameBox.value = 'Please enter a valid last Name!'
    }
    else {
        if (document.querySelector('.redbox')) {
            document.querySelector('.redbox').remove()
        }
    }
});


const phone = document.querySelector('#phone');
const validatePhone = function (inputValue) {
    if (inputValue.length >= 10) {
        for (let letter of inputValue) {
            if (!isNaN(letter)) {
            }
            else {
                return false
            }
        }
    }
    else {
        return false
    }
    return true
}

phone.addEventListener('change', function () {
    let validatedPhone = validatePhone(phone.value);
    if (!validatedPhone) {
        const phoneBox = document.createElement('input');
        phoneBox.classList.add('redbox');
        phone.insertAdjacentElement('beforebegin', phoneBox)
        phoneBox.value = 'Please enter a valid Phone number!'
    }
    else {
        if (document.querySelector('.redbox')) {
            document.querySelector('.redbox').remove()
        }
    }
});



const form = document.querySelector('#signup-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let collection = [username,email, firstname, lastname, phone];
    for (let a of collection) {
        if (a.value.length == 0) {
            const Box = document.createElement('input');
            Box.classList.add('redbox');
            a.insertAdjacentElement('beforebegin', Box)
            Box.value = `Please enter a valid ${a.id}`
        }
    }
});

