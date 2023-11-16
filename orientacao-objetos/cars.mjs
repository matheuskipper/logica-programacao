export const fuelCapacity = 80;
export const maxSpeed = 170;

export class Cars {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isEngineOn = false;
    }

    turnOn(){
        this.isEngineOn = true;
        console.log('The engine is now on!');
    }

    turnOff(){
        this.isEngineOn = false;
        console.log('The engine is now off!')
    }

    getDetails(){
        return `${this.brand} ${this.model} ${this.year}`;
    }

}

