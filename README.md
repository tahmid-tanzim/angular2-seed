# Angular 2

#### 1. Project Setup
```
npm install -g typescript
npm install -g gulp-cli

mkdir angular2-seed && cd angular2-seed
git init
```
 
`tsconfig.json` Documentation - https://www.typescriptlang.org/docs/handbook/tsconfig.json.html        

### 2. Controllers to Components
##### 2.1. Angular 1
```html
<body ng-controller="StudentController as vm">
    <h3>{{vm.student.name}}</h3>
    <h3 ng-bind="vm.student.name></h3>
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
##### 2.2. Angular 2
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