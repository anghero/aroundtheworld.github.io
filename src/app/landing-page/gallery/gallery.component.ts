import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

export interface ImgDialog {
  img: []
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery = [
    {
      src: '/assets/gallery/canada.jpg',
      name: 'Canada'
    },
    {
      src: '/assets/gallery/france.jpg',
      name: 'France'
    },
    {
      src: '/assets/gallery/netherlands.jpeg',
      name: 'Netherlands'
    },
    {
      src: '/assets/gallery/rome.jpg',
      name: 'Rome'
    },
    {
      src: '/assets/gallery/spain.jpg',
      name: 'Spain'
    },
    {
      src: '/assets/gallery/switzerland.jpg',
      name: 'Switzerland'
    },
  ]

  constructor(private dialog: MatDialog) { }

  openImgDialog(index) {
    this.dialog.open(GalleryDialogComponent, { data: { img: this.gallery[index] } })
  }


  ngOnInit() {
  }

}
