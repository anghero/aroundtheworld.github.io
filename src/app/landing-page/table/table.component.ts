import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  schedule = [
    {
      destination: 'France',
      date: '07.06.2019',
      time: '20:00 MSK',
      cost: '900'
    },
    {
      destination: 'Spain',
      date: '06.07.2019',
      time: '23:00 MSK',
      cost: '850'
    },
    {
      destination: 'Canada',
      date: '07.06.2019',
      time: '09:00 MSK',
      cost: '1200'
    },
    {
      destination: 'Netherlands',
      date: '09.09.2019',
      time: '06:50 MSK',
      cost: '1150'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
