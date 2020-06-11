import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  @Input() subMenu: number;

  public item: number;

  constructor() {}

  ngOnInit(): void {
    this.item = this.subMenu;
  }

}
