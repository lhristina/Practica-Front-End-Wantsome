//hide preloader
eventListeners();
function eventListeners() {
    const ui = new UI()
    window.addEventListener('load', function () {
        ui.hidePreloader();
    })
    document.querySelector('.navBtn').addEventListener('click', function () {
        ui.showNav();
    })
}

function UI() {
}

UI.prototype.hidePreloader = function () {
    document.querySelector('.preloader').style.display = "none";
}

UI.prototype.showNav = function () {
    document.querySelector('.nav').classList.toggle('nav--show')
}