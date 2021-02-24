import { ImageGalleryService } from './_service/image-gallery.service';
import { Component, OnInit } from '@angular/core';
import * as data from './_service/image-collection'
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  galleryList;
  constructor( ) { }

  ngOnInit(): void {
    this.galleryList = data.galleryData;
  }

}
