import { Component, OnInit } from '@angular/core';

export interface Link {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: Link[] = [
    {
      name: 'Recipes',
      path: '#'
    },
    {
      name: 'Shopping',
      path: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
