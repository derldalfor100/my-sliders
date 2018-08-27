import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video1',
  templateUrl: './video1.component.html',
  styleUrls: ['./video1.component.css']
})
export class Video1Component implements OnInit {
  // Get the video
  @ViewChild('myVideo') videoElement: ElementRef;// according to the tag #
  // Get the button
  //@ViewChild('myBtn') btn: ElementRef;

  theHtml:string = 'pause';

  constructor() { }

  ngOnInit() {
    
  }
 
  // Pause and play the video, and change the button text
  onClick() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    if (video.paused) {
      video.play();
      this.theHtml = "Pause";
    } else {
      video.pause();
      this.theHtml = "Play";
    }
  }

}
