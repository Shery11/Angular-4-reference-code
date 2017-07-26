import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }
   
   obj = {

  	id:1,
  	name: "umair",
  	rollno: "2345"

  }


  success(){
    return "successful"
  }





}
