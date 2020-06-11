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
    router.events.subscribe(s => { 
      if (s instanceof NavigationEnd) { 
      const tree = router.parseUrl(router.url); 
      if (tree.fragment) {
       const element = document.querySelector("#" + tree.fragment); 
       if (element) { element.scrollIntoView(true); } 
      }
      }
     });
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
