
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from '../box/box.component';
import {RouterModule, Routes} from '@angular/router';
import { Nav1Component } from '../nav1/nav1.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

const appRoutes: Routes = [
    {
      path: 'box',
      component: BoxComponent
    },
    {
      path: 'nav',
      component: Nav1Component
    },
  ]

@NgModule({
   declarations: [
      AppComponent,
      BoxComponent,
      Nav1Component
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      CollapseModule.forRoot(),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
