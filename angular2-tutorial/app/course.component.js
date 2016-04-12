System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CourseComponent = (function () {
                function CourseComponent() {
                    this.course = {
                        title: "Angular 2 for Beginners",
                        rating: 4.1245,
                        students: 5981,
                        price: 99.95,
                        releaseDate: new Date(2016, 3, 1),
                        assignee: {
                            name: 'betsy baddrock'
                        }
                    };
                }
                CourseComponent = __decorate([
                    core_1.Component({
                        selector: 'course',
                        template: "\n\n  <h2>Filtering examples</h2>\n  {{course.title | uppercase | lowercase}}\n  <br/>\n  {{course.students | number }}\n  <br>\n\n  {{course.rating | number:'2.2-2'}}\n  <br>\n  <!--\n  true add currency to output\n  2 means minimum 2 numbers\n  .2-2 means minimum 2 and maximum 2 numbers after fractions.\n  -->\n  {{course.price | currency:'EUR':true:'2.2-2'}}\n  <br>\n  {{course.releaseDate | date:'MMM yyyy'}}\n  <br>\n  {{course | json}}\n   <br>\n  Assigned to {{course.assignee?.name}}\n    <br>\n  Which role is {{course.assignee?.role?.name}}\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CourseComponent);
                return CourseComponent;
            }());
            exports_1("CourseComponent", CourseComponent);
        }
    }
});
//# sourceMappingURL=course.component.js.map