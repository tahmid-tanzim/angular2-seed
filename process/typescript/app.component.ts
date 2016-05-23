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

}
