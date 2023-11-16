
import {Cars, fuelCapacity, maxSpeed} from "./cars.mjs"

function generateCars(){

    const car1 = new Cars('Chevrolet', 'Onix', '2014');
    const car2 = new Cars('Ford', 'Focus', '2019');

    car1.turnOn();
    car2.turnOn();

    console.log(car1.getDetails());
    console.log(car2.getDetails());

    car1.turnOff();
    car2.turnOff();

    console.log(fuelCapacity);
    console.log(maxSpeed);
}

generateCars();