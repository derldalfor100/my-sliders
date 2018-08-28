
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
import { FormsModule } from '@angular/forms';
import { Video1Component } from '../video1/video1.component';
import { FooterComponent } from '../footer/footer.component';
import { Flip1Component } from '../flip1/flip1.component';

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
      Nav1Component,
      Video1Component,
      FooterComponent,
      Flip1Component,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      CollapseModule.forRoot(),
      FormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
