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


    const links = document.querySelectorAll('.work-item__icon');
    links.forEach(function (item) {
        item.addEventListener('click', function (event) {
            ui.showModel(event)
        })
    })

    document.querySelector('.work-model__close').addEventListener('click', function () {
        ui.closeModel()
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

//show model
UI.prototype.showModel = function (event) {
    event.preventDefault();
    if (event.target.parentElement.classList.contains('work-item__icon')) {
        let id = event.target.parentElement.dataset.id
        console.log(id);
        

        const model = document.querySelector('.work-model');
        const modelItem = document.querySelector('.work-model__item');
console.log(modelItem);

        model.classList.add('work-model--show');
        console.log(`url(/PozeProiect/work-${id}.jpg)`);
        modelItem.style.backgroundImage = `url(/PozeProiect/work-${id}.jpg)`
    }


}

//hide model

UI.prototype.closeModel = function () {
    document.querySelector('.work-model').classList.remove('work-model--show')
}







