import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MyDataService {

  constructor(private http: Http) { }
   
   fetchData(){
    return this.http.get('https://ipinfo.io')
    	.map((response)=> response.json())
    .subscribe(
          (data) => console.log(data)
   		)
   }


   obj = {

  	id:1,
  	name: "umair",
  	rollno: "2345"

  }


  success(){
    return "successful"
  }





}
