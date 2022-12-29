//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage)
    this.maximumPassenger = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.ScheduleService = false;
}
loadPassenge(num) {
    if (this.passenger < this.maximumPassenger) {
        console.log('available room.');
        if((num + this.passenger) <= this.maximumPassenger) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + ' ' + this.make + ' not enough room.');
        }
    }
}
start() {
    if (this.fuel > 0) {
        console.log("engine started...!!!");
        return this.started = true;
        
    } else {
        console.log("engine cannot start...");
        return this.started = false;
        
    }
}
checkService() {
    if (this.mileage > 3000) {
        console.log('no service required.')
        this.schedule = true;
        return this.ScheduleService;
    }
  }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
