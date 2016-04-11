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
    var BindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
            # Property binding : 3 possible syntaxes
            # <img src="{{imageUrl}}"/>
            # <img [src]="imageUrl"/>
            # <img bind-src="imageUrl"/>
            **/
            BindingComponent = (function () {
                function BindingComponent() {
                    this.title = "Two-way data-binding";
                    this.isActive = true;
                }
                BindingComponent.prototype.onClick = function ($event) {
                    console.log('$event', $event);
                };
                BindingComponent = __decorate([
                    core_1.Component({
                        selector: 'binding-component',
                        styles: ["\n    .active{\n      background-color:#123;\n      color:#efefef;\n    }\n  "],
                        template: "\n    <button type=\"button\"\n      [class.active]=\"isActive\"\n      (click)=\"onClick($event)\"\n      >\n      Example Button with Binding\n    </button>\n    <div>\n    <p>Two-way data-binding example</p>\n    <!--<input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\"/>-->\n    <!--<input type=\"text\" bindon-ngModel=\"title\">-->\n    <input type=\"text\" [(ngModel)]=\"title\">\n    <p>Preview:{{title}}</p>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BindingComponent);
                return BindingComponent;
            }());
            exports_1("BindingComponent", BindingComponent);
        }
    }
});
//# sourceMappingURL=binding-examples.component.js.map