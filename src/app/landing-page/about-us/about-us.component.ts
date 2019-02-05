import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  advantages = [
    {
      icon: 'flight_takeoff',
      header: 'Lorem ipsum',
      text: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit. '
    },
    {
      icon: 'explore',
      header: 'Lorem ipsum',
      text: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit. '
    },
    {
      icon: 'query_builder',
      header: 'Lorem ipsum',
      text: 'Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit Dolor sit amet consectetur adipiscing elit. '
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
