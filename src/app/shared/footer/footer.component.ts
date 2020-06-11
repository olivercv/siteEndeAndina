import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router ) {

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
  }
 
}
