import {Control} from "angular2/common";


export class UsernameValidators{
  static cannotContainSpace(control:Control){
    if(control.value.indexOf(' ') >= 0){
      return{cannotContainSpace:true}
    }
    return null;
  }

  static shoudBeUnique(control:Control){
    return new Promise((resolve,reject) => {
      //simulate server call
      setTimeout(function(){
        if (control.value == 'kevin') {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      },1000);
    });

  }
}