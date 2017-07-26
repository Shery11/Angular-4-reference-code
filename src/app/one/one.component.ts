import { Component, OnInit } from '@angular/core';
import {MyDataService} from '../my-data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private newService : MyDataService) { }

  ngOnInit() {

  	console.log(this.newService.success());
  	console.log(this.newService.obj)


  }

}
