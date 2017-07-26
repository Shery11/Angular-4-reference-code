import { Component } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import {MyDataService} from './my-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(private newService: MyDataService){

 }

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
   form;
   ngOnInit(){

     this.newService.fetchData();

      console.log(this.newService.success());
      console.log(this.newService.obj);

   
     this.form  = new FormGroup({
     // default validations
     firstname : new FormControl("",Validators
     .compose([Validators.required,Validators.minLength(3),Validators.pattern('[\\w\\-\\s\\/]+')]) ),
     
     lastname : new FormControl("",this.textValidator  ),
     languages : new FormControl("")
   
   });
   
   }


   textValidator(control){
     if(control.value.length < 3){
       return {'lastname': true}
     }
   }
  

  onSubmit = function(user){
    console.log(user);
  }



}
