
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from '../box/box.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {
      path: 'box',
      component: BoxComponent
    },
  ]

@NgModule({
   declarations: [
      AppComponent,
      BoxComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
