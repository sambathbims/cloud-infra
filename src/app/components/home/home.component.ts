import { Component, OnInit } from '@angular/core';
import { navItems } from '../../shared/config/header.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  navItems = navItems;

  constructor() { }

}
