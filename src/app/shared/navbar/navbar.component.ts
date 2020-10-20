import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import * as $ from 'jquery';
import * as jQuery from 'jquery';

declare function initMenu();

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) {
    
   }

  ngOnInit(): void {
    initMenu();
}


  openMenu() {
    console.log('abre menu');
  }

  closeMenu() {
    console.log('cierra menu');
  }
}
