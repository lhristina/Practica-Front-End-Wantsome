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
        modelItem.style.backgroundImage = `url(PozeProiect/work-${id}.jpg)`
    }


}

//hide model

UI.prototype.closeModel = function () {
    document.querySelector('.work-model').classList.remove('work-model--show')
}
// Testimonial 
const onTestimonialChange= ()=>{
    let firstChild,lastChild; 
    const prevArrow= document.querySelector("#testimonial-prev");
    const nextArrow= document.querySelector("#testimonial-next");
    const testimonial = document.querySelector(".testimonial ul ");

    document.addEventListener('click',()=>{
        if(event.target===prevArrow){
            lastChild= testimonial.lastElementChild;
            testimonial.insertAdjacentElement('afterbegin',lastChild);

        }else if(event.target===nextArrow){
            firstChild= testimonial.firstElementChild;
            testimonial.insertAdjacentElement('beforeend',firstChild);
        }
    })
}

onTestimonialChange();





