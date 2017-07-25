import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';

  obj = {
  	id : 123,
  	name : "Shaharyar"
  }

  arr = [1,2,3,4,2,1,3];

  isTrue = true;

  myName = "Shery"

  day = new Date(1992,3,6);


  // template driven forms
  // automaticaly detects the form and finds its ngModel elemets and gets the data

  onSubmit = function(user){
    console.log(user);
  }



}
