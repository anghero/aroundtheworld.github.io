import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links = [
    {
      name: 'Home',
      router: ''
    },
    {
      name: 'Link 1'
    },
    {
      name: 'Link 2'
    },
    {
      name: 'About Us',
      router: '/about-us'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
