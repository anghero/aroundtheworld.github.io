import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ImgDialog } from '../gallery.component';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImgDialog) {}


}
