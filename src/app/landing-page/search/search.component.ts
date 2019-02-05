import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  country = [
    {
      name: 'Spain',
      cost: '850'
    },
    {
      name: 'France',
      cost: '900'
    },
    {
      name: 'Canada',
      cost: '1200'
    },
    {
      name: 'Netherlands',
      cost: '1150'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
