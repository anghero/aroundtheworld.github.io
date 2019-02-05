import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  map = [
    {
      name: 'Home'
    },
    {
      name: 'Link 1'
    },
    {
      name: 'Link 2'
    },
    {
      name: 'Link 3'
    }
  ];

  adress = [
    {
      name: '228 Park Ave S New York, NY 10003-1502 US'
    },
    {
      name: 'nidken250@gmail.com'
    },
    {
      name: 'tel: +1 (987)-45-62-57'
    },
  ];

  socials = [
    {
      icon: 'instagram'
    },
    {
      icon: 'twitter'
    },
    {
      icon: 'facebook'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
