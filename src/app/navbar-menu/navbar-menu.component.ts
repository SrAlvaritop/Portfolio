import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  title = 'PortfolioWeb';

  barTitleContent = 'Álvaro José Camino González';

  constructor() { }

  ngOnInit(): void {
  }

}
