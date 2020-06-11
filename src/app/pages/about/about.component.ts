import { Component, OnInit } from '@angular/core';
import Lity from 'lity';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit  {
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  openVideo(video: string) {
    Lity(video);
  }
}
