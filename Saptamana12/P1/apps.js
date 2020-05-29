  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Truck = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.cargo = [];
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };

    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };

// rezolvare
const Vehicle =function(driver){
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  }; 

let Car= new Vehicle('driver') ;
let Truck= new Vehicle('driver')

Truck.cargo=[];
Truck.loadCargo= function(cargo){
    this.cargo.push(cargo)
}
Truck.unloadCargo = function() {
    return this.cargo.pop();
  };

// EX2


//Creati o clasa numit Trainer care sa fie derivat din obiectul Person
// si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]


  var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}


let Trainer= function(subject){
  this.subject= subject;
  this.teach= function(){
    console.log(`${this.name}is teaching ${this.sbject}`)
  }
}

Trainer.prototype=new Person();
let Bubulina = new Trainer('Cook')
Bubulina.initialize('Bubulina')
Bubulina.teach()


//EX3

// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghip


function(triangle)(a,b,c){
  this.a=a
  this.b=b
  this.c=c
  this.type="triunghi"
}

const forma ={
  getType:function(){
    return this.type
  }
}

triangle.prototype=forma
triangle.prototype.constructor= triangle
let triunghi= new triangle(2,2,5)
triunghi.getParameter= function(){
  return this.a+this.b+this.c
}