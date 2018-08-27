import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {
  color1:string= "";

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  isCollapsed:boolean;

  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;
  }

  check(){
    return this.isCollapsed;
  }

  @HostListener('window:resize') onResize() {
    // trigger the function using a listener which listen to the component's host
    // specifically -> when we changed the window size
    if (window.innerWidth > 1000)
      this.isCollapsed = true;
  }

}
