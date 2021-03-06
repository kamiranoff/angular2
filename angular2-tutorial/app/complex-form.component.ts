import {Component} from 'angular2/core';
import {ControlGroup,Control,Validators,FormBuilder} from "angular2/common";
import {UsernameValidators} from './usernameValidators';
import {Router} from "angular2/router";


@Component({
  selector:'complex-form',
  templateUrl:'app/complex-form.component.html'
})

export class ComplexForm {
  form:ControlGroup;
  constructor(fb:FormBuilder,private _router:Router){
    this.form = fb.group({
      username:['',Validators.compose([
        Validators.required,
        UsernameValidators.cannotContainSpace]
      ),UsernameValidators.shoudBeUnique],
      password:['',Validators.required]
    })
  }
  //Alternative way.
  //form = new ControlGroup({
  //  username: new Control('',Validators.required),
  //  password: new Control('',Validators.required)
  //});


  signup(){
    //var result = authService.login(this.form.value);
    //this.form.find('username').setErrors({
    //  invalidLogin:true
    //});
    console.log('this.form.value',this.form.value);
    this._router.navigate(['Tweets']);
  }


}