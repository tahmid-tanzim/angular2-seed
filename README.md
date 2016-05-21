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

