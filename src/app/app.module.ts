import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import {SortPipe} from './app.sort'


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
    FormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
