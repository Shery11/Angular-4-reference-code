import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import {SortPipe} from './app.sort'
import {MyDataService} from './my-data.service';

@NgModule({
  declarations: [
    SortPipe, //we have to add it before as it is needed before the compilation
    AppComponent,
    MyComponentComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     {    
       path:'one',
       component: OneComponent
      },
      {    
       path:'two',
       component: TwoComponent
      }

      ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
