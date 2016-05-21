# Angular 2

### Project Setup
```
npm install -g typescript
npm install -g gulp-cli
```
`tsconfig.json` Documentation - https://www.typescriptlang.org/docs/handbook/tsconfig.json.html        

### 1. Controllers to Components
##### 1.1. Angular 1
```html
<body ng-controller="StudentController as vm">
    <h3>{{vm.student.name}}</h3>
    <h3 ng-bind="vm.student.name"></h3>
</body>
```
```javascript
(function() {
    angular
        .module('app')
        .controller('StudentController', StudentController);
        
    function StudentController() {
        var vm = this;
        vm.student = {
            id: 101,
            name: 'Tahmid Tanzim',
            cgpa: 3.86
        };
    }
})();
```
##### 1.2. Angular 2
```html
<student></student>
```
```javascript
import { Component } from 'angular2/core';

@Component({
    selector: 'student',
    template: '<h3>{{student.name}}</h3>'
})

export class StudentComponent {
    student = {
        id: 101,
        name: 'Tahmid Tanzim',
        cgpa: 3.86
    }
}
```
### 2. Bootstrapping Angular
##### 2.1. Angular 1
```html
<html ng-app="app"></html>
```
##### 2.2. Angular 2
```javascript
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

bootstrap(AppComponent);
```
### 3. Structural Built-In Directives
##### 3.1. Angular 1
```html
<ul>
    <li ng-repeat="vehicle in vm.vehicles"> {{vehicle.name}} </li>
</ul>
<div ng-if="vm.vehicles.length">
    <h3>You have {{vm.vehicles.length}} vehicles</h3>
</div>
```
##### 3.2. Angular 2
```html
<ul>
    <li *ngFor="#vehicle of vehicles"> {{vehicle.name}} </li>
</ul>
<div *ngIf="vehicles.length">
    <h3>You have {{vm.vehicles.length}} vehicles</h3>
</div>
```
### 4. Data Binding
##### 4.1.1. Interpolation: Angular 1
```html
<h3>{{vm.student.name}}</h3>
```
##### 4.1.2. Interpolation: Angular 2
```html
<h3>{{student.name}}</h3>
```
##### 4.2.1. One Way Binding: Angular 1
```html
<h3 ng-bind="vm.student.name"></h3>
```
##### 4.2.2. One Way Binding: Angular 2 (HTML Element Property)
```html
<h3 [innerText]="student.name"></h3>
<div [style.color]="color">{{student.name}}</div>
```
##### 4.3.1. Event Binding: Angular 1
```html
<button
    ng-click="vm.log('click')"
    ng-blur="vm.log('blur')">Save</button>
```
##### 4.3.2. Event Binding: Angular 2
```html
<button
    (click)="log('click')"
    (blur)="log('blur')">Save</button>
```
##### 4.4.1. Two Way Binding: Angular 1
```html
<input ng-model="vm.student.name">
```
##### 4.4.1. Two Way Binding: Angular 2 (Banana in a Box)
```html
<input [(ngModel)]="student.name">
```
### 5. Removes the Need for Many Directives
##### 5.1. Angular 1
```html
<div ng-style="vm.story ? {visibility: 'visible'} : {visibility: 'hidden'}">
    <img ng-src="{{vm.imagePath}}">
    <a ng-href="{{vm.link}}">{{vm.story}}</a>
</div>
```
##### 5.2. Angular 2
```html
<div [style.visibility]="story ? 'visible' : 'hidden'">
    <img [src]="imagePath">
    <a [href]="link">story</a>
</div>
```
### 6. Services
##### 6.1. Angular 1
```javascript
angular
    .module('app')
    .service('StudentService', StudentService);
    
function StudentService() {
    this.getStudents = function() {
        return [
            {id: 1, name: 'Bill Gates'},
            {id: 2, name: 'Steve Jobs'},
            {id: 3, name: 'Elon Musk'}
        ];
    }
}
```
##### 6.2. Angular 2
```javascript
import {Injectable} from 'angular2/core';

@Injectable()    
export class StudentService {
    getStudents = () =>  [
            {id: 1, name: 'Bill Gates'},
            {id: 2, name: 'Steve Jobs'},
            {id: 3, name: 'Elon Musk'}
        ];
}
```
### 7. Dependency Injection
##### 7.1. Angular 1
```javascript
angular
    .module('app')
    .controller('StudentsController', StudentsController);
    
StudentsController.$inject = ['StudentSevice'];
function StudentsController(StudentSevice) {
    var vm = this;
    var.title = 'Service';
    vm.students = StudentService.getStudents();
}
```
##### 7.2. Angular 2
```javascript
import {StudentService} from './student.service';
    
@Component({
    selector: 'all-students',
    templateUrl: 'app/students.component.html',
    providers: [StudentService]
})
export class StudentsComponent {
    constructor(private _studentService: StudentService) {}
    students = this._studentService.getStudents();
}
```