// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties

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