import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
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
