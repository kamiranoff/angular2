System.register(['angular2/core', "angular2/common", './usernameValidators', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, common_1, usernameValidators_1, router_1;
    var ComplexForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (usernameValidators_1_1) {
                usernameValidators_1 = usernameValidators_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ComplexForm = (function () {
                function ComplexForm(fb, _router) {
                    this._router = _router;
                    this.form = fb.group({
                        username: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                usernameValidators_1.UsernameValidators.cannotContainSpace]), usernameValidators_1.UsernameValidators.shoudBeUnique],
                        password: ['', common_1.Validators.required]
                    });
                }
                //Alternative way.
                //form = new ControlGroup({
                //  username: new Control('',Validators.required),
                //  password: new Control('',Validators.required)
                //});
                ComplexForm.prototype.signup = function () {
                    //var result = authService.login(this.form.value);
                    //this.form.find('username').setErrors({
                    //  invalidLogin:true
                    //});
                    console.log('this.form.value', this.form.value);
                    this._router.navigate(['Tweets']);
                };
                ComplexForm = __decorate([
                    core_1.Component({
                        selector: 'complex-form',
                        templateUrl: 'app/complex-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router])
                ], ComplexForm);
                return ComplexForm;
            }());
            exports_1("ComplexForm", ComplexForm);
        }
    }
});
//# sourceMappingURL=complex-form.component.js.map