import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html'
})

export class AppComponent {
    name:string;
    cars:any;

    constructor() {
        this.name = 'Tahmid Tanzim Lupin';
        this.cars = [
            {
                name: 'Toyota Corolla',
                country: 'Japan'
            },
            {
                name: 'Mercedes Benz',
                country: 'Germany'
            },
            {
                name: 'Lamborghini Aventador',
                country: 'Italy'
            }
        ];
    }

    onClick(car, element) {
        console.log(car);
        this.name = car.name;
        element.style.backgroundColor = "#FECE4E";
    }

    addCar(name) {
        if (name) {
            this.cars.push({
                name,
                country: 'Unknown'
            });
        }
    }

}
